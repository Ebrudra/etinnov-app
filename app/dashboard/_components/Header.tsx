import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Header = () => {
  // State to track the current theme (light/dark)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
    }
  };

  // Apply the saved theme on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white dark:bg-gray-800'>
      {/* Search bar */}
      <div className='gap-2 items-center p-2 border rounded-md max-w-lg bg-white dark:bg-gray-700 hidden sm:flex'>
        <Search />
        <input
          type='text'
          placeholder='Search...'
          className='outline-none bg-white dark:bg-gray-700 dark:text-white'
        />
      </div>

      {/* Right section: Membership and User */}
      <div className='flex gap-3 items-center'>
      <Link href='/dashboard/billing'>
  <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2 dark:bg-primary dark:text-primary-foreground'>
    🔥 Join Membership just for 2 Dh/Day 🔥
  </h2>
</Link>


        {/* Dark/Light mode toggle button */}
        <button
          onClick={toggleTheme}
          className='p-2 border rounded-md bg-white dark:bg-gray-700 text-black dark:text-white'
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>

        {/* User button */}
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
