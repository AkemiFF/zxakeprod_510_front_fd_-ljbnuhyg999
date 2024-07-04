import Image from "next/image";
import Link from "next/link";
import { CompassIcon, StarIcon } from "./icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { CalendarIcon } from "@radix-ui/react-icons";
import cameleon from "../public/hebergement/cameleon.svg";
import { Button } from "./ui/button";
import { useState } from "react";
import { IconDropdown } from "react-day-picker";

import operator1 from "../public/operator/MC-P1-canoe_manambolo-1.jpg";
import operator2 from "../public/operator/Vignette-circuit-rt-sud.jpg";
import operator3 from "../public/operator/Que-faire-sur-lile-de-Nosy-Be-a-Madagascar-scaled.jpg";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export default function MoreOperator() {
  const [show, setShow] = useState(false);
  return (
    <section className="w-full py-12 md:py-12 lg:py-12">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <Image
          src={cameleon}
          width={30}
          height={30}
          alt="Hero Image"
          className="mx-auto  overflow-hidden rounded-xl object-cover sm:w-full bg-green-700"
        />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Mad Cameleon
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A tailor-made trip at the right price Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Consequatur, asperiores dicta mollitia
            quisquam ab quis deleniti nihil id ad, a ipsum voluptas voluptatum
            nulla quas, aperiam quod commodi dolorum deserunt?
          </p>
          <div className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <div className="flex gap-2">
              <CalendarIcon className="w-6 h-6" />
              <span>Depuis 2009</span>
            </div>
          </div>
          <div className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <div className="flex gap-2">
              <CompassIcon className="w-6 h-6" />
              <span>Madagascar, Tana</span>
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Who is Responsible for This accommodation?
                </AccordionTrigger>
                <AccordionContent>Name: Rabe Randria</AccordionContent>
                <AccordionContent>
                  Email: contact@[yourtravelagencyname].com
                </AccordionContent>
                <AccordionContent>Contact : +261 33 ...</AccordionContent>
                <AccordionContent>
                  <Link href="#">
                    <Button className="bg-slate-900 hover:bg-slate-800">
                      Show more
                    </Button>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="my-10 flex items-center justify-center">
        <Button className="flex gap-3">
          <IconDropdown />
          <span
            onClick={(e: any) => {
              setShow(!show);
              e.preventDefault();
            }}
          >
            See all Visit
          </span>
        </Button>
      </div>
      {show && (
        <section className="py-12 md:py-16 lg:py-20  animate-fadeUp ease-in-out">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-background rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <DirectionAwareHover imageUrl={operator3.src}>
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold">Ceramic Vase</h3>
                    <p className="text-white-foreground text-sm mt-1">
                      Unique handmade pottery piece.
                    </p>
                    <p className="text-white font-bold mt-2 text-3xl">$65</p>
                  </div>
                  <div className="flex justify-between p-5">
                    <Button>See more</Button>
                    <Button className="bg-red-600 hover:bg-red-500">
                      block
                    </Button>
                  </div>
                </DirectionAwareHover>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <DirectionAwareHover imageUrl={operator2.src}>
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold">Ceramic Vase</h3>
                    <p className="text-white-foreground text-sm mt-1">
                      Unique handmade pottery piece.
                    </p>
                    <p className="text-white font-bold mt-2 text-3xl">$30</p>
                  </div>
                  <div className="flex justify-between p-5">
                    <Button>See more</Button>
                    <Button className="bg-red-600 hover:bg-red-500">
                      block
                    </Button>
                  </div>
                </DirectionAwareHover>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <DirectionAwareHover imageUrl={operator1.src}>
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold">Ceramic Vase</h3>
                    <p className="text-white-foreground text-sm mt-1">
                      Unique handmade pottery piece.
                    </p>
                    <p className="text-white font-bold mt-2 text-3xl">$90</p>
                  </div>
                  <div className="flex justify-between p-5">
                    <Button>See more</Button>
                    <Button className="bg-red-600 hover:bg-red-500">
                      block
                    </Button>
                  </div>
                </DirectionAwareHover>
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
