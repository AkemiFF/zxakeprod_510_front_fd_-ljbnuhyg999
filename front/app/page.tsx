"use client";
import { commandListReducer, hebergement, region } from "@/app/type";
import RegionComponent from "@/components/front/RegionComponent";
import { HotelIcon, StarIcon } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

//integrateur
import ExclusiveHotel from "@/components/front/ExclusiveHotel";
import antananarivo from "../public/region/antanarivo.jpg";
import fianarantsoa from "../public/region/fianaratsoa.jpg";
import toliara from "../public/region/toliara.jpg";

import DropComponent from "@/components/front/search/DropComponent";
import hotel from "../public/hotel/hotel.jpg";
import hotel2 from "../public/hotel/hotel2.jpg";
import hotel3 from "../public/hotel/hotel3.jpg";
import hotel1 from "../public/hotel/hotel4.jpg";

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
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import HeaderCarous from "@/components/HeaderCarous";
import UserHeader from "@/components/UserHeader";
import { DatePick } from "@/components/DatePick";

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

const exclusiveHotels: hebergement[] = [
  {
    id: 1,
    nomHebergement: "Hôtel des Étoiles",
    adressHebergement: "123 Rue des Champs",
    villeHebergement: "Paris",
    descriptionsHebergement: "Un hôtel luxueux situé au cœur de Paris.",
    nombreEtoileHebergement: 5,
    latitudeHebergement: 48.8566,
    longitudeHebergement: 2.3522,
    responsableHebergement: 101,
    imageHebergement: hotel.src,
    typeHebergement: "Hôtel",
    dateCreated: "2024-01-01T00:00:00Z",
    dateUpdate: "2024-06-01T00:00:00Z",
  },
  {
    id: 2,
    nomHebergement: "Auberge du Voyageur",
    adressHebergement: "456 Rue du Lac",
    villeHebergement: "Annecy",
    descriptionsHebergement:
      "Une auberge charmante avec vue sur le lac d'Annecy.",
    nombreEtoileHebergement: 3,
    latitudeHebergement: 45.8992,
    longitudeHebergement: 6.1294,
    responsableHebergement: 102,
    imageHebergement: hotel1.src,
    typeHebergement: "Auberge",
    dateCreated: "2024-02-15T00:00:00Z",
    dateUpdate: "2024-06-01T00:00:00Z",
  },
  {
    id: 3,
    nomHebergement: "Camping des Pins",
    adressHebergement: "789 Route de la Forêt",
    villeHebergement: "Bordeaux",
    descriptionsHebergement: "Un camping familial en pleine nature.",
    nombreEtoileHebergement: 4,
    latitudeHebergement: 44.8378,
    longitudeHebergement: -0.5792,
    responsableHebergement: 103,
    imageHebergement: hotel2.src,
    typeHebergement: "Camping",
    dateCreated: "2024-03-10T00:00:00Z",
    dateUpdate: "2024-06-01T00:00:00Z",
  },
  {
    id: 4,
    nomHebergement: "Chalet des Montagnes",
    adressHebergement: "321 Chemin des Alpes",
    villeHebergement: "Chamonix",
    descriptionsHebergement: "Un chalet cosy avec vue sur le Mont Blanc.",
    nombreEtoileHebergement: 5,
    latitudeHebergement: 45.9237,
    longitudeHebergement: 6.8694,
    responsableHebergement: 104,
    imageHebergement: hotel3.src,
    typeHebergement: "Chalet",
    dateCreated: "2024-04-01T00:00:00Z",
    dateUpdate: "2024-06-01T00:00:00Z",
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

export default function Home() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const [choice, setChoice] = useState("Accommodation");
  const [accommodationChoice, setAccommodationChoice] = useState("");
  const [destinationChoice, setDestinationChoice] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const form2 = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  console.log(form, form2);

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
    <div className="flex flex-col min-h-screen animate-fadeUp ease-in-out">
      <UserHeader />
      <main className="flex-1">
        <section className="relative">
          {/* crarousel no eto */}
          <div className="relative">
            <HeaderCarous />

            <div className="h-full flex items-center justify-center py-7">
              <div className="absolute top-3/4 flex  mt-8 space-x-2 bg-white p-4 rounded-md shadow-md text-black max-sm:hidden">
                <DropComponent
                  datas={element}
                  onSelectedValue={handleItemSelected}
                />
                {choice === "Accommodation" ? (
                  <div className="flex space-x-2 ">
                    <DropComponent
                      datas={accommodation}
                      onSelectedValue={handleAccommodationItemSelected}
                    />
                    <DatePick />
                  </div>
                ) : choice === "Craft" ? (
                  <div className="flex space-x-2">Craft</div>
                ) : (
                  <div className="flex space-x-2">
                    <DropComponent
                      datas={destination}
                      onSelectedValue={handleDestinationItemSelected}
                    />
                  </div>
                )}
                <Button>Search</Button>
              </div>
            </div>
          </div>
          {/* crarousel no eto */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Popular Destinations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {regions.map((region) => (
                  <RegionComponent
                    key={region.name}
                    name={region.name}
                    imageLink={region.imageLink}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="py-12 md:py-20 bg-muted">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Exclusive Hotel Deals
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {exclusiveHotels.map((hotel) => (
                  <ExclusiveHotel
                    key={hotel.id}
                    id={hotel.id}
                    nomHebergement={hotel.nomHebergement}
                    imageHebergement={hotel.imageHebergement}
                    adressHebergement={""}
                    villeHebergement={""}
                    descriptionsHebergement={hotel.descriptionsHebergement}
                    nombreEtoileHebergement={0}
                    latitudeHebergement={0}
                    longitudeHebergement={0}
                    responsableHebergement={0}
                    typeHebergement={""}
                    dateCreated={""}
                    dateUpdate={""}
                  />
                ))}
              </div>
            </div>
          </section>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Accommodation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Link
                href="users/hebergement"
                className="group relative overflow-hidden rounded-lg shadow-lg"
                prefetch={false}
              >
                <Image
                  height={600}
                  width={600}
                  src="/hebergement/hot.jpg"
                  alt="Accommodation"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    Hotels
                  </h3>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg"
                prefetch={false}
              >
                <Image
                  height={600}
                  width={600}
                  src="/hebergement/resort.jpg"
                  alt="Accommodation"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    Resorts
                  </h3>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg"
                prefetch={false}
              >
                <Image
                  height={600}
                  width={600}
                  src="/hebergement/vac.jpg"
                  alt="Accommodation"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    Vacation Rentals
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Tour Operators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg"
                prefetch={false}
              >
                <Image
                  height={600}
                  width={600}
                  src="/tour/adventure.jpg"
                  alt="Tour Operator"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    Adventure Tours
                  </h3>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg"
                prefetch={false}
              >
                <Image
                  height={600}
                  width={600}
                  src="/tour/cultural.jpg"
                  alt="Tour Operator"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    Cultural Tours
                  </h3>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg"
                prefetch={false}
              />
            </div>
          </div>
        </section>

        {/* Revue des utilisateurs */}
        <section className="py-12 md:py-20 mx-10">
          <h2 className="text-2xl font-bold">Get our best services</h2>
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <Image
                src={"/hotel/luxureHotel.png"}
                height={600}
                width={600}
                alt="Service"
                className="w-full h-[150px] object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold mt-5">Quality</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat explicabo cupiditate laboriosam blanditiis recusandae
                  iste, nesciunt asperiores alias ratione accusantium!
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                height={600}
                width={600}
                src="/hotel/reception.png"
                alt="Service"
                className="w-full h-[150px] object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold mt-5">Transparency</h3>
                <p className="pt-5 mt-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat explicabo cupiditate laboriosam blanditiis recusandae
                  iste, nesciunt asperiores alias ratione accusantium!
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                height={600}
                width={600}
                src="/hotel/reception.png"
                alt="Service"
                className="w-full h-[150px] object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold mt-5">Customer experience</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat explicabo cupiditate laboriosam blanditiis recusandae
                  iste, nesciunt asperiores alias ratione accusantium!
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                height={600}
                width={600}
                src="/hotel/mapNavigation.png"
                alt="Service"
                className="w-full h-[150px] object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold mt-5">Support</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat explicabo cupiditate laboriosam blanditiis recusandae
                  iste, nesciunt asperiores alias ratione accusantium!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="py-12 md:py-20 mx-10">
          <h2 className="text-2xl font-bold">See the customer’s review</h2>
          <p className="mt-2 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            explicabo cupiditate laboriosam blanditiis recusandae iste
          </p>
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <Card key={index}>
                <CardContent className="pt-5">
                  <div className="flex space-x-1">
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                  </div>
                  <p className=" mt-2 text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus corporis sed explicabo, vero dolore esse illo
                    voluptatum animi similique eligendi, consequuntur soluta
                    saepe doloribus! Tempora in, asperiores, hic alias corporis
                    totam dolores dolor voluptatum voluptate quisquam sit animi
                    fugit sapiente!
                  </p>
                  <div className="flex items-center mt-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>WR</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <p className="text-sm font-bold">William Reph</p>
                      <p className="text-sm text-muted-foreground">
                        Manchester, UK
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="ghost" className="mt-4">
            See more
          </Button>
        </section>
      </main>
    </div>
  );
}
