"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import aftrip from "../public/logo-aftrip.png";

import { MenuIcon } from "@/components/icons";
import Link from "next/link";
import user from "../app/favicon.ico";
import {
  DropdownMenuSeparator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar } from "./ui/avatar";
import UserAuth from "./UserAuth";
const UserHeader = () => {
  const [connected, setconnected] = useState(false);
  return (
    <div>
      <header className="w-full bg-primary py-4">
        <div className="  md:container md:mx-auto md:flex max-md:flex-col items-center px-4 md:flex-row md:justify-between md:space-y-0">
          <div className="flex flex-row justify-between">
            <div className="ps-8">
              <Image src={aftrip} alt={"Logo de Aftrip"} className="w-20 h-20 text-white" />
            </div>

            <Sheet>
              <div className="max-sm:flex max-sm:flex-row md:hidden mt-6 prr-8">
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MenuIcon className="w-6 h-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80vw] bg-[#d8e7e6]">
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
                      href="/users/about"
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

          <nav className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8 max-md:hidden md:flex">
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
              href="/users/about"
              className="text-lg md:text-sm lg:text-lg font-medium hover:opacity-50 text-white"
            >
              About us
            </Link>
          </nav>
          <UserAuth />
        </div>
      </header>
    </div>
  );
};

export default UserHeader;
