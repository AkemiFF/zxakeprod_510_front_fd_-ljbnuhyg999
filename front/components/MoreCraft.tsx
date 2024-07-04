import Image from "next/image";
import img from "../public/artisanat/bg.jpg";
import imgs1 from "../public/artisanat/artisanat1.jpg";
import artisanat2 from "../public/artisanat/artisanat2.webp";
import artisanat3 from "../public/artisanat/artisanat3.jpeg";
import artisanat4 from "../public/artisanat/artisanat4.jpg";
import { CompassIcon, StarIcon } from "./icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { IconDropdown } from "react-day-picker";
import { useState } from "react";

export default function MoreCraft() {
  const [show, setShow] = useState(false);
  return (
    <section className="w-full py-12 md:py-12 lg:py-12">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <Image
          src={img}
          width={800}
          height={600}
          alt="Hero Image"
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover sm:w-full"
        />
        <div className="space-y-4">
          <h1 className="text-xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            IKIWA Craft
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
                  What are the health benefits of the agence?
                </AccordionTrigger>
                <AccordionContent>
                  Traveling can reduce stress by breaking your routine and
                  providing relaxation.
                </AccordionContent>
                <AccordionContent>
                  It encourages physical activity through exploration, hiking,
                  and other outdoor activities.
                </AccordionContent>
                <AccordionContent>
                  It can help you maintain good health by promoting healthy
                  eating habits, reducing the risk of chronic diseases, and
                  providing access to healthcare services.
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
            See all Craft product
          </span>
        </Button>
      </div>
      {show && (
        <section className="py-12 md:py-16 lg:py-20  animate-fadeUp ease-in-out">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-background rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src={imgs1.src}
                  alt="Product 1"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Handwoven Basket</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Beautifully crafted from natural fibers.
                  </p>
                  <p className="text-primary font-semibold mt-2">$45</p>
                </div>
                <div className="flex justify-between p-5">
                  <Button>See more</Button>
                  <Button className="bg-red-600 hover:bg-red-500">block</Button>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src={artisanat2}
                  alt="Product 2"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Ceramic Vase</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Unique handmade pottery piece.
                  </p>
                  <p className="text-primary font-semibold mt-2">$65</p>
                </div>
                <div className="flex justify-between p-5">
                  <Button>See more</Button>
                  <Button className="bg-red-600 hover:bg-red-500">block</Button>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src={artisanat3}
                  alt="Product 3"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Leather Tote Bag</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Durable and stylish handcrafted bag.
                  </p>
                  <p className="text-primary font-semibold mt-2">$85</p>
                </div>
                <div className="flex justify-between p-5">
                  <Button>See more</Button>
                  <Button className="bg-red-600 hover:bg-red-500">block</Button>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src={artisanat4}
                  alt="Product 4"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Handwoven Rug</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Vibrant and durable floor covering.
                  </p>
                  <p className="text-primary font-semibold mt-2">$125</p>
                </div>
                <div className="flex justify-between p-5">
                  <Button>See more</Button>
                  <Button className="bg-red-600 hover:bg-red-500">block</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
