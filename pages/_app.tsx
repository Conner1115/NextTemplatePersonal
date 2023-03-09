import "styles/globals.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { Modal } from "application/components";
import { tokens } from "application/ui";

function AppContainer({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title>IroncladDev</title>
        <link rel="icon" href="/brand/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Website" />
        <meta property="og:description" content="A website" />
        <meta name="description" content="A website" />
        {/*         <meta property="og:image" content="/public/brand/favicon.svg" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="700" />
        <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="copyright" content="2023" />
      </Head>
      <NextNProgress
        options={{ showSpinner: false }}
        color={tokens.accentPrimaryDefault}
      />
      <div className="root">
        <Component {...pageProps} />
        <Modal />
      </div>
    </>
  );
}

export default AppContainer;
