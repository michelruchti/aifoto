import { j as json } from "../../../../chunks/index2.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { S as SECRET_STRIPE_KEY } from "../../../../chunks/private.js";
import { P as PUBLIC_STRIPE_SPACE_PRICE, a as PUBLIC_SERVER_URL } from "../../../../chunks/public.js";
import Stripe from "stripe";
const stripe = new Stripe(SECRET_STRIPE_KEY, {
  apiVersion: "2022-11-15"
});
async function POST(event) {
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
            currency: "usd",
            unit_amount: Number(PUBLIC_STRIPE_SPACE_PRICE) * 100,
            product_data: {
              name: "AI model training + 100 shots"
            }
          },
          quantity: 1
        }
      ],
      mode: "payment",
      success_url: `${PUBLIC_SERVER_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}&space_id=${space_id}`,
      cancel_url: `${PUBLIC_SERVER_URL}/dashboard`
    });
    return new json({ url: stripeSession.url });
  } catch (error) {
    throw error(500, { error });
  }
}
export {
  POST
};
