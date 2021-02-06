import React from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "nauth0";
import { deserialize } from "superjson";

import "tailwindcss/tailwind.css";
import { initSentry } from "lib/sentry";
import { SessionProps } from "lib/session";

initSentry();

function App({ Component, pageProps }: AppProps): JSX.Element {
  const props = deserialize<SessionProps>(pageProps);

  return (
    <SessionProvider value={props.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
