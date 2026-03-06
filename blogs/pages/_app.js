import '../styles/globals.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ThemeProvider = dynamic(() => import('mfeshared/ThemeProvider').then(mod => mod.ThemeProvider), { ssr: false });
const ReduxProvider = dynamic(() => import('host/ReduxProvider'), { ssr: false });
const ErrorBoundary = dynamic(() => import('mfeshared/ErrorBoundary').then(mod => mod.ErrorBoundary), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Head>
        <title>Wrangler Blogs | Stories from the Trail</title>
        <meta name="description" content="Read the latest stories, news, and guides from Wrangler." />
      </Head>
      <ReduxProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}
