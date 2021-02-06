import React from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "nauth0";

import "tailwindcss/tailwind.css";
import { initSentry } from "lib/sentry";

initSentry();

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SessionProvider value={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
