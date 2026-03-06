import React from 'react';

const Navbar = () => {
  const links = [
    { name: 'Page 1 (Host)', url: 'http://localhost:3001' },
    { name: 'Page 2 (Decide)', url: 'http://localhost:3002' },
    { name: 'Page 3 (Checkout)', url: 'http://localhost:3003' },
    { name: 'Page 4 (Blogs)', url: 'http://localhost:3004' },
  ];

  return (
    <nav className="fixed top-12 left-0 w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">MFE Demo</div>
        <div className="flex gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
