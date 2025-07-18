"use client"
import React, { useContext, useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className='bg-slate-100 dark:bg-gray-900 h-screen'>
      <style jsx global>{`
        .main-top-menu {
          display: none !important;
        }
      `}</style>

      <div className='md:w-64 hidden md:block fixed'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <Header />
        {children}
      </div>
    </div>
  )
}
export default layout