import { error, json } from '@sveltejs/kit';
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

	try {
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
			.select();
		const spaceId = data[0].id;
		const zip = await createZip(urls, spaceId);

		await uploadZip(zip, session.user.id, spaceId);

		if (error) throw error;
		return json({ space_id: data[0].id });
	} catch (error) {
		if (error instanceof Error) console.error(error.message);
		return error(500, error);
	}
}
