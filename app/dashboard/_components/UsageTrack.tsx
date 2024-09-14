// UsageTrack.tsx
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { HistoryItem } from '../history/page';
import { setTotalUsageValue } from './UsageStore'; // Import the store
import Link from 'next/link';

function UsageTrack() {
    const { user } = useUser();
    const [totalUsage, setTotalUsage] = useState<Number>(0);

    useEffect(() => {
        user && getData();
    }, [user])

    const getData = async () => {
        {/*@ts-ignore*/ }
        const result: HistoryItem[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
        getTotalUsage(result)
    }

    const getTotalUsage = (result: HistoryItem[]) => {
        let total = 0;
        result.forEach(element => {
            total = total + Number(element.aiResponse.split(' ').length)
        });
        setTotalUsage(total);
        setTotalUsageValue(total); // Update the store
        console.log(total)
    }
    return (
        <div className="m-5">
            <div className="bg-primary text-white rounded-lg p-3 dark:bg-gray-800 dark:text-gray-200">
                <h2 className="font-medium">Credits</h2>
                <div className="h-2 bg-gray-500 w-full rounded-full mt-3 dark:bg-gray-600">
                    <div
                        className="h-2 bg-white rounded-full dark:bg-gray-300"
                        style={{
                            width:
                                typeof totalUsage === 'number'
                                    ? `${(totalUsage / 10000) * 100}%`
                                    : '0%',
                        }}
                    ></div>
                </div>
                <h2 className="text-sm my-2">
                    {totalUsage.toString()}/10,000 Credit Used
                </h2>
            </div>
            <Link href="/dashboard/billing">
                <Button variant={'secondary'} className="w-full my-3">
                    Upgrade
                </Button>
            </Link>
        </div>
    );
}


export default UsageTrack;
