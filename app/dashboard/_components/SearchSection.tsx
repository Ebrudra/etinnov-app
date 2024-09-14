import { Search } from 'lucide-react';
import React from 'react';

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white dark:from-gray-800 dark:via-gray-900 dark:to-black'>
      <h2 className='text-2xl font-black'>Browse all tools</h2>
      <p>What tool do you want to use today!</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white dark:bg-gray-800 my-5 w-[50%]'>
          <Search className='text-primary dark:text-white' />
          <input
            type='text'
            placeholder='Search'
            onChange={(event) => onSearchInput(event.target.value)}
            className='bg-transparent w-full outline-none text-primary dark:text-white'
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;