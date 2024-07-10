import React from "react";
import facebook from "../public/facebook.png";
import insta from "../public/instagram.png";
import twitter from "../public/twitter.png";
import { PhoneIcon, LocateIcon, EmailIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

import logo from "../public/logo-aftrip.png";

import { AnimatedTooltip } from "./ui/animated-tooltip";
const FooterUser = () => {
  let Contact = [
    {
      id: 1,
      name: "Aftrip Facebook",
      links: "www.facebook.com",
      designation: "Facebook Contact",
      image: facebook.src,
    },
    {
      id: 2,
      name: "Aftrip Instagram",
      links: "www.instagram.com",
      designation: "Insta Contact",
      image: insta.src,
    },
    {
      id: 3,
      name: "Aftrip Twitter",
      links: "www.twitter.com",
      designation: "twitter Contact",
      image: twitter.src,
    },
  ];
  return (
    <footer className="w-full bg-primary py-8 mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
  <div className = "ms-8">
    <Image src={logo} alt="Logo" className="h-20 w-20" style={{ filter: 'brightness(1)' }}/>
    <p className="text-white">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
      corporis sed expedita.
    </p>
  </div>
  <div className = "ms-12">
    <h4 className="text-md font-bold text-white ">Links</h4>
    <nav className="flex flex-col space-y-2 mt-4">
      <a href="#" className="text-white">Home</a>
      <a href="#" className="text-white">Hotel</a>
      <a href="#" className="text-white">Handicraft</a>
      <a href="#" className="text-white">Tour</a>
      <a href="#" className="text-white">About us</a>
    </nav>
  </div>
  <div>
    <h4 className="text-md font-bold text-white">Support</h4>
    <nav className="flex flex-col space-y-2 mt-4">
      <a href="#" className="text-white">FAQs</a>
      <a href="#" className="text-white">Terms & Services</a>
      <a href="#" className="text-white">Privacy Policy</a>
    </nav>
  </div>
  <div>
    <h4 className="text-md font-bold text-white mb-4">Information</h4>
    <div className = "flex justify-start">
      <LocateIcon className = "text-white"/>
      <Link href="tel:+261345678990" className="text-white ms-2">23 Baker Street, UK</Link>
    </div>
    <div className = "flex justify-start mt-2">
      <PhoneIcon className = "text-white"/>
      <Link href="tel:+261345678990" className="text-white ms-2">+261 34 56 789 90</Link>
    </div>
    <div className = "flex justify-start mt-2">
      <EmailIcon className = "text-white"/>
      <Link href="support@gmail.com" className="text-white ms-2">support@gmail.com</Link>
    </div>

  </div>
  <div>
    <h4 className="text-md font-bold text-white">Social media</h4>
    <nav className="flex space-x-4 py-5">
      <AnimatedTooltip items={Contact} />
      {/* <a href="#" className="text-muted-foreground">
        <Image src={facebook} width={30} height={30} alt={""} />
      </a>
      <a href="#" className="text-muted-foreground">
        <Image src={insta} width={30} height={30} alt="" />
      </a>
      <a href="#" className="text-muted-foreground">
        <Image src={twitter} width={30} height={30} alt="" />
      </a> */}
    </nav>
  </div>
</div>

      <div className="container mx-auto mt-8 text-center text-sm text-white">
        &copy; 2024 - All rights reserved
      </div>
    </footer>
  );
};

export default FooterUser;
