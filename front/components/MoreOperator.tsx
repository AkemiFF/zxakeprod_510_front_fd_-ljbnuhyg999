import Image from "next/image";
import Link from "next/link";
import img from "../public/operator/oper.jpg";
import { CompassIcon, StarIcon } from "./icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { CalendarIcon } from "@radix-ui/react-icons";
export default function MoreOperator() {
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Evanos
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
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
