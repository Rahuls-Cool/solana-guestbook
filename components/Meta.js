import Head from "next/head";

export default function Meta({ title }) {
  const siteTitle = "Rahul's GuestBook";
  const description = "Using Solana Blockchain to record guestbook entries";
  const keywords = "Rahul's GuestBook";
  const author = "Rahul";
  const twitter = "@Rahuls_Coding";
  const themeColor = "#ffffff";
  const darkThemeColor = "#131828";
  const image = "https://i.ibb.co/3kKGYt2/Rocket.png";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>
         {siteTitle}
      </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta
        name="theme-color"
        content={themeColor}
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content={darkThemeColor}
        media="(prefers-color-scheme: dark)"
      />
      <meta property="og:url" content="yourdomain.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
    </Head>
  );
}
