"use client";

import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const [isCopied, setIsCopied] = useState(false);
  const editorRef: any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(aiOutput);
      setIsCopied(true);

      // Reset button after 3 seconds
      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className='bg-white shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
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
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  );
}

export default OutputSection;
