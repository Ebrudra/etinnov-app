import React from 'react';
import Image from 'next/image';
import { TEMPLATE } from './TemplateListSection';
import Link from 'next/link';

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/' + item.slug}>
      <div className="p-5 shadow-md border rounded-2xl bg-white dark:bg-gray-800 flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all justify-center items-center dark:border-gray-700">
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-medium text-lg text-gray-900 dark:text-gray-200">{item.name}</h2>
        <p className="text-gray-500 dark:text-gray-400 line-clamp-3">{item.description}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
