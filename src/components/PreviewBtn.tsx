"use client"
import showView from "@/assets/view.svg";
import hideView from "@/assets/hide.svg"
import { previewStore } from "@/store/previewStore";
import { symlink } from "fs";
import Image from "next/image";

export default function PreviewBtn() {
  const toggleVisibility = previewStore((state) => state.toggleIsVisible);
  const isVisible = previewStore((state)=> state.isVisible)

  return (
    <button
      className="w-[150px] m-auto bg-blue-500 hover:bg-blue-400 text-slate-100 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      type="button"
      onClick={() => toggleVisibility()}
    >
      {isVisible ? (
        <>
          <Image
            height={30}
            width={30}
            src={hideView}
            alt="see"
            className="w-5 inline-block"
           
          />
          {"  "}
          Hide & code
        </>
      ) : (
        <>
          <Image
            height={30}
            width={30}
            src={showView}
            alt="see"
            className="w-5 inline-block align-text-top"
          
          />
          {"  "}
          Preview
        </>
      )}
    </button>
  );
}
