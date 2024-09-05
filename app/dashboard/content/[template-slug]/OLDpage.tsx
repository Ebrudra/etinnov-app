"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'

interface PROPS {
    params: {
        'template-slug': string
    }
}

function CreateNewContent(props: PROPS) {
    const searchParams = useSearchParams()
    const [formData, setFormData] = useState<any>({})
    const [aiOutput, setAIOutput] = useState<string>('')
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug'])
    const [loading, setLoading] = useState(false)
    const { user } = useUser()

    useEffect(() => {
        const templateSlug = searchParams.get('templateSlug')
        const formDataParam = searchParams.get('formData')
        const aiResponseParam = searchParams.get('aiResponse')

        if (templateSlug && formDataParam) {
            setFormData(JSON.parse(formDataParam))
        }

        if (aiResponseParam) {
            setAIOutput(aiResponseParam)
        }
    }, [searchParams])

    const GenerateAIContent = async (formData: any) => {
        setLoading(true);
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
        const result = await chatSession.sendMessage(finalAIPrompt);
        // console.log(result.response.text());
        setAIOutput(result.response.text());
        await saveInDb(formData, selectedTemplate?.slug, result.response.text())
        setLoading(false);
    }

    const saveInDb = async (formData: any, slug: any, aiResp: string) => {
        const result = await db.insert(AIOutput).values({
            formData: formData,
            templateSlug: slug,
            aiResponse: aiResp,
            createdBy: user?.primaryEmailAddress?.emailAddress!,
            createdAt: moment().format('DD/MM/yyyy'),
        }); console.log(result);
    }

    return (
        <div className='p-10 '>
            <Link href={"/dashboard"}>
                <Button> <ArrowLeft /> Back </Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
                {/* FormSection */}
                <FormSection selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => GenerateAIContent(v)}
                    loading={loading} 
                    initialFormData={formData}
                    />
                {/* OutputSection */}
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent



