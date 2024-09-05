"use client"
import { FileClock, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
// import path from 'path'
import React, { useEffect } from 'react'
import Link from 'next/link'
import UsageTrack from './UsageTrack'

function SideNav() {

  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard'
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history'
    },
    {
      name: 'Billing',
      icon: Wallet,
      path: '/dashboard/billing'
    },
    {
      name: 'Setting',
      icon: Settings,
      path: '/dashboard/settings'
    }
  ]

  const path = usePathname();
  useEffect(() => {
    console.log(path)
  }, [])

  return (
    <div className=' relative h-screen p-5 shadow-sm border  bg-white'>
      <div className='flex justify-center pb-5'>
        <Image src={'/next.svg'} alt={'logo'} width={100} height={100} />
      </div>
      <hr className='my-5 border' />
      <div className='mt-3'>
        {MenuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center 
            ${path == menu.path && 'bg-primary text-white'} 
            `}>
              <menu.icon className='w-6 h-6' />
              <h2 className='text-lg'>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className='absolute bottom-5 w-full left-0'>
        <UsageTrack />
      </div>
    </div>

  )
}

export default SideNav