import { error as err } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import { SECRET_SUPABASE_KEY } from '$env/static/private';
import { env } from '$env/dynamic/public';

const supabase = createClient(env.PUBLIC_SUPABASE_URL, SECRET_SUPABASE_KEY);

export const getSpace = async (spaceId, userId) => {
	const { data, error } = await supabase
		.from('spaces')
		.select()
		.eq('id', spaceId)
		.eq('user_id', userId)
		.eq('model_status', 'not_created')
		.neq('stripe_payment_id', null);

	if (error)
		throw err(500, {
			message: error.message
		});

	if (!data.length)
		throw err(404, {
			message: 'not found'
		});

	return data[0];
};

export const getSpaceWithShots = async (spaceId, userId) => {
	const { data, error } = await supabase
		.from('spaces')
		.select(`*, shots(*)`)
		.eq('id', spaceId)
		.eq('user_id', userId)
		.eq('model_status', 'succeeded')
		.neq('stripe_payment_id', null);

	if (error)
		throw err(500, {
			message: error.message
		});

	if (!data.length)
		throw err(404, {
			message: 'not found'
		});

	return data[0];
};

export const updateSpace = async (spaceId, modelId) => {
	const { data, error } = await supabase
		.from('spaces')
		.update({
			replicate_model_id: modelId,
			model_status: 'processing'
		})
		.eq('id', spaceId)
		.neq('stripe_payment_id', null);

	if (error)
		throw err(500, {
			message: error.message
		});

	return;
};

export const trainingFinished = async (modelId, versionId) => {
	const { data, error } = await supabase
		.from('spaces')
		.update({
			model_status: 'succeeded',
			model_version_id: versionId
		})
		.eq('replicate_model_id', modelId)
		.neq('stripe_payment_id', null);

	if (error)
		throw err(500, {
			message: error.message
		});

	return;
};
