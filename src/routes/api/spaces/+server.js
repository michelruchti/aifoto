import { error as err, json } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { createClient } from '@supabase/supabase-js';
import { SECRET_SUPABASE_KEY } from '$env/static/private';
import { env } from '$env/dynamic/public';
import { createZip, uploadZip } from '$lib/utils/zip';

const supabase = createClient(env.PUBLIC_SUPABASE_URL, SECRET_SUPABASE_KEY);

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
	const { session } = await getSupabase(event);
	const { urls, instanceName, instanceClass } = await event.request.json();

	const { data, error } = await supabase
		.from('spaces')
		.insert({
			user_id: session.user.id,
			image_urls: urls,
			model_status: 'not_created',
			instance_name: instanceName.replace(/[^a-zA-Z0-9-]/g, ''),
			instance_class: instanceClass || 'person',
			credits: Number(env.PUBLIC_SHOT_AMOUNT) || 100
		})
		.select()
		.single();

	if (error) throw err(500, { error: error.message });
	const space_id = data.id;
	const zip = await createZip(urls, space_id);

	await uploadZip(zip, session.user.id, space_id);

	if (error) throw error;
	return json({ space_id });
}
