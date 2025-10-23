import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-white overflow-visible relative">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-visible relative z-0">
        {/* Header above sidebar */}
        <div className="relative z-[1000]">
          <Header />
        </div>

        {/* 👇 added id="main-content" here */}
        <div
          id="main-content"
          className="flex-1 overflow-auto bg-neutral-50 dark:bg-black"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
