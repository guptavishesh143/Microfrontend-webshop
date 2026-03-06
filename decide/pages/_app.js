import '../styles/globals.css';
import dynamic from 'next/dynamic';

// Next.js requires dynamic import for federated modules
const ReduxProvider = dynamic(() => import('host/ReduxProvider'), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
