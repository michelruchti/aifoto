import { error, json } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { getSpace, getShot } from '$lib/querries/backend';

/** @type {import('./$types').RequestHandler} */

export async function GET(event) {
	const { session } = await getSupabase(event);

	const spaceId = await event.params.id;
	const shotId = await event.params.shot_id;

	const space = await getSpace(spaceId, session.user.id);
	const shot = await getShot(space.id, shotId);

	return json(shot);
}
