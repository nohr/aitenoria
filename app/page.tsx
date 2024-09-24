import { IoLayers, IoMusicalNotes } from "react-icons/io5";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main> */}
      <footer className="row-start-2 flex flex-col md:flex-row gap-6 flex-wrap items-center justify-center h-16 w-full z-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#000] via-transparent to-transparent">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://aite.fyi"
          target="_self"
          rel="noopener noreferrer"
        >
          <IoLayers />
          Go to aite.fyi →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nohri.net"
          target="_self"
          rel="noopener noreferrer"
        >
          <IoMusicalNotes /> Go to nohri.net →
        </a>
      </footer>
    </div>
  );
}
