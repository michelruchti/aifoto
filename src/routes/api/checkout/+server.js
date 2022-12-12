import { error, json } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { SECRET_STRIPE_KEY } from '$env/static/private';
import { env } from '$env/dynamic/public';

import Stripe from 'stripe';
const stripe = new Stripe(SECRET_STRIPE_KEY, {
	apiVersion: '2022-11-15'
});

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
	try {
		const { session } = await getSupabase(event);
		const { space_id } = await event.request.json();

		const stripeSession = await stripe.checkout.sessions.create({
			allow_promotion_codes: true,
			customer_email: session.user.email,
			metadata: {
				space_id
			},
			line_items: [
				{
					price_data: {
						currency: 'usd',
						unit_amount: Number(env.PUBLIC_STRIPE_SPACE_PRICE) * 100,
						product_data: {
							name: 'AI model training + 100 shots'
						}
					},
					quantity: 1
				}
			],
			mode: 'payment',
			success_url: `${env.PUBLIC_SERVER_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}&space_id=${space_id}`,
			cancel_url: `${env.PUBLIC_SERVER_URL}/dashboard`
		});

		return new json({ url: stripeSession.url });
	} catch (error) {
		throw error(500, { error });
	}
}
