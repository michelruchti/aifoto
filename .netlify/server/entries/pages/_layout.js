import { getSupabase } from "@supabase/auth-helpers-sveltekit";
const load = async (event) => {
  const { session } = await getSupabase(event);
  return { session };
};
export {
  load
};
