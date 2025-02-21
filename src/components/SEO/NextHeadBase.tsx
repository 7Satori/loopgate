import Head from "next/head";

const NextHeadBase = () => {
  const baseUrl = "https://theancients.xyz/";
  const ogImgUrl = `${baseUrl}/images/splash.png`;
  const title = "The Ancients";
  const description =
    "An audio-visual experience. Civilizations from the cosmos and technologies from another realm await discovery.";

  return (
    <Head>
      <title>The Ancients</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={ogImgUrl} />
      <meta property="og:site_name" content="The Ancients" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImgUrl} />
      <link rel="shortcut icon" href="/images/favicon.png" />
    </Head>
  );
};

export default NextHeadBase;
