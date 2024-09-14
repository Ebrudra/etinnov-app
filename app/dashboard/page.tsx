"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateList from './_components/TemplateListSection'

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>()

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-100 min-h-screen p-5">
      {/* Search Section */}
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
      
      {/* Template List */}
      <TemplateList userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard
