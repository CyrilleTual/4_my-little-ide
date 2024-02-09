"use client";
import React from "react";
import Image from "next/image";
import { previewStore } from "@/store/previewStore";
type ParamsType = {
  id: number;
  toggleTab: any;
  buttonContent: string;
  imgURL: string;
};

export default function ButtonTab({
  id,
  toggleTab,
  buttonContent,
  imgURL,
}: ParamsType) {
  const isVisible = previewStore((state) => state.isVisible);
  const hide = previewStore((state) => state.hidePreview);

  return (
    <button
      onClick={() => {
        toggleTab(id);
        isVisible && hide();
      }}
      className="flex items-center py-5 px-3 hover:bg-slate-600 focus:bg-slate-600 outline-none"
    >
      <Image
        src={imgURL}
        alt={buttonContent}
        height={30}
        width={30}
        className="w-5"
      />
      <span className="ml-3 text-slate-100 text-md"> {buttonContent}</span>
    </button>
  );
}
