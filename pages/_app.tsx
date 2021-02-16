import React from "react";
import useSWR from "swr";
import { AppProps } from "next/app";
import Layout from "@components/Layout";
import style from "./index.module.scss";

const fetcher = url => fetch(url).then(res => res.json());

export default function App({ Component, pageProps }: AppProps) {
  const { data, error } = useSWR("/api", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Layout data={data}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
