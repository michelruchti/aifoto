import { error, json } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { getSpace, updateSpace } from '$lib/querries/backend';
import { SECRET_REPLICATE_API_TOKEN, SECRET_REPLICATE_USERNAME } from '$env/static/private';
import { PUBLIC_SERVER_URL, PUBLIC_SUPABASE_URL } from '$env/static/public';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
	const { session } = await getSupabase(event);
	const spaceId = await event.params.id;

	const space = await getSpace(spaceId, session.user.id, 'not_created');

	/**
         	const instanceClass =
			space.instance_class === 'man' || space.instance_class === 'woman'
				? 'person'
				: space.instance_class;
         */

	const response = await fetch('https://dreambooth-api-experimental.replicate.com/v1/trainings', {
		method: 'POST',
		headers: {
			Authorization: `Token ${SECRET_REPLICATE_API_TOKEN}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			input: {
				instance_prompt: `a photo of a ${space.instance_name} ${space.instance_class}`,
				class_prompt: `a photo of a ${space.instance_class}`,
				instance_data: `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${space.user_id}/${space.id}.zip`,
				max_train_steps: 2000
				//	num_class_images: 50,
				//	learning_rate: 1e-6
			},
			model: `${SECRET_REPLICATE_USERNAME}/${space.id}`,
			webhook_completed: `${PUBLIC_SERVER_URL}/callback/model_completed`
		})
	});
	if (!response.ok) throw error;

	const { id } = await response.json();

	await updateSpace(spaceId, id);
	return json({ status: 'success' });
}

/**
 *{
  created_at: '2022-12-11T21:40:25.923260Z',
  error: null,
  id: 'bo5llbefjzgxjllupbq6o26nlu',
  input: {
    class_prompt: 'a photo of a man',
    instance_data: 'https://dyrbrnonmwxvggleqdva.supabase.co/storage/v1/object/public/images/71d54db5-40c7-4997-830a-6ca23d7570a5/0fa4b795-678f-43da-bcbf-60ed2d20690c.zip',
    instance_prompt: 'a photo of a lkjj man',
    max_train_steps: 2000
  },
  logs: null,
  model: 'michelruchti/0fa4b795-678f-43da-bcbf-60ed2d20690c',
  status: 'queued',
  webhook_completed: 'http://localhost:5173/callback/model_completed',
  version: null
}
*/
