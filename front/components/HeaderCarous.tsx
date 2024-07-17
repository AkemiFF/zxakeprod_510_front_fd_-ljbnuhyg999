import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import image1 from "../public/chambre/chambre1.jpeg";
import image2 from "../public/chambre/chambre2.jpeg";
import image3 from "../public/chambre/chambre3.webp";
import image4 from "../public/chambre/chambre4.jpg";
import image5 from "../public/chambre/chambre5.avif";

import Autoplay from "embla-carousel-autoplay";

import { commandListReducer, hebergement, region } from "@/app/type";
import RegionComponent from "@/components/front/RegionComponent";
import { HotelIcon, StarIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

import Image from "next/image";

import { useState } from "react";

//integrateur;
import antananarivo from "../public/region/antanarivo.jpg";
import fianarantsoa from "../public/region/fianaratsoa.jpg";
import toliara from "../public/region/toliara.jpg";

import DropComponent from "@/components/front/search/DropComponent";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "./ui/use-toast";
import Rate from "./Rate";
import { Spotlight } from "./ui/SpotLight";

///interface hotel
interface chambre {
  image: String;
  nom: String;
  rate: Number;
}

const regions: region[] = [
  {
    name: "Antananarivo",
    imageLink: antananarivo.src,
  },
  {
    name: "Fianarantsoa",
    imageLink: fianarantsoa.src,
  },
  {
    name: "Toliara",
    imageLink: toliara.src,
  },
];

const accommodation: commandListReducer[] = [
  {
    label: "Hotel",
    value: "hotel",
  },
  {
    label: "Resort",
    value: "resort",
  },
  {
    label: "Vacation",
    value: "vacation",
  },
];

const element: commandListReducer[] = [
  { label: "Accommodation", value: "Accommodation" },
  { label: "Operator tours", value: "Operator tours" },
  { label: "Craft", value: "Craft" },
];

const destination = [
  { label: "Mananjary", value: "Mananjary" },
  { label: "Manakara", value: "Manakara" },
  { label: "Antsirabe", value: "Antsirable" },
];
const FormSchema = z.object({
  dob: z.date({
    required_error: "A",
  }),
});

const HeaderCarous = () => {
  let group = [
    {
      image: image1.src,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium!",
      nom: "Chambre 1",
      rate: 3,
    },
    {
      image: image2.src,
      description: "lorem ipsum dolor sit amet",
      nom: "Chambre 2",
      rate: 4,
    },
    {
      image: image3.src,
      nom: "Chambre other",
      description: "lorem ipsum dolor sit amet",
      rate: 5,
    },
    {
      image: image4.src,
      nom: "Chambre étoilé",
      description: "lorem ipsum dolor sit amet",
      rate: 5,
    },
    {
      image: image5.src,
      nom: "Chambre Luxe",
      description: "lorem ipsum dolor sit amet",
      rate: 3,
    },
  ];

  const [choice, setChoice] = useState("");
  const [accommodationChoice, setAccommodationChoice] = useState("");
  const [destinationChoice, setDestinationChoice] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const form2 = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const handleAccommodationItemSelected = (selectedValue: string) => {
    console.log("Selected item:", selectedValue);
    setAccommodationChoice(selectedValue);
  };
  const handleItemSelected = (selectedValue: string) => {
    console.log("Selected item:", selectedValue);
    setChoice(selectedValue);
  };
  const handleDestinationItemSelected = (selectedValue: string) => {
    console.log("Selected item:", selectedValue);
    setDestinationChoice(selectedValue);
  };

  return (
    <div className="">
      <Spotlight fill="#5B876B" className="absolute top-0" />
      <Carousel
        className="rounded-none overflow-hidden "
        plugins={[
          Autoplay({
            delay: 5000,
            active: true,
          }),
        ]}
      >
        <CarouselContent>
          {group.map((item, i) => (
            <CarouselItem key={i}>
              <Image
                src={item.image}
                alt="Hotel Image 1"
                width={1000}
                height={1000}
                className="object-cover w-full aspect-[6/2] h-[500px]"
              />

              <div className="absolute top-0 w-full h-[500px] flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30 backdrop-blur-sm">
                <h1 className="text-3xl font-bold font-tahoma">{item.nom}</h1>
                <p className="mt-2 w-[600px]">{item.description}</p>
                <div className="flex mt-2 space-x-2">
                  <Rate value={item.rate} />
                </div>
                <Button className="my-10 px-12">Reserver</Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeaderCarous;
