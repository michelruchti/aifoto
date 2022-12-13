import { j as json } from "../../../../chunks/index2.js";
import { t as trainingFinished } from "../../../../chunks/backend.js";
async function POST({ request }) {
  const { id, status, version } = await request.json();
  if (status === "succeeded")
    await trainingFinished(id, version);
  return json({ status: "success" });
}
export {
  POST
};
