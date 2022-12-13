import { e as error, j as json } from "../../../../../../chunks/index2.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { g as getSpace, u as updateSpace } from "../../../../../../chunks/backend.js";
import { b as SECRET_REPLICATE_API_TOKEN, c as SECRET_REPLICATE_USERNAME } from "../../../../../../chunks/private.js";
import { b as PUBLIC_SUPABASE_URL, a as PUBLIC_SERVER_URL } from "../../../../../../chunks/public.js";
async function POST(event) {
  const { session } = await getSupabase(event);
  const spaceId = await event.params.id;
  const space = await getSpace(spaceId, session.user.id);
  const response = await fetch("https://dreambooth-api-experimental.replicate.com/v1/trainings", {
    method: "POST",
    headers: {
      Authorization: `Token ${SECRET_REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      input: {
        instance_prompt: `a photo of a ${space.instance_name} ${space.instance_class}`,
        class_prompt: `a photo of a ${space.instance_class}`,
        instance_data: `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${space.user_id}/${space.id}.zip`,
        max_train_steps: 2e3
      },
      model: `${SECRET_REPLICATE_USERNAME}/${space.id}`,
      webhook_completed: `${PUBLIC_SERVER_URL}/callback/model_completed`
    })
  });
  if (!response.ok)
    throw error;
  const { id } = await response.json();
  await updateSpace(spaceId, id);
  return json({ status: "success" });
}
export {
  POST
};
