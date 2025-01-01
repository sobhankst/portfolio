import { NavbarData } from "@/lib/constants";
import Link from "next/link";
import React, { FC } from "react";

interface SidebarProps {
  isOpen: Boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 min-w-72 transform border-l border-l-darkGreen/20 bg-darkBlack shadow-xl shadow-lightGreen/40 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <button
          className="transition-all duration-300 ease-in-out hover:text-red-600"
          aria-label="Close Sidebar"
          onClick={onClose}
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
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      {/* Logo */}
      <Link
        href={"/"}
        className="flex justify-center border-b border-b-darkGreen/20 py-4 transition-all duration-300 ease-in-out"
      >
        <h2 className="group text-2xl font-bold capitalize transition-colors duration-300 ease-in-out hover:text-darkGreen">
          Sobhan{" "}
          <span className="text-lightGreen group-hover:text-white">.</span>
        </h2>
      </Link>
      <nav className="mt-6 flex flex-col gap-5 px-5 text-sm font-medium uppercase tracking-wide">
        {NavbarData.map((item) => (
          <Link href={item.href} key={item.id}>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
