import nauth0 from "lib/nauth0";
import { initSentry, withSentry } from "lib/sentry";

initSentry();

export default withSentry(nauth0.handler());
