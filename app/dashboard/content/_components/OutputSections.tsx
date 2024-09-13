"use client"
import React, { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'
import { marked } from 'marked'

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
})

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const [isCopied, setIsCopied] = useState(false);
  const [editorContent, setEditorContent] = useState('');
  const [isRTL, setIsRTL] = useState(false);
  //const quillRef = useRef<any>(null);

  useEffect(() => {
    const convertMarkdown = async () => {
      try {
        const htmlContent = await marked(aiOutput);
        setEditorContent(htmlContent);
      } catch (error) {
        console.error('Error converting Markdown to HTML:', error);
        setEditorContent(aiOutput);
      }
    };
    convertMarkdown();
  }, [aiOutput]);

  // useEffect(() => {
  //   if (quillRef.current) {
  //     const quill = quillRef.current.getEditor();
  //     quill.root.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  //   }
  // }, [isRTL]);
  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    const quillEditor = document.querySelector('.ql-editor');
    if (quillEditor) {
      quillEditor.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
  };
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(aiOutput);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean'],
      [{ 'direction': 'rtl' }]
    ],
  };

  //const handleEditorChange = (content: string) => {
  //  setEditorContent(content);
  //};

  const handleDirectionChange = () => {
    setIsRTL(!isRTL);
  };

  return (
    <div className='bg-white shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <div>
          {/* <Button className='mr-2' onClick={handleDirectionChange}>
            {isRTL ? 'LTR' : 'RTL'}
          </Button> */}
          <Button className='flex gap-2' onClick={handleCopy}>
            {isCopied ? (
              <>
                <Check className='w-4 h-4' />
                Copied!
              </>
            ) : (
              <>
                <Copy className='w-4 h-4' />
                Copy
              </>
            )}
          </Button>
        </div>
      </div>
      {typeof window !== 'undefined' && (
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          modules={modules}
          theme="snow"
          style={{
            height: '600px',
            direction: isRTL ? 'rtl' : 'ltr',
            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
          }}
        />
      )}
    </div>
  )
}

export default OutputSection