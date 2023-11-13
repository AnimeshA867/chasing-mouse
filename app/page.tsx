import Image from "next/image";
import Mouse from "./Components/Mouse";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden cursor-none">
      <Mouse />
    </main>
  );
}
