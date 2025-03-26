"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Menu, X } from "lucide-react";

export const AcmeLogo: React.FC = () => {
  return <p className="text-blue-600 font-bold text-lg">Accounting app</p>;
};

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems: string[] = [
    "Caractéristiques",
    "Tarifications",
    "Témoignages",
    "Se connecter",
    "Démarré gratuitement",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="h-20 border-b-1 flex flex-col border-y-blue-200 md:px-10 px-2 relative">
      <div className="flex justify-between items-center h-full w-full">
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.slice(0, 3).map((item) => (
            <NavbarItem key={item}>
              <Link href="#" className="hover:text-blue-600">
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="sm:flex hidden">
          <NavbarItem>
            <Link href="#" className="text-blue-600">Se connecter</Link>
          </NavbarItem>
          <NavbarItem>
            <Button className="p-2 rounded-lg bg-blue-600 cursor-pointer hover:bg-blue-500 text-white">
              Démarrer l&apos;essaie gratuit
            </Button>
          </NavbarItem>
        </NavbarContent>

        <div className="sm:hidden flex" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 cursor-pointer" /> : <Menu className="h-6 w-6 cursor-pointer" />}
        </div>
      </div>

      {isMenuOpen && (
    <div 
      className={`sm:hidden bg-white w-full shadow-md transition-all duration-300 overflow-hidden absolute top-10 rounded-lg bottom-0 left-0 right-0 ${isMenuOpen ? 'h-[25vh]' : 'h-0'}`}
    >
    {menuItems.map((item, index) => (
      <NavbarMenuItem key={index}>
        <Link
          href="#"
          className="block px-4 py-2 border-b text-center hover:bg-blue-600 hover:text-white"
        >
          {item}
        </Link>
      </NavbarMenuItem>
      ))}
    </div>
    )}
    </Navbar>
  );
};

export default NavBar;