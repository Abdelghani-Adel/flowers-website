"use client";
import React, { useState } from "react";
import Navigation from "./Navigation";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-main text-center p-1">
        <h5 className="font-bold">Free Shipping On All Orders</h5>
      </div>

      <div className="bg-background p-2">
        <DisplayMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </>
  );
};

const DisplayMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex md:hidden">
      <button onClick={onClick} className="text-main text-3xl ml-auto">
        <GiHamburgerMenu />
      </button>
    </div>
  );
};

export default Header;
