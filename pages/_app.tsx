import "../styles/globals.css";
import "@fontsource/roboto";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// noinspection JSUnusedGlobalSymbols
export default App;
