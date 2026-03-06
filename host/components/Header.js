import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-indigo-600 text-white shadow-md z-[60] h-12 flex items-center px-6">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 text-xs font-bold">A</span>
                </div>
                <span className="font-semibold tracking-tight">Aceturtle Portal</span>
            </div>
            <div className="ml-auto flex items-center gap-4 text-xs font-medium opacity-90">
                <span>Support</span>
                <span>Account</span>
            </div>
        </header>
    );
};

export default Header;
