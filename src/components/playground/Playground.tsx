"use client"
import React, { useState } from 'react'
import CodeTab from './codeTab'
import { codeStore } from '@/store/featStore'
import { previewStore } from '@/store/previewStore'
import ButtonTab from '../ButtonTab';
import Preview from '../Preview'; 

export default function Playground() {
    const code = codeStore((state) => state.code);

    const isVisible = previewStore((state)=>state.isVisible);
    

    const [tabIndex, setTabIndex] = useState(code[0].id)
  return (
    <div className="flex grow">
      <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
        {code.map((tab, key) => (
          <ButtonTab
            key={key}
            id={tab.id}
            toggleTab={(id: number) => setTabIndex(id)}
            buttonContent={tab.buttonContent}
            imgURL={tab.imgUrl}
          />
        ))}
      </div>


      
      <div className="w-full grow relative">
        {code && (
          <CodeTab
            id={tabIndex}
            code={code.find((elt) => elt.id === tabIndex)?.code || ""}
          />
        )}
        {isVisible&&     <Preview />
        }
   
      </div>
    </div>
  );
}
