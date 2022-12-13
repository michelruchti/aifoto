import { error, json } from '@sveltejs/kit';
import { updateShot } from '$lib/querries/backend';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { id, status, output } = await request.json();

	if (status === 'succeeded') await updateShot(id, status, output[0]);

	return json({ status: 'success' });
}
