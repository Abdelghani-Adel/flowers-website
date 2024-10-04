"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation = (props: IProps) => {
  const { isOpen, onClose } = props;

  const defaultClass =
    " transition-all duration-300 ease-in-out bg-white" +
    " fixed top-0 left-0 right-0 z-50 p-5" +
    " md:relative md:translate-y-0 md:opacity-100 md:bg-transparent md:p-0";

  const openClass = "translate-y-0 opacity-100";
  const closeClass = "translate-y-[-100%] opacity-0";

  return (
    <div
      role="presentation"
      onClick={onClose}
      className={`${isOpen ? openClass : closeClass} ${defaultClass}`}
    >
      <div className="flex md:hidden">
        <button onClick={onClose} className="text-main text-3xl ml-auto">
          <IoMdClose />
        </button>
      </div>

      <ul className="text-main uppercase font-semibold flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
        <NavItem href="/" label="home" />
        <NavItem href="/flowers" label="flowers" />
        <NavItem href="/lilies" label="lilies" />
        <NavItem href="/roses" label="roses" />
        <NavItem href="/tulips" label="tulips" />
        <NavItem href="/all-products" label="all-products" />
      </ul>
    </div>
  );
};

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <li className={`${isActive(href) && "border-b-main"} p-2 border-b-4 border-transparent`}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default Navigation;
