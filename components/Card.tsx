import Link from "next/link";
import { Note } from "../interface/data";

interface P {
  id: string;
  title: string;
  last_update: number;
}
export default function Card({ id, title, last_update }: P) {
  function del() {
    let data: Note[] = JSON.parse(localStorage.getItem("_K")!);
    localStorage.setItem("_K", JSON.stringify(data.filter((e) => e.id != id)));
    window.location.reload();
  }

  return (
    <div className="border-2 border-secondary text-secondary hover:border-secondary-hover w-[20rem] p-3 m-3 cursor-pointer group rounded-lg relative">
      <div
        className="absolute right-5 text-lg hover:text-red-500"
        onClick={() => {
          if (confirm(`delete ${title}?`)) del();
        }}
      >
        x
      </div>
      <Link href={`/${id}`}>
        <div className="text-center group-hover:text-secondary-hover">{title}</div>
        <div className="text-center group-hover:text-secondary-hover">{new Date(last_update).toLocaleString()}</div>
      </Link>
    </div>
  );
}
