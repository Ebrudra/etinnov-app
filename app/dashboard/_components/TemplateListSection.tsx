import React, { useEffect, useState } from 'react';
import Templates from '@/app/(data)/Templates';
import TemplateCard from './TemplateCard';

export interface TEMPLATE {
  name: string;
  description: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateList({ userSearchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className="m-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 bg-white dark:bg-gray-900">
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplateCard key={index} {...item} />
      ))}
    </div>
  );
}

export default TemplateList;