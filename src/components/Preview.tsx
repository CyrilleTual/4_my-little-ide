"use client";
import { codeStore } from "@/store/featStore";

export default function Preview() {
  const code = codeStore((state) => state.code);

  function getCode(lang: string) {
    return code.find((elt) => elt.lang === lang)?.code;
  }

  const srcDoc = `
    <!DOCTYPE html>
    <html lang="fr">
    
    <head>
    <style>${getCode("css")}</style>
    </head>
    
    <body>
    
    <main>${getCode("html")}</main>
    
    <script>${getCode("javascript")}</script>
    </body>
    </html>

`;

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-zinc-900">
      <iframe
        className="block w-full h-full "
        srcDoc={srcDoc}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}
