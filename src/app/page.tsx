import * as React from "react";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
  export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      начальная страница
      <Button >
        {" "}
        <Link href="/auth/login">Зайти</Link>
      </Button>
    </main>
  );
}
