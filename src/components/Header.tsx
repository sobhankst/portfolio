"use client";
import { NavbarData } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const pathName = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <header className="border-b border-b-darkGreen/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        {/* Logo */}
        <Link href={"/"}>
          <h2 className="group text-2xl font-bold capitalize transition-colors duration-300 ease-in-out hover:text-darkGreen">
            Sobhan{" "}
            <span className="text-lightGreen group-hover:text-white">.</span>
          </h2>
        </Link>
        {/* navigation  */}
        <nav className="hidden items-center gap-7 text-sm font-medium uppercase tracking-wide md:inline-flex">
          {NavbarData.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={`group relative transition-all duration-300 ease-in-out hover:text-darkGreen ${pathName === item.href && "text-darkGreen"} overflow-x-hidden`}
            >
              {item.title}
              <span
                className={`absolute bottom-0 left-0 inline-block h-px w-full bg-darkGreen transition-all duration-300 ease-in-out group-hover:translate-x-0 ${pathName === item.href ? "translate-x-0" : "-translate-x-full"}`}
              ></span>
            </Link>
          ))}
        </nav>
        <button className="hidden rounded-md border border-darkGreen/10 bg-lightGreen/10 px-5 py-1 transition-colors duration-300 ease-in-out hover:bg-darkGreen hover:text-black md:block">
          Hire me
        </button>
        <button
          className="inline-flex transition-all duration-300 ease-in-out hover:text-darkGreen md:hidden"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
      <div className="md:hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
