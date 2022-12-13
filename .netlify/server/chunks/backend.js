import { e as error } from "./index2.js";
import { createClient } from "@supabase/supabase-js";
import { a as SECRET_SUPABASE_KEY } from "./private.js";
import { b as PUBLIC_SUPABASE_URL } from "./public.js";
const supabase = createClient(PUBLIC_SUPABASE_URL, SECRET_SUPABASE_KEY);
const getSpace = async (spaceId, userId) => {
  const { data, error: error$1 } = await supabase.from("spaces").select().eq("id", spaceId).eq("user_id", userId).neq("stripe_payment_id", null).single();
  if (error$1)
    throw error(500, {
      message: error$1.message
    });
  if (!data)
    throw error(404, {
      message: "not found"
    });
  return data;
};
const getSpaceWithShots = async (spaceId, userId) => {
  const { data, error: error$1 } = await supabase.from("spaces").select(`*, shots(*)`).eq("id", spaceId).eq("user_id", userId).eq("model_status", "succeeded").neq("stripe_payment_id", null).single();
  if (error$1)
    throw error(500, {
      message: error$1.message
    });
  if (!data)
    throw error(404, {
      message: "not found"
    });
  return data;
};
const updateSpace = async (spaceId, modelId) => {
  const { data, error: error$1 } = await supabase.from("spaces").update({
    replicate_model_id: modelId,
    model_status: "processing"
  }).eq("id", spaceId).neq("stripe_payment_id", null);
  if (error$1)
    throw error(500, {
      message: error$1.message
    });
  return;
};
const trainingFinished = async (modelId, versionId) => {
  const { data, error: error$1 } = await supabase.from("spaces").update({
    model_status: "succeeded",
    model_version_id: versionId
  }).eq("replicate_model_id", modelId).neq("stripe_payment_id", null);
  if (error$1)
    throw error(500, {
      message: error$1.message
    });
  return;
};
const generateShot = async (space_id, prompt, replicate_id) => {
  const { data, error: error$1 } = await supabase.from("shots").insert({
    space_id,
    prompt,
    replicate_id,
    status: "processing"
  }).select().single();
  if (error$1)
    throw error(500, {
      message: error$1.message
    });
  return data;
};
const updateShot = async (replicateId, status, shot_url) => {
  const { data, error: error$1 } = await supabase.from("shots").update({
    status,
    shot_url
  }).eq("replicate_id", replicateId).select().single();
  if (error$1) {
    console.log(error$1);
    throw error(500, {
      message: error$1.message
    });
  }
  return data;
};
const setCredits = async (spaceId, credits) => {
  const { data, error: error$1 } = await supabase.from("spaces").update({
    credits
  }).select().eq("id", spaceId).neq("stripe_payment_id", null).single();
  if (error$1)
    throw error(500, {
      message: error$1.message
    });
  return;
};
const getShot = async (spaceId, shotId) => {
  const { data, error: error$1 } = await supabase.from("shots").select().eq("id", shotId).eq("space_id", spaceId).single();
  if (error$1)
    throw error(500, {
      message: error$1.message
    });
  if (!data)
    throw error(404, {
      message: "not found"
    });
  return data;
};
export {
  generateShot as a,
  getShot as b,
  updateShot as c,
  getSpaceWithShots as d,
  getSpace as g,
  setCredits as s,
  trainingFinished as t,
  updateSpace as u
};
