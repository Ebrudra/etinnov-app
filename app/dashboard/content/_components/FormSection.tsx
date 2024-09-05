import React, { useEffect, useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import { getTotalUsageValue } from '../../_components/UsageStore';

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput: any,
    loading: boolean,
    initialFormData?: any
}

function FormSection({ selectedTemplate, userFormInput, loading, initialFormData }: PROPS) {
    const totalUsage = getTotalUsageValue();
    const [formData, setFormData] = useState<any>(initialFormData || {});

    useEffect(() => {
        if (initialFormData) {
            setFormData(initialFormData)
        }
    }, [initialFormData])

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSelectChange = (value: string, name: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData)
    }

    const limitUsage = 10000
    const buttonText = totalUsage > limitUsage ? 'Usage Limit Exceeded' : 'Generate Content';

    const renderFormField = (item: any) => {
        switch (item.field) {
            case 'input':
                return (
                    <Input
                        name={item.name}
                        required={item?.required}
                        onChange={handleInputChange}
                    />
                );
            case 'textarea':
                return (
                    <Textarea
                        name={item.name}
                        required={item?.required}
                        onChange={handleInputChange}
                    />
                );
            case 'select':
                return (
                    <Select
                        name={item.name}
                        required={item?.required}
                        onValueChange={(value) => handleSelectChange(value, item.name)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={`Select ${item.label}`} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {item.options && item.options.map((option: any) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                );
            case 'grade':
                return (
                    <Select
                        name={item.name}
                        required={item?.required}
                        onValueChange={(value) => handleSelectChange(value, item.name)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Grade Level" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Year Levels</SelectLabel>
                                {[...Array(12)].map((_, i) => (
                                    <SelectItem key={i} value={`${i + 1}`.padStart(2, '0')}>
                                        {`${i + 1}`.padStart(2, '0')}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                );
            case 'language':
                return (
                    <Select
                        name={item.name}
                        required={item?.required}
                        onValueChange={(value) => handleSelectChange(value, item.name)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Output language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Languages</SelectLabel>
                                <SelectItem value="English">EN</SelectItem>
                                <SelectItem value="French">FR</SelectItem>
                                <SelectItem value="Arabic">AR</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                );
            case 'number':
                return (
                    <Input
                        type="number"
                        name={item.name}
                        required={item?.required}
                        onChange={handleInputChange}
                        min={0}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className='p-5 shadow-md border rounded-lg  bg-white'>
            {/* @ts-ignore */}
            <Image src={selectedTemplate?.icon} alt='icon' width={100} height={100} />
            <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500'>{selectedTemplate?.description}</p>

            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
                        <label className='font-bold'>{item.label}</label>
                        {renderFormField(item)}
                    </div>
                ))}

                <Button
                    type="submit"
                    className='w-full py-6'
                    disabled={loading || totalUsage > limitUsage}
                >
                    {loading && <Loader2Icon className='animate-spin mx-2' />} {buttonText}
                </Button>
            </form>
        </div>
    )
}

export default FormSection