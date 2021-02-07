import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "nauth0";
import { deserialize } from "superjson";
import * as Fathom from "fathom-client";
import { initSentry } from "lib/sentry";
import { SessionProps } from "lib/session";
import { useRouter } from "next/dist/client/router";

import "tailwindcss/tailwind.css";

initSentry();

function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("LXSEWIWP", {
      includedDomains: ["achievements.jamiedavenport.dev"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  let session;
  try {
    const props = deserialize<SessionProps>(pageProps);
    session = props.session;
  } catch {}

  return (
    <SessionProvider value={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
