import "@supabase/auth-helpers-sveltekit";
import { createClient } from "@supabase/supabase-js";
import { a as SECRET_SUPABASE_KEY, S as SECRET_STRIPE_KEY } from "../../../chunks/private.js";
import { b as PUBLIC_SUPABASE_URL } from "../../../chunks/public.js";
import Stripe from "stripe";
const supabase = createClient(PUBLIC_SUPABASE_URL, SECRET_SUPABASE_KEY);
const stripe = new Stripe(SECRET_STRIPE_KEY, {
  apiVersion: "2022-11-15"
});
async function load({ url }) {
  var _a;
  const spaceId = url.searchParams.get("space_id");
  const sessionId = url.searchParams.get("session_id");
  if (!spaceId || !sessionId)
    return;
  const stripeSession = await stripe.checkout.sessions.retrieve(sessionId);
  if (stripeSession.payment_status === "paid" && ((_a = stripeSession.metadata) == null ? void 0 : _a.space_id) === spaceId) {
    await supabase.from("spaces").update({ stripe_payment_id: stripeSession.id }).eq("id", spaceId);
  }
  return;
}
export {
  load
};
