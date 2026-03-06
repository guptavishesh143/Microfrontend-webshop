import '../styles/globals.css';
import dynamic from 'next/dynamic';

const ReduxProvider = dynamic(() => import('../store/ReduxProvider'), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
