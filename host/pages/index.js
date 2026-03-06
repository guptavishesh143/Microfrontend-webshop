import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { setSharedData } from '../store/dataSlice';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const SharedButton = dynamic(() => import('../components/SharedButton'), { ssr: false });

export default function Home() {
  const dispatch = useDispatch();
  const sharedData = useSelector((state) => state.data.sharedData);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <Navbar />
      <main style={{ marginTop: '128px' }} className="flex flex-col items-center justify-center p-24 bg-white dark:bg-black rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Host Application (Page 1)</h1>
        <p className="text-lg mb-8 text-zinc-600 dark:text-zinc-400 text-center">
          Running on Port 3001. Enter data here to sync to other microfrontends.
        </p>

        <div className="w-full mb-8">
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            Shared Data Input
          </label>
          <input
            type="text"
            value={sharedData}
            onChange={(e) => dispatch(setSharedData(e.target.value))}
            className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Type something to share..."
          />
        </div>

        <div className="flex gap-4">
          <a href="http://localhost:3002">
            <SharedButton>Next (Decide App)</SharedButton>
          </a>
        </div>
      </main>
    </div>
  );
}
