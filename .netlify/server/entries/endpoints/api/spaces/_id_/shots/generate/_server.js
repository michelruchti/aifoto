import { e as error, j as json } from "../../../../../../../chunks/index2.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { g as getSpace, a as generateShot, s as setCredits } from "../../../../../../../chunks/backend.js";
import { b as SECRET_REPLICATE_API_TOKEN } from "../../../../../../../chunks/private.js";
import { a as PUBLIC_SERVER_URL } from "../../../../../../../chunks/public.js";
async function POST(event) {
  const { session } = await getSupabase(event);
  const spaceId = await event.params.id;
  const { prompt } = await event.request.json();
  const space = await getSpace(spaceId, session.user.id);
  if (space.credits === 0)
    throw err(401, {
      message: "no credits"
    });
  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${SECRET_REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      version: "0c4346ba56ec4c989787f7c5486b223cb6f2c35b0e6225b84467cd69932cc677",
      input: { prompt },
      webhook_completed: `${PUBLIC_SERVER_URL}/callback/prediction_completed`
    })
  });
  if (!response.ok)
    throw error;
  const data = await response.json();
  const shot = await generateShot(spaceId, prompt, data.id);
  let credits = space.credits - 1;
  await setCredits(spaceId, credits);
  return json({ shot, credits });
}
export {
  POST
};
