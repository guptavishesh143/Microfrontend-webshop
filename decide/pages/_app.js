import '../styles/globals.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Next.js requires dynamic import for federated modules
const ReduxProvider = dynamic(() => import('host/ReduxProvider'), { ssr: false });
const ThemeProvider = dynamic(() => import('mfeshared/ThemeProvider').then(mod => mod.ThemeProvider), { ssr: false });
const ErrorBoundary = dynamic(() => import('mfeshared/ErrorBoundary').then(mod => mod.ErrorBoundary), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Head>
        <title>Wrangler Shop | Discover New Arrivals</title>
        <meta name="description" content="Explore our latest collection of Wrangler apparel. From timeless jeans to modern styles." />
      </Head>
      <ReduxProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}
