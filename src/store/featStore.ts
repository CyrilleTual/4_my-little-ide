import {html, css, js} from "@/assets/index";
import { create } from "zustand"

type Item = {
    id: number;
    lang: string;
    imgUrl: any;
    buttonContent: string;
    code: string;
}
type CodeStoreState = {
  code: Item[];
  updateCode: (action: { id: number; value: string }) => void;
};

const initialState: Item[] = [
  {
    id: 1,
    lang: "html",
    imgUrl: html,
    buttonContent: "HTML",
    code:
` 
<div>
    <h1>Editeur de code avec NextJs</h1>
    <p>Codez sur votre navigateur</p>
</div>`,
    },
  {
    id: 2,
    lang: "css",
    imgUrl: css,
    buttonContent: "CSS",
    code: 
`
body {font-family : Roboto,sans-serif; 
padding: 25px;
color: #111;
background-color: #f1f1f1}`,
  },
  {
    id: 3,
    lang: "javascript",
    imgUrl: js,
    buttonContent: "JavaScript",
    code: `console.log ("Hello World")`,
  },
];


export const codeStore = create<CodeStoreState>((set) => ({
  code: initialState,
  updateCode: (action: { id: number; value: string }) => {
    set((state) => {
      const newState = state.code.map((item) =>
        item.id === action.id
          ? { ...item, code: action.value }
          : item
      );
      return { code: newState };
    });
  },
}));

