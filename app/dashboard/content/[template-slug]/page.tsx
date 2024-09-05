"use client"
import React from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import CreateNewContent from '../_components/CreateNewContent'  // Adjust the import path as needed

export default function TemplatePage() {
  const params = useParams()
  const searchParams = useSearchParams()

  // Extract the template-slug from params
  const templateSlug = params?.['template-slug'] as string

  return <CreateNewContent templateSlug={templateSlug} searchParams={searchParams} />
}