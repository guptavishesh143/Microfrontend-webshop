import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const SharedButton = dynamic(() => import('host/SharedButton'), { ssr: false });
const Navbar = dynamic(() => import('host/Navbar'), { ssr: false });
const Header = dynamic(() => import('host/Header'), { ssr: false });

export default function Home() {
  const sharedData = useSelector((state) => state.data?.sharedData || '');

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <Header />
      <Navbar />
      <main style={{ marginTop: '128px' }} className="flex flex-col items-center justify-center p-24 bg-white dark:bg-zinc-900 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Blogs Application (Page 4)</h1>
        <p className="text-lg mb-8 text-zinc-600 dark:text-zinc-400 text-center">
          Running on Port 3004. Final destination of our shared Redux state!
        </p>

        {sharedData ? (
          <div className="w-full mb-8 p-6 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800 text-center">
            <h2 className="text-sm font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wider mb-2">Blogs Data Value</h2>
            <p className="text-2xl font-black text-purple-900 dark:text-purple-100">{sharedData}</p>
          </div>
        ) : (
          <div className="w-full mb-8 p-6 bg-amber-50 dark:bg-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-800 text-center">
            <p className="text-amber-800 dark:text-amber-300">No data found in Redux. Go back to Page 1 to type something!</p>
          </div>
        )}

        <div className="flex gap-4">
          <a href="http://localhost:3003">
            <button className="px-6 py-3 bg-zinc-200 text-zinc-800 font-semibold rounded-lg hover:bg-zinc-300 transition-colors dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700">
              Back (Checkout App)
            </button>
          </a>
          <a href="http://localhost:3001">
            <SharedButton>Start Over (Host App)</SharedButton>
          </a>
        </div>
      </main>
    </div>
  );
}
