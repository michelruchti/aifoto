import { error as err } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import { SECRET_SUPABASE_KEY } from '$env/static/private';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';

const supabase = createClient(PUBLIC_SUPABASE_URL, SECRET_SUPABASE_KEY);

export const getSpace = async (spaceId, userId, status) => {
	const { data, error } = await supabase
		.from('spaces')
		.select()
		.eq('id', spaceId)
		.eq('user_id', userId)
		.eq('status', status)
		.neq('stripe_payment_id', null)
		.single();

	if (error)
		throw err(500, {
			message: error.message
		});

	if (!data)
		throw err(404, {
			message: 'not found'
		});

	return data;
};

export const getSpaceWithShots = async (spaceId, userId) => {
	const { data, error } = await supabase
		.from('spaces')
		.select(`*, shots(*)`)
		.eq('id', spaceId)
		.eq('user_id', userId)
		.eq('model_status', 'succeeded')
		.neq('stripe_payment_id', null)
		.single();

	if (error)
		throw err(500, {
			message: error.message
		});

	if (!data)
		throw err(404, {
			message: 'not found'
		});

	return data;
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

export const generateShot = async (space_id, prompt, replicate_id) => {
	const { data, error } = await supabase
		.from('shots')
		.insert({
			space_id,
			prompt,
			replicate_id,
			status: 'processing'
		})
		.select()
		.single();

	if (error)
		throw err(500, {
			message: error.message
		});

	return data;
};

export const updateShot = async (replicateId, status, shot_url) => {
	const { data, error } = await supabase
		.from('shots')
		.update({
			status,
			shot_url
		})
		.eq('replicate_id', replicateId)
		.select()
		.single();

	if (error) {
		console.log(error);
		throw err(500, {
			message: error.message
		});
	}

	return data;
};

export const setCredits = async (spaceId, credits) => {
	const { data, error } = await supabase
		.from('spaces')
		.update({
			credits
		})
		.select()
		.eq('id', spaceId)
		.neq('stripe_payment_id', null)
		.single();

	if (error)
		throw err(500, {
			message: error.message
		});

	return;
};

export const getShot = async (spaceId, shotId) => {
	const { data, error } = await supabase
		.from('shots')
		.select()
		.eq('id', shotId)
		.eq('space_id', spaceId)
		.single();

	if (error)
		throw err(500, {
			message: error.message
		});

	if (!data)
		throw err(404, {
			message: 'not found'
		});

	return data;
};
