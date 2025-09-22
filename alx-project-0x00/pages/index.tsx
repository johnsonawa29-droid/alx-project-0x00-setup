import Head from "next/head";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>ALX Project 0x01</title>
        <meta name="description" content="Base setup for ALX Next.js project" />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1>Airbnb Application Clone system</h1>
      </main>
    </>
  );
};

export default Home;
