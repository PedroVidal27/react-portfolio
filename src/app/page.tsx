import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <section className="flex my-10 w-[90vw] rounded-[50px] flex-grow bg-[#222222]">
        <nav className="flex flex-row h-20 mt-10 w-full">
          <div className="flex w-full justify-start">
            <a>Teste</a>
          </div>
          <div className="flex w-full justify-end">
            <a>Teste 2</a>
          </div>
        </nav>
      </section>
    </main>
  );
}
