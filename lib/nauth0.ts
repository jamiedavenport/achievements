import nauth0 from "nauth0";
import { host } from "./config";

export default nauth0({
  domain: process.env.AUTH_DOMAIN,
  clientId: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  redirectUri: `${host}/api/auth/callback`,
  logoutRedirectUri: host,
  postLoginRedirectUri: host,
  scope: "openid profile",
  session: {
    cookieSecret: process.env.SECRET,
  },
});
