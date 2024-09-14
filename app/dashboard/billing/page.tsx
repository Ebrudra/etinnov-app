import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

function Billing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center m-5 p-5">
        <h1 className="text-5xl font-extrabold mb-4 sm:text-6xl text-gray-900 dark:text-gray-100">
          Simple, transparent pricing
        </h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
          Upgrade to Pro Plan to fit your needs
        </p>

        <div className="text-start flex flex-col md:flex-row gap-8 ">
          {/* Free Plan Card */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md max-w-sm">
            <h2 className="text-2xl text-primary font-bold mb-4">Free</h2>
            <p className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">0 Dh</p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              The most used and loved AI platform for educators.
            </p>
            <ul className="text-left list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
              <li>10,000 Words/Month</li>
              <li>50+ AI Tools</li>
              <li>Unlimited Download & Copy</li>
              <li>1 Month of History</li>
            </ul>
          </div>

          {/* Pro Plan Card */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md max-w-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Pro</h2>
            <p className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">2 Dh/Day</p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              For educators who want unlimited access and additional features.
            </p>
            <ul className="text-left list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
              <li>Unlimited AI generations</li>
              <li>Unlimited output history</li>
              <li>1-Click exports to popular LMS</li>
              <li>Early access to new features and tools</li>
            </ul>
            <Link href='/dashboard/billing'>
              <Button variant={'default'} className='w-full my-3'>
                Upgrade
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
