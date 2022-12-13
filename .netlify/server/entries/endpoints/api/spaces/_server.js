import { e as error, j as json } from "../../../../chunks/index2.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { createClient } from "@supabase/supabase-js";
import { a as SECRET_SUPABASE_KEY } from "../../../../chunks/private.js";
import { b as PUBLIC_SUPABASE_URL, c as PUBLIC_SHOT_AMOUNT } from "../../../../chunks/public.js";
import JSZip from "jszip";
import sharp from "sharp";
import smartcrop from "smartcrop-sharp";
import { StorageClient } from "@supabase/storage-js";
const STORAGE_URL = `${PUBLIC_SUPABASE_URL}/storage/v1`;
const storageClient = new StorageClient(STORAGE_URL, {
  apikey: SECRET_SUPABASE_KEY,
  Authorization: `Bearer ${SECRET_SUPABASE_KEY}`
});
const zip = new JSZip();
const WIDTH = 512;
const HEIGHT = 512;
const createZip = async (urls, spacecId) => {
  try {
    const responses = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(
          `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${url}`
        );
        const arrayBuffer = await response.arrayBuffer();
        return new Uint8Array(arrayBuffer);
      })
    );
    const buffersPromises = responses.map((buffer) => {
      return smartcrop.crop(buffer, { width: WIDTH, height: HEIGHT }).then(function(result) {
        const crop = result.topCrop;
        return sharp(buffer).extract({
          width: crop.width,
          height: crop.height,
          left: crop.x,
          top: crop.y
        }).resize(WIDTH, HEIGHT).toBuffer();
      });
    });
    const buffers = await Promise.all(buffersPromises);
    const folder = zip.folder(spacecId);
    buffers.forEach((buffer, i) => {
      const filename = urls[i].split("/").pop();
      folder.file(filename, buffer, { binary: true });
    });
    const zipContent = await zip.generateAsync({ type: "nodebuffer" });
    return zipContent;
  } catch (error2) {
    console.error(error2);
  }
};
const uploadZip = async (zip2, userId, projectId) => {
  const filePath = `${userId}/${projectId}.zip`;
  try {
    let { error: error2 } = await storageClient.from("images").upload(filePath, zip2, {
      contentType: "application/zip"
    });
    if (error2)
      throw error2;
  } catch (error2) {
    console.log(error2);
  }
  return;
};
const supabase = createClient(PUBLIC_SUPABASE_URL, SECRET_SUPABASE_KEY);
async function POST(event) {
  const { session } = await getSupabase(event);
  const { urls, instanceName, instanceClass } = await event.request.json();
  const { data, error: error$1 } = await supabase.from("spaces").insert({
    user_id: session.user.id,
    image_urls: urls,
    model_status: "not_created",
    instance_name: instanceName.replace(/[^a-zA-Z0-9-]/g, ""),
    instance_class: instanceClass || "person",
    credits: Number(PUBLIC_SHOT_AMOUNT) || 100
  }).select().single();
  if (error$1)
    throw error(500, { error: error$1.message });
  const space_id = data.id;
  const zip2 = await createZip(urls, space_id);
  await uploadZip(zip2, session.user.id, space_id);
  if (error$1)
    throw error$1;
  return json({ space_id });
}
export {
  POST
};
