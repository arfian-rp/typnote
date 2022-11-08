"use client";

import { useEffect, useRef, useState } from "react";
import SettingsPopup from "../../components/SettingsPopup";
import { Note } from "../../interface/data";
import RootLayout from "../layout";

export default function NotePage({ params }: any) {
  const [text, setText] = useState<string>("");
  const [popUp, setPopUp] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [id, setI] = useState(0);

  useEffect(() => {
    let notes: Note[] = JSON.parse(localStorage.getItem("_K")!);
    if (typeof notes !== "object") window.location.href = "/";
    setI(notes.findIndex((e) => e.id === params.id));
    setText(notes.find((e) => e.id === params.id)?.text!);
  }, []);

  useEffect(() => {
    textAreaRef.current!.selectionStart = text.length;
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        setPopUp(true);
      } else if (e.code === "27") {
        e.preventDefault();
        setPopUp(false);
      }
    });
  }, [text]);

  useEffect(() => {
    if (popUp) {
      textAreaRef.current!.disabled = true;
    } else textAreaRef.current!.disabled = false;
  }, [popUp]);

  function clear() {
    if (confirm("clear ?")) {
      if (confirm("sure ??")) {
        updateText("");
        window.location.reload();
      }
    }
  }

  function updateText(t: string) {
    setText(t);
    let note: Note[] = JSON.parse(localStorage.getItem("_K")!);
    note[id].text = t;
    note[id].last_update = new Date().getTime();
    localStorage.setItem("_K", JSON.stringify(note!));
  }

  return (
    <RootLayout>
      <div className="mx-[0.7rem] md:mx-[1rem] lg:mx-[10rem] text-secondary font-mono">
        <SettingsPopup setPopUp={setPopUp} display={popUp ? "block" : "none"} text={text} clearHandl={clear} />
        <div className="flex justify-between items-center px-10 lg:px-40 font-semibold text-center my-5">
          <a href="/" className="text-4xl hover:cursor-pointer hover:text-secondary-hover">
            TypNote
          </a>
          <div className="text-2xl hover:cursor-pointer hover:text-secondary-hover" onClick={() => setPopUp(true)}>
            T
          </div>
        </div>
        <hr />
        <textarea
          ref={textAreaRef}
          style={{ opacity: popUp ? 0.5 : 1 }}
          className="w-full h-[85vh] bg-primary text-lg outline-none resize-none scrollbar"
          onKeyDown={(e) => {
            if (e.keyCode === 9) {
              e.preventDefault();
              var v = e.currentTarget.value,
                s = e.currentTarget.selectionStart,
                en = e.currentTarget.selectionEnd;
              e.currentTarget.value = v.substring(0, s) + "\t" + v.substring(en);
              e.currentTarget.selectionStart = e.currentTarget.selectionEnd = s + 1;
            }
          }}
          value={text}
          onChange={(e) => updateText(e.target.value)}
          autoFocus
        ></textarea>
        <hr />
      </div>
    </RootLayout>
  );
}
