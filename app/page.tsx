import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const CustomButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} passHref>
    <div className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md cursor-pointer">
      {children}
    </div>
  </Link>
);

const Home: NextPage = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col items-center justify-center">
      <Head>
        <title>Agromatching</title>
        <meta name="description" content="Your agriculture matchmaking platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-20 text-center">
        <section className="hero mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Transforming the Future of Agriculture
          </h1>
          <p className="text-lg text-ice-700 mb-8">
            Connect with the right partners, find innovative solutions, and shape
            a sustainable future for your business.
          </p>

          {/* Login and Registration Links */}
          <div className="flex items-center justify-center space-x-4"> 
            <CustomButton href="/login">Login</CustomButton>
            <CustomButton href="/registration">Get Started</CustomButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
