import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Pixel art images, generated with AI."
          />
          <meta
            property="og:description"
            content="Pixel art images, generated with AI."
          />
          <meta
            property="og:title"
            content="Pixel art images, generated with AI."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AI Pixel art images" />
          <meta
            name="twitter:description"
            content="Pixel art images, generated with AI."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
