import { AppProps } from "next/app";
import "@styles/global.scss";
import "@styles/style.scss";
import "@styles/grid.scss";
import Layout from "./Layout";
import '../src/fontello/css/fontello.css';
import '/src/styles/inc/_fonts.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <Layout headerFtrData={pageProps?.headerFtrData} pageData={pageProps?.pageData}>
          <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;


