import "../styles/globals.css";
import type { AppProps } from "next/app";
import BackgroundAnimation from "../components/BackgroundAnimation";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Kako Dong | Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative text-white">
                <BackgroundAnimation />
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
