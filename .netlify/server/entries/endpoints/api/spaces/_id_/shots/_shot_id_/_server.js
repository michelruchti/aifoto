import { j as json } from "../../../../../../../chunks/index2.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { g as getSpace, b as getShot } from "../../../../../../../chunks/backend.js";
async function GET(event) {
  const { session } = await getSupabase(event);
  const spaceId = await event.params.id;
  const shotId = await event.params.shot_id;
  const space = await getSpace(spaceId, session.user.id);
  const shot = await getShot(space.id, shotId);
  return json(shot);
}
export {
  GET
};
