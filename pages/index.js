import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Outdoor Tent Rental</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-otr-secondaryLightOrange">
        Lets build Outdoor tent rental
      </h1>
    </div>
  );
}
