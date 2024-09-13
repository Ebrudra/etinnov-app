import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const TopMenu: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/etinnov.svg" alt="Etinnov Logo" width={120} height={40} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/about" className="font-poppins text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/blog" className="font-poppins text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </Link>
              <Link href="/community" className="font-poppins text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                Community
              </Link>
              <Link href="/pricing" className="font-poppins text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </Link>
              <Link href="/sign-in">
                <Button variant="outline" className="font-poppins ml-4">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;