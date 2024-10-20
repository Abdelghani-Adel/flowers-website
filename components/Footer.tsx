import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background text-main py-6 text-sm relative">
      <div className="justify-evenly hidden xl:flex">
        <div>
          <h4 className="font-bold text-xl mb-3">Say It With Flowers</h4>
          <div className="text-white flex space-x-10">
            <ul className="space-y-2">
              <li>Congratulations</li>
              <li>Happy Anniversary</li>
              <li>Mother's Day 2023</li>
              <li>Father's Day 2022</li>
              <li>Father's Day 2023</li>
            </ul>

            <ul className="space-y-2">
              <li>Ramadan 2024</li>
              <li>Funeral</li>
              <li>Thank you</li>
              <li>Get Well Soon</li>
              <li>Valentine's Day 2023</li>
            </ul>

            <ul className="space-y-2">
              <li>I am sorry</li>
              <li>I love you</li>
              <li>I Miss You</li>
              <li>Wedding</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Shop By Flower</h4>
          <ul className="space-y-2 text-white">
            <li>Roses</li>
            <li>Flowers</li>
            <li>Mother's Day 2024</li>
            <li>Valentine's Day 2024</li>
            <li>Lilies</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Shop By Color</h4>
          <ul className="space-y-2 text-white">
            <li>Red</li>
            <li>White</li>
            <li>Rose</li>
            <li>Purple</li>
            <li>Yellow</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-main mt-10 mb-10 hidden xl:block"></div>

      <div className="flex justify-center">
        <p className="text-center flex gap-2 items-center">
          <LiaShippingFastSolid />
          We ship everywhere in Egypt
        </p>
      </div>

      <div className="text-center mt-4 text-gray-400">
        <p>Online Store Powered by Ahmed Ibrahim</p>
      </div>

      <Link
        href="https://wa.me/+201003653888"
        target="blank"
        className="bg-green-600 hover:bg-green-700 transition-all  rounded-3xl text-white px-5 py-2 bottom-3 right-3 flex gap-1 items-center justify-center w-1/2 m-auto mt-4 xl:absolute xl:w-auto"
      >
        <FaWhatsapp className="h-6 w-6" />
        Need Help
      </Link>
    </footer>
  );
};

export default Footer;
