import Image from "next/image";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex justify-between">
      <div className="bg-primary w-1/2 fill-white flex justify-center items-center">
        <Image
          className="fill-white"
          alt="todolist_logo"
          src="/todolist_logo.svg"
          width={900}
          height={500}
        />
      </div>
      <div className="flex items-center justify-center flex-1">{children}</div>
    </section>
  );
}
