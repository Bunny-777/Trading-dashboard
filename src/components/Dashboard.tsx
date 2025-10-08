import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto bg-neutral-50 dark:bg-black">
          {children}
        </div>
      </div>
    </div>
  );
}
