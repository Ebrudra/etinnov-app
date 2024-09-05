"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateList from './_components/TemplateListSection'

function Dashboard (){
  const [userSearchInput,setUserSearchInput]=useState<string>()
  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />
      {/* Template List */}
      <TemplateList userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard