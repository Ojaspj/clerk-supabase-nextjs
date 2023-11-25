"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <div className="flex  gap-4 items-center justify-center p-8 h-auto w-screen m-4 border border-black text-green-400">
        <div className="flex flex-col text-xl font-bold items-center justify-center border border-red-400 w-96 h-96">
          This is public area.
          <p className="cursor-pointer hover:text-green-600" onClick={() => router.push("/protect")}>Go to protected area</p>
        </div>
      </div>
    </>
  );
}
