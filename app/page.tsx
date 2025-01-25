"use client";

import HomePage from "./Homepage/page";

export default function Home() {
  return (
    <div className="flex text-center items-center  bg-gradient-to-br from-primary-50 to-primary-100 justify-center align-middle min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center text-center align-middle items-center sm:items-start">
        <HomePage />
      </main>
    </div>
  );
}
