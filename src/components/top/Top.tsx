export default function Top() {
 
  return (
    <>
      <div className="p-4 border-b-2 flex items-center">
        <h1 className="w-full text-slate-100 text-2xl">
          <span className="text-base">My</span> Little IDE
        </h1>
        <div className="w-full">
          <button>prev</button>
        </div>
        <div className="w-full flex">
          <div className="ml-auto mr-2">
            <div className="w-[6px] h-[6px] bg-slate-200 rounded-full my-1"></div>
            <div className="w-[6px] h-[6px] bg-slate-200 rounded-full my-1"></div>
            <div className="w-[6px] h-[6px] bg-slate-200 rounded-full "></div>
          </div>
        </div>
      </div>
    </>
  );
}
