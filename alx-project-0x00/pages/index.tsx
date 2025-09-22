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
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to ALX Project 0x01
        </h1>
      </main>
    </>
  );
};

export default Home;
