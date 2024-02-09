"use client";
import { codeStore } from "@/store/featStore";

export default function CodeTab({ id, code }: { id: number; code: string }) {
  const upadate = codeStore((state) => state.updateCode);

  function up(e: any) {
    upadate({ id: id, value: e.target.value });
  }

  return (
    <textarea
      spellCheck="false"
      className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none "
      onChange={(e) => up(e)}
      value={code}
    ></textarea>
  );
}
