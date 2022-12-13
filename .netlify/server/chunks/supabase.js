import { createClient } from "@supabase/auth-helpers-sveltekit";
import { b as PUBLIC_SUPABASE_URL, d as PUBLIC_SUPABASE_ANON_KEY } from "./public.js";
createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
