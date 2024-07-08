/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Obwnb2fAUsf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { DatePick } from "@/components/DatePick";
import Rate from "@/components/Rate";
import Setting from "@/components/Setting";
import UserHeader from "@/components/UserHeader";
import { StarIcon } from "@/components/icons";
import RateModif from "@/components/ui/RateModif";
import { Spotlight } from "@/components/ui/SpotLight";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import chambre1 from "../../../../public/chambre/chambre1.jpeg";
import chambre2 from "../../../../public/chambre/chambre2.jpeg";
import chambre3 from "../../../../public/chambre/chambre3.webp";
import chambre4 from "../../../../public/chambre/chambre4.jpg";
import chambre5 from "../../../../public/chambre/chambre5.avif";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../../components/ui/3d-card";
import FooterUser from "@/components/FooterUser";

export default function HebergementList() {
  const [location, setLocation] = useState("Antananarivo");
  const [checkIn, setCheckIn] = useState("03-07-2024");
  const [checkOut, setCheckOut] = useState("06-07-2024");
  const [guests, setGuests] = useState(2);
  const [sortBy, setSortBy] = useState("Pertinence");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    distance: [],
    price: [],
    propertyRate: [],
    facilities: [],
  });
  const properties = [
    {
      id: 1,
      name: "Le Louvre Hotel & Spa",
      location: "Antananarivo, Antananarivo 101",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente.",
      distance: "0.5 km from center",
      price: "$25,5/night",
      reviews: 324,
      rating: 4,
      image: chambre1.src,
    },
    {
      id: 2,
      name: "Le Louvre Hotel & Spa",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente.",
      location: "Antananarivo, Antananarivo 101",
      distance: "0.5 km from center",
      price: "$25,5/night",
      reviews: 324,
      rating: 4,
      image: chambre2.src,
    },
    {
      id: 3,
      name: "Le Louvre Hotel & Spa",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente.",
      location: "Antananarivo, Antananarivo 101",
      distance: "0.5 km from center",
      price: "$25,5/night",
      reviews: 324,
      rating: 4,
      image: chambre3.src,
    },
  ];
  return (
    <>
      <UserHeader />
      <Spotlight fill="#5B876B" className="absolute top-0" />
      <div className="flex flex-col items-center w-full min-h-screen ">
        <main className="container mx-auto p-4">
          <div className="my-8  ml-10">
            <h2 className="text-3xl font-bold">
              Find your best accommodation on Hotello
            </h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              explicabo cupiditate
            </p>
          </div>
          <div className="flex gap-5 py-20 px-10 max-sm:hidden bg-white">
            <Input
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <DatePick />
            <Button className="px-20">Search</Button>
          </div>
          {/* <div className="flex justify-between items-center mb-4">
            <p>Properties in {location}: 252 properties found</p>
            <Select value={sortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pertinence">Pertinence</SelectItem>
                <SelectItem value="Price">Price</SelectItem>
                <SelectItem value="Rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Setting />
            <div className="col-span-1 md:col-span-3">
              {properties.map((property) => (
                <Card key={property.id} className="mb-4">
                  <CardHeader className="flex items-start justify-around">
                    <div className="flex flex-row gap-10">
                      <Image
                        height={600}
                        width={600}
                        src={property.image}
                        alt={property.name}
                        className="w-60 h-60 object-cover rounded-lg"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-bold">{property.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {property.location}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {property.distance}
                        </p>
                        <div className="flex items-center mt-2 justify-center">
                          <div className="flex items-center ">
                            <Rate value={property.rating} />
                          </div>
                          <p className="ml-2 text-lg text-muted-foreground justify-center">
                            {property.reviews} reviews
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{property.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <HeartIcon className="w-4 h-4" />
                      <span>Like</span>
                    </Button>
                    <div className="text-right">
                      <p className="text-lg font-bold">{property.price}</p>
                      <Button className="mt-2">See availability</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}

              <div className="flex justify-center mt-8 gap-3">
                <Button
                  variant="outline"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                {[1, 2, 3, 4, 5, 6].map((p) => (
                  <Button
                    key={p}
                    variant={p === page ? "default" : "outline"}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  onClick={() => setPage(page + 1)}
                  disabled={page === 6}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </main>
        <FooterUser />
      </div>
    </>
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
