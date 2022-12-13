import { error, json } from '@sveltejs/kit';
import { trainingFinished } from '$lib/querries/backend';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { id, status, version } = await request.json();

	if (status === 'succeeded') await trainingFinished(id, version);

	return json({ status: 'success' });
}
