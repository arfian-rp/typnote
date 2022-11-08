import Link from "next/link";
import React, { useState } from "react";

interface Props {
  text: string;
  clearHandl: () => void;
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  display: string;
}
export default function SettingsPopup({ text, clearHandl, display = "hidden", setPopUp }: Props) {
  const [fileName, setFileName] = useState<string>(`FILE-${new Date().toLocaleString()}.txt`);

  function downloadHandl(e: React.FormEvent) {
    e.preventDefault();
    setFileName(`FILE-${new Date().toLocaleString()}.txt`);
    const Data = btoa(text);
    const a = document.createElement("a");
    a.download = fileName;
    a.href = `data:text/plain;base64,${Data}`;
    a.click();
    setTimeout(() => {
      window.location.reload();
    }, 250);
  }
  return (
    <div style={{ display }} className="fixed z-10 border-2 border-secondary bg-primary w-[25rem] top-[25vh] left-[50%] transform -translate-x-[50%] h-fit">
      <div className="text-center m-auto">Settings</div>
      <hr />
      <form onSubmit={downloadHandl} className="m-6">
        <div className="flex flex-col gap-7">
          <div className="flex justify-between items-center">
            <div>File name:</div>
            <input className="m-1 p-1 text-center text-primary rounded-md" value={fileName} onChange={(e) => setFileName(e.target.value)} type="text" />
          </div>
          <div className="flex justify-between items-center">
            <div>Word count:</div>
            <div className="text-lg">{text.match(/(\w+)/g)?.length ?? 0}</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Number of sentences:</div>
            <div className="text-lg">{text.split(/[.!?]/).length - 1}</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Number of characters:</div>
            <div className="text-lg">{text.length}</div>
          </div>
          <div className="flex justify-between items-center">
            <div onClick={clearHandl} className="p-2 px-5 rounded-md border-2 hover:cursor-pointer transition duration-300 ease-in-out bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-secondary">
              Clear
            </div>
            <button type="submit" className="p-2 px-5 rounded-md border-2 transition duration-300 ease-in-out bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-secondary">
              Download
            </button>
            <div onClick={() => setPopUp(false)} className="p-2 px-5 rounded-md border-2 hover:cursor-pointer transition duration-300 ease-in-out bg-red-500 text-secondary hover:bg-primary hover:text-red-500 hover:border-red-500">
              Exit
            </div>
          </div>
          <div className="flex justify-center">
            created by
            <Link className="text-sky-400" href="https://arfian-rp.web.app" target="_blank">
              <i>Arfian</i>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
