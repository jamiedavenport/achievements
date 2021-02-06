import { initSentry } from "lib/sentry";

initSentry();

function work() {
  throw new Error("API Test 3");
}

export default async function handler(req, res) {
  work();

  res.status(200).json({ name: "John Doe" });
}
