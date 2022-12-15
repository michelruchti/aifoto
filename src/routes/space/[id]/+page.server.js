import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { getSpaceWithShots } from '$lib/querries/backend';

/** @type {import('./$types').PageLoad} */
export async function load(event) {
	const { session } = await getSupabase(event);
	const spaceId = event.params.id;

	const space = await getSpaceWithShots(spaceId, session.user.id);

	return { space };
}
