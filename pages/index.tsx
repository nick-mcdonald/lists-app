import { Button } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';

import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="bg-indigo-500">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="bg-purple-500">
          <Link href="/lists">List</Link>
        </p>

        <Button>Click me</Button>
      </main>
    </div>
  );
}
