import Document, { Html, Main, Head, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html className={this.getTheme()}>
        <Head />
          <meta name="title" content="Texas Eclipse Glasses" />
          <meta name="description" content="Certified eclipse glasses to view the 2023 and 2024 solar eclipse | Made in America." />
          <meta property="og:site_name" content="texaseclipseglasses.com" />
          <meta
            property="og:description"
            content="Certified eclipse glasses to view the 2023 and 2024 solar eclipse | Made in America."
          />
          <meta property="og:title" content="Texas Eclipse Glasses" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Texas Eclipse Glasses" />
          <meta
            property="twitter:description"
            content="Certified eclipse glasses to view the 2023 and 2024 solar eclipse | Made in America."
          />
          <meta
            property="og:image"
            content="https://texaseclipseglasses.com/preview.png"
          />
          <meta
            property="twitter:image"
            content="https://texaseclipseglasses.com/preview.png"
          />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  private getTheme() {
    return this.props.__NEXT_DATA__.props.pageProps?.ui?.theme;
  }
}
