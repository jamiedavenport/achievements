import React from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "nauth0";
import * as Sentry from "@sentry/node";

import "tailwindcss/tailwind.css";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV === "production",
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SessionProvider value={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
