import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import hotello from "../public/hotello.png";
import { HotelIcon, MenuIcon } from "@/components/icons";
import Link from "next/link";
const UserHeader = () => {
  return (
    <div>
      <header className="w-full bg-primary py-4">
        <div className=" container mx-auto flex flex-col items-center  px-4 md:flex-row md:justify-between md:space-y-0">
          <div className="flex items-center max-sm:hidden  space-x-4">
            <HotelIcon className="w-8 h-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Hotello</h1>
          </div>
          <div className="md:hidden">
            <Sheet>
              <div className="max-sm:flex max-sm:flex-row">
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MenuIcon className="w-6 h-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80vw] bg-[#d8e7e6]">
                  <div className="flex items-center ">
                    <Image src={hotello} alt="Logo" className="h-20 w-20" />
                  </div>
                  <nav className="flex flex-col items-start space-y-4 p-4">
                    <Link
                      href="/"
                      className="text-lg font-medium hover:decoration-stone-600"
                    >
                      Home
                    </Link>
                    <Link
                      href="/users/hebergement/"
                      className="text-lg font-medium hover:decoration-stone-600"
                    >
                      Accommodation
                    </Link>
                    <Link
                      href="/users/artisanal"
                      className="text-lg font-medium hover:decoration-stone-600"
                    >
                      Handicraft
                    </Link>
                    <Link
                      href="/users/tour"
                      className="text-lg font-medium hover:decoration-stone-600"
                    >
                      Tour
                    </Link>
                    <Link
                      href="#"
                      className="text-lg font-medium hover:decoration-stone-600"
                    >
                      About us
                    </Link>
                    <div className="flex gap-5">
                      <Link href="/users/login">
                        <Button className="bg-white text-black">Login</Button>
                      </Link>
                      <Button className="bg-[#305555]">Register</Button>
                    </div>
                  </nav>
                </SheetContent>
              </div>
            </Sheet>
          </div>
          <nav className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8 max-sm:hidden md:flex">
            <Link
              href="/"
              className="text-lg md:text-sm lg:text-lg font-medium hover:opacity-50 text-white"
            >
              Home
            </Link>
            <Link
              href="/users/hebergement/hebergementList/"
              className="text-lg md:text-sm lg:text-lg font-medium hover:opacity-50 text-white"
            >
              Accommodation
            </Link>
            <Link
              href="/users/artisanal/"
              className="text-lg md:text-sm lg:text-lg font-medium hover:opacity-50 text-white"
            >
              Handicraft
            </Link>
            <Link
              href="/users/tour/"
              className="text-lg md:text-sm lg:text-lg font-medium hover:opacity-50 text-white"
            >
              Tour
            </Link>
            <Link
              href="#"
              className="text-lg md:text-sm lg:text-lg font-medium hover:opacity-50 text-white"
            >
              About us
            </Link>
          </nav>
          <div className="flex space-x-4 max-sm:hidden">
            <Link href="/users/login">
              <Button className="bg-white text-black hover:text-white">
                Login
              </Button>
            </Link>
            <Link href="/users/register">
              <Button className="bg-[#305555] hover:bg-[#305555] hover:opacity-80">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default UserHeader;
