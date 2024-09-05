"use client"
import React, { useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Edit } from 'lucide-react'

export interface HistoryItem {
  id: number
  templateSlug: string
  aiResponse: string
  createdAt: string
  wordCount: number
  formData: any
}

function HistoryPage() {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([])
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    const fetchHistory = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        const results = await db.select().from(AIOutput).where(
          eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress)
        )
        const items: HistoryItem[] = results.map(item => ({
          id: item.id,
          templateSlug: item.templateSlug || '',
          aiResponse: item.aiResponse || '',
          createdAt: item.createdAt || '',
          wordCount: item.aiResponse ? item.aiResponse.split(' ').length : 0,
          formData: item.formData || ''
        }))
        setHistoryItems(items)
      }
    }

    fetchHistory()
  }, [user])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleEdit = (item: HistoryItem) => {
    const queryParams = new URLSearchParams({
      templateSlug: item.templateSlug,
      formData: JSON.stringify(item.templateSlug), // Assuming formData is stored in the HistoryItem
      aiResponse: item.aiResponse
    }).toString()

    router.push(`/dashboard/${item.templateSlug}?${queryParams}`)
  }

  return (
    <div className="m-5 p-10 shadow-md border rounded-lg  bg-white">
      <h1 className="text-2xl font-bold my-5">History</h1>
      <p className="mb-5">Search your previously generated AI content</p>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">TEMPLATE</th>
              <th className="px-4 py-2 text-left">AI RESP</th>
              <th className="px-4 py-2 text-left">DATE</th>
              <th className="px-4 py-2 text-left">WORDS</th>
              <th className="px-4 py-2 text-left">COPY</th>
              <th className="px-4 py-2 text-left">EDIT</th>
            </tr>
          </thead>
          <tbody>
            {historyItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{item.templateSlug}</td>
                <td className="px-4 py-2">{item.aiResponse.substring(0, 100)}...</td>
                <td className="px-4 py-2">{item.createdAt}</td>
                <td className="px-4 py-2">{item.wordCount}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => copyToClipboard(item.aiResponse)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Copy
                  </button>
                </td>
                <td className="px-4 py-2">
                  <Button onClick={() => handleEdit(item)} variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" /> Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HistoryPage