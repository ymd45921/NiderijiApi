import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nideriji from "nideriji-api";

Nideriji.config({autoSetHeadersAfterLogin: false});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
