/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CPNs9vHBFJq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { hebergement } from "@/app/type";
import HebergementRecommandation from "@/components/front/HebergementRecommandate";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import hotel from "../../../public/hotel/hotel.jpg";
import hotel2 from "../../../public/hotel/hotel2.jpg";

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
    imageHebergement: hotel,
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
    imageHebergement: hotel2,
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
    imageHebergement: hotel2,
    typeHebergement: "Camping",
    dateCreated: "2024-03-10T00:00:00Z",
    dateUpdate: "2024-06-01T00:00:00Z",
  },
];

export default function Hebergement() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  return (
    <div className="min-h-screen bg-[#e6f1f0]">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <HotelIcon className="w-8 h-8" />
          <span className="text-xl font-bold">HOTELLO</span>
        </div>
        <nav className="hidden space-x-4 md:flex">
          <a href="#" className="text-lg">
            Home
          </a>
          <a href="#" className="text-lg">
            Discover
          </a>
          <a href="#" className="text-lg">
            Products
          </a>
          <a href="#" className="text-lg">
            Blog
          </a>
          <a href="#" className="text-lg">
            Contact us
          </a>
        </nav>
        <div className="flex space-x-4">
          <Button variant="ghost">Login</Button>
          <Button>Register</Button>
        </div>
      </header>
      <main className="p-4 md:p-8">
        <section className="relative">
          <Image
            height={1000}
            width={1000}
            src="/hotel/luxureHotel.png"
            alt="Banner"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
            <h1 className="text-3xl font-bold">
              Helping you to find the best comfortable place
            </h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              explicabo cupiditate laboriosam
            </p>
            <div className="flex mt-4 space-x-2">
              <StarIcon className="w-6 h-6 text-yellow-500" />
              <StarIcon className="w-6 h-6 text-yellow-500" />
              <StarIcon className="w-6 h-6 text-yellow-500" />
              <StarIcon className="w-6 h-6 text-yellow-500" />
              <StarIcon className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="flex mt-8 space-x-2 bg-white p-4 rounded-md shadow-md">
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="w-full"
              />
              <Input
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder="Check-in"
                className="w-full"
              />
              <Input
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                placeholder="Check-out"
                className="w-full"
              />
              <Input
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="Guests"
                className="w-full"
              />
              <Button>Search</Button>
            </div>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Suggestions for you</h2>
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {exclusiveHotels.map((hotel) => (
              <HebergementRecommandation
                key={hotel.id}
                id={hotel.id}
                nomHebergement={""}
                adressHebergement={hotel.adressHebergement}
                villeHebergement={hotel.villeHebergement}
                descriptionsHebergement={hotel.descriptionsHebergement}
                nombreEtoileHebergement={hotel.nombreEtoileHebergement}
                latitudeHebergement={hotel.latitudeHebergement}
                longitudeHebergement={hotel.longitudeHebergement}
                responsableHebergement={hotel.responsableHebergement}
                imageHebergement={hotel.imageHebergement}
                typeHebergement={hotel.typeHebergement}
                dateCreated={hotel.dateCreated}
                dateUpdate={hotel.dateUpdate}
              />
            ))}
          </div>
          <Button variant="ghost" className="mt-4">
            See more
          </Button>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Get our best services</h2>
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <img
                src="#"
                alt="Service"
                className="w-full h-[150px] object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold">Quality</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat explicabo cupiditate laboriosam blanditiis recusandae
                  iste, nesciunt asperiores alias ratione accusantium!
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/hotel/chambre.png"
                alt="Service"
                className="w-full h-[150px] object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold">Transparency</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat explicabo cupiditate laboriosam blanditiis recusandae
                  iste, nesciunt asperiores alias ratione accusantium!
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                alt="Service"
                className="w-full h-[150px] object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold">Customer experience</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat explicabo cupiditate laboriosam blanditiis recusandae
                  iste, nesciunt asperiores alias ratione accusantium!
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                alt="Service"
                className="w-full h-[150px] object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold">Support</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat explicabo cupiditate laboriosam blanditiis recusandae
                  iste, nesciunt asperiores alias ratione accusantium!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">See the customer’s review</h2>
          <p className="mt-2 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            explicabo cupiditate laboriosam blanditiis recusandae iste
          </p>
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <Card key={index}>
                <CardContent>
                  <div className="flex space-x-1">
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
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
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
          <p className="mt-2 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            explicabo cupiditate laboriosam blanditiis recusandae iste
          </p>
          <div className="flex mt-4 space-x-2">
            <Input placeholder="Your email address" className="w-full" />
            <Button>Submit</Button>
          </div>
        </section>
      </main>
      <footer className="p-4 bg-gray-800 text-white">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <HotelIcon className="w-8 h-8" />
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus corporis sed explicabo
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Links</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Hotel booking</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Support</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Terms & Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Information</h3>
            <ul className="mt-2 space-y-1">
              <li>23 Baker Street, UK</li>
              <li>01 02 03 04 05</li>
              <li>support@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Social media</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>Copyright 2024 - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function HotelIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 22v-6.57" />
      <path d="M12 11h.01" />
      <path d="M12 7h.01" />
      <path d="M14 15.43V22" />
      <path d="M15 16a5 5 0 0 0-6 0" />
      <path d="M16 11h.01" />
      <path d="M16 7h.01" />
      <path d="M8 11h.01" />
      <path d="M8 7h.01" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </svg>
  );
}

function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
