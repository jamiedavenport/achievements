import nauth0 from "lib/nauth0";
import { initSentry } from "lib/sentry";

initSentry();

export default nauth0.handler();
