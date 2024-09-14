"use client"
import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className='bg-slate-100 dark:bg-gray-900 h-screen'>
      <div className='md:w-64 hidden md:block fixed'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <Header />
        <div className="p-5 bg-white dark:bg-gray-800 dark:text-gray-100 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout
