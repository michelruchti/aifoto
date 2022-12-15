import { error } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { createClient } from '@supabase/supabase-js';
import { SECRET_SUPABASE_KEY, SECRET_STRIPE_KEY } from '$env/static/private';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import Stripe from 'stripe';

const supabase = createClient(PUBLIC_SUPABASE_URL, SECRET_SUPABASE_KEY);

const stripe = new Stripe(SECRET_STRIPE_KEY, {
	apiVersion: '2022-11-15'
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const spaceId = url.searchParams.get('space_id');
	const sessionId = url.searchParams.get('session_id');

	if (!spaceId || !sessionId) return;

	const stripeSession = await stripe.checkout.sessions.retrieve(sessionId);

	if (stripeSession.payment_status === 'paid' && stripeSession.metadata?.space_id === spaceId) {
		const { error } = await supabase
			.from('spaces')
			.update({ stripe_payment_id: stripeSession.id })
			.eq('id', spaceId);
	}

	return;
}
