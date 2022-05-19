import Link from "next/link";
import { useTheme } from "next-themes";
import React from "react";

import Modal from "../components/Modal"

const links = [
  {label : "Home", href: "/"},
  { label: "Meetings", href: "/meetings" },
  { label: "Showcase", href: "/showcase" },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [showModal, setShowModal] = React.useState(false);
  // const root = window.document.documentElement 
  return (
    <nav className="dark:text-white">
      <ul className="flex flex-wrap justify-between items-center p-6">
        <Link href="/signin">
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src="https://i.ibb.co/PjgVdGH/Group-1-1.png"
            alt="logo"
            
          />
        </Link>
        <ul className="mx-0 flex flex-row space-x-5">
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href} passHref>
                <a
                  className={`px-4 py-2 rounded-xl font-Didact_Gothic transition-colors hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
          <li> 
            <button 
            onClick={() => setShowModal(true)}
            className="px-4 py-2 rounded-xl font-Didact_Gothic transition-colors hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 "
            >Contact</button>
          </li>

          <li>
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                // root.style.setProperty('--bg', "#111827");
              }}
              className="px-3 py-2 rounded-xl hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
            >
              {theme === "dark" ? <div> ☼ </div> : <span>☽</span>}
            </button>
          </li>
        </ul>
        {showModal? (
                <Modal setShowModal= {setShowModal} />
            ): null}
      </ul>
    </nav>
  );
}
