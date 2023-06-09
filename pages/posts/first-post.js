import Link from "next/link";
import Headers from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <Layout>
      <Headers>
        <title>First Post</title>
      </Headers>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
