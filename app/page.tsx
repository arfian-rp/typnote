"use client";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Note } from "../interface/data";

export default function Page() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [nt, setNt] = useState("");

  useEffect(() => {
    let notes: Note[] = JSON.parse(localStorage.getItem("_K")!);
    if (!notes) localStorage.setItem("_K", "[]");
    if (typeof notes !== "object") localStorage.setItem("_K", "[]");
    setNotes(notes);
  }, []);

  function Create() {
    if (nt.trim()) {
      localStorage.setItem("_K", JSON.stringify([{ id: `@${new Date().getTime()}`, title: nt, last_update: new Date().getTime(), text: "" }, ...notes!]));
      window.location.reload();
    }
  }

  return (
    <div className="mx-[0.7rem] md:mx-[1rem] lg:mx-[10rem] text-secondary font-mono">
      <div className="flex justify-between items-center px-10 lg:px-40 font-semibold text-center my-5">
        <a href="/" className="text-4xl hover:cursor-pointer hover:text-secondary-hover">
          TypNote
        </a>
      </div>
      <hr />
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            Create();
          }}
          className="border-2 border-secondary hover:border-secondary-hover w-[20rem] mx-auto p-2 my-3 rounded-lg flex flex-col items-center gap-5"
        >
          <label htmlFor="">
            title: <input type="text" value={nt} onChange={(e) => setNt(e.target.value)} className="border-2 border-secondary bg-primary rounded-lg" />
          </label>
          <button className="p-2 px-5 rounded-md border-2 transition duration-300 ease-in-out bg-primary hover:text-secondary-hover hover:border-secondary-hover" type="submit">
            Create New
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center">
        {notes?.map((n, i) => (
          <Card title={n.title} id={n.id} last_update={n.last_update} key={i} />
        ))}
      </div>
    </div>
  );
}
