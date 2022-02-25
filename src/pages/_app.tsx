import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "../utilities/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={client}>
        <Header />
        <div
          className="
          container 
          mx-auto "
        >
          <Component {...pageProps} />
        </div>
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
