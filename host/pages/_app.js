import '../styles/globals.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ThemeProvider = dynamic(() => import('mfeshared/ThemeProvider').then(mod => mod.ThemeProvider), { ssr: false });
const ReduxProvider = dynamic(() => import('../store/ReduxProvider'), { ssr: false });
const ErrorBoundary = dynamic(() => import('mfeshared/ErrorBoundary').then(mod => mod.ErrorBoundary), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Head>
        <title>Wrangler | Quality Denim & Apparel</title>
        <meta name="description" content="Iconic Wrangler denim, shirts, and outdoor apparel. Quality crafted since 1947." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ReduxProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}
