import Layout from "../components/Layout";
import "../styles/layout.css"

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Blog" description="My Personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
}
