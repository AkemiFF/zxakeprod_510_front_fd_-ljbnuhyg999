import React from "react";
import facebook from "../public/facebook.png";
import insta from "../public/instagram.png";
import twitter from "../public/twitter.png";
import Image from "next/image";
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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-lg font-bold text-white">Hotello</h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            corporis sed expedita.
          </p>
        </div>
        <div>
          <h4 className="text-md font-bold text-white underline">Links</h4>
          <nav className="flex flex-col space-y-2">
            <a href="#" className=" text-white">
              Home
            </a>
            <a href="#" className="text-white">
              Hotel
            </a>
            <a href="#" className="text-white">
              Handicraft
            </a>
            <a href="#" className="text-white">
              Tour
            </a>
            <a href="#" className="text-white">
              About us
            </a>
          </nav>
        </div>
        <div>
          <h4 className="text-md font-semibold text-white underline">
            Support
          </h4>
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-white">
              FAQs
            </a>
            <a href="#" className="text-white">
              Terms & Services
            </a>
            <a href="#" className="text-white">
              Privacy Policy
            </a>
          </nav>
        </div>
        <div>
          <h4 className="text-md font-semibold text-white">Information</h4>
          <p className="text-white">23 Baker Street, UK</p>
          <p className="text-white">012 03 04 05</p>
          <p className="text-white">support@gmail.com</p>
        </div>
        <div>
          <h4 className="text-md font-semibold text-white underline">
            Social media
          </h4>
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
      <div className="container mx-auto mt-8 text-center text-white">
        &copy; 2024 - All rights reserved
      </div>
    </footer>
  );
};

export default FooterUser;
