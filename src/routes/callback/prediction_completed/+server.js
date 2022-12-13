import { error, json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import { SECRET_SUPABASE_KEY } from '$env/static/private';
import { env } from '$env/dynamic/public';
import { updateShot } from '$lib/querries/backend';

const supabase = createClient(env.PUBLIC_SUPABASE_URL, SECRET_SUPABASE_KEY);

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { id, status, output } = await request.json();

	if (status === 'succeeded') await updateShot(id, status, output[0]);

	return json({ status: 'success' });
}
