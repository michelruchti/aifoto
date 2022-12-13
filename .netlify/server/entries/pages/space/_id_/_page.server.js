import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { d as getSpaceWithShots } from "../../../../chunks/backend.js";
async function load(event) {
  const { session } = await getSupabase(event);
  const spaceId = event.params.id;
  const space = await getSpaceWithShots(spaceId, session.user.id);
  return { space };
}
export {
  load
};
