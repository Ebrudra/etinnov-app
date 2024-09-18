import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next'; // Import useTranslation
import i18n from 'i18next'; // Import i18n to change the language

const Header = () => {
  const { t } = useTranslation(); // Use useTranslation to get the translation function
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  const toggleTheme = () => {
    if (theme) {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  // Function to handle language change
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white dark:bg-gray-800'>
      {/* Search bar */}
      <div className='gap-2 items-center p-2 border rounded-md max-w-lg bg-white dark:bg-gray-700 hidden sm:flex'>
        <Search />
        <input
          type='text'
          placeholder={t('Search...')} // Use translated text
          className='outline-none bg-white dark:bg-gray-700 dark:text-white'
        />
      </div>

      {/* Right section: Membership, Language, and User */}
      <div className='flex gap-3 items-center'>
        <Link href='/dashboard/billing'>
          <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2 dark:bg-primary dark:text-primary-foreground'>
            🔥 {t('join membership')} 🔥
          </h2>
        </Link>

        {/* Language Selector */}
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className='p-2 border rounded-md bg-white dark:bg-gray-700 text-black dark:text-white'
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
        </select>

        {/* Dark/Light mode toggle button */}
        <button
          onClick={toggleTheme}
          className='p-2 border rounded-md bg-white dark:bg-gray-700 text-black dark:text-white'
        >
          {theme === 'light' ? '🌙 Dark Mode' : theme === 'dark' ? '☀️ Light Mode' : '...'}
        </button>

        {/* User button */}
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
