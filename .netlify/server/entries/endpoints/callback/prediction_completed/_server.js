import { j as json } from "../../../../chunks/index2.js";
import { c as updateShot } from "../../../../chunks/backend.js";
async function POST({ request }) {
  const { id, status, output } = await request.json();
  if (status === "succeeded")
    await updateShot(id, status, output[0]);
  return json({ status: "success" });
}
export {
  POST
};
