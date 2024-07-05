"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ListHebergement() {
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
  const router = useRouter();
  // const handleFilterChange = (category, value) => {
  //   setFilters((prevFilters) => {
  //     const newFilters = { ...prevFilters };
  //     if (newFilters[category].includes(value)) {
  //       newFilters[category] = newFilters[category].filter(
  //         (item) => item !== value
  //       );
  //     } else {
  //       newFilters[category].push(value);
  //     }
  //     return newFilters;
  //   });
  // };
  const properties = [
    {
      id: 1,
      name: "Le Louvre Hotel & Spa",
      location: "Antananarivo, Antananarivo 101",
      distance: "0.5 km from center",
      price: "$25,5/night",
      reviews: 324,
      rating: 4,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Le Louvre Hotel & Spa",
      location: "Antananarivo, Antananarivo 101",
      distance: "0.5 km from center",
      price: "$25,5/night",
      reviews: 324,
      rating: 4,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Le Louvre Hotel & Spa",
      location: "Antananarivo, Antananarivo 101",
      distance: "0.5 km from center",
      price: "$25,5/night",
      reviews: 324,
      rating: 4,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
      <Undo2
        className="cursor-pointer mb-5 text-white"
        onClick={() => router.back()}
      />
      <header className="w-full bg-primary py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <HotelIcon className="w-8 h-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Hotello</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              Accommodation
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
          <div className="flex space-x-4">
            <Button className="text-white bg-secondary">Login</Button>
            <Button className="text-white bg-secondary">Register</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Find your best accommodation on Hotello
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            explicabo cupiditate
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Input
            type="date"
            placeholder="Check-in"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
          <Input
            type="date"
            placeholder="Check-out"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
          {/* <Input
            type="number"
            placeholder="Guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value.parseInt())}
          /> */}
          <Button className="col-span-1 md:col-span-4">Search</Button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p>Properties in {location}: 252 properties found</p>
          <Select
            value={sortBy}
            // onValueChange={(e) => setSortBy(e.target.value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pertinence">Pertinence</SelectItem>
              <SelectItem value="Price">Price</SelectItem>
              <SelectItem value="Rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <aside className="col-span-1 ">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold">Filters</h3>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-md font-semibold">
                    Distance from downtown
                  </h4>
                  <div className="flex flex-col space-y-2">
                    {/* <Checkbox
                      id="less-5km"
                      onCheckedChange={() =>
                        handleFilterChange("distance", "less-5km")
                      }
                    /> */}
                    <Label htmlFor="less-5km">Less than 5km</Label>
                    <Checkbox
                      id="5-15km"
                      // onCheckedChange={() =>
                      //   handleFilterChange("distance", "5-15km")
                      // }
                    />
                    <Label htmlFor="5-15km">5 to 15km</Label>
                    <Checkbox
                      id="15-30km"
                      // onCheckedChange={() =>
                      // //   handleFilterChange("distance", "15-30km")
                      // // }
                    />
                    <Label htmlFor="15-30km">15 to 30km</Label>
                    <Checkbox
                      id="more-30km"
                      // onCheckedChange={() =>
                      //   handleFilterChange("distance", "more-30km")
                      // }
                    />
                    <Label htmlFor="more-30km">More than 30km</Label>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-md font-semibold">Price per night</h4>
                  <div className="flex flex-col space-y-2">
                    <Checkbox
                      id="less-15"
                      // onCheckedChange={() =>
                      //   handleFilterChange("price", "less-15")
                      // }
                    />
                    <Label htmlFor="less-15">Less than 15$</Label>
                    <Checkbox
                      id="15-25"
                      // onCheckedChange={() =>
                      //   handleFilterChange("price", "15-25")
                      // }
                    />
                    <Label htmlFor="15-25">15 to 25$</Label>
                    <Checkbox
                      id="25-50"
                      // onCheckedChange={() =>
                      //   handleFilterChange("price", "25-50")
                      //}
                    />
                    <Label htmlFor="25-50">25 to 50$</Label>
                    <Checkbox
                    // id="more-50"
                    // onCheckedChange={() =>
                    //   handleFilterChange("price", "more-50")
                    // }
                    />
                    <Label htmlFor="more-50">More than 50$</Label>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-md font-semibold">Property rate</h4>
                  <div className="flex flex-col space-y-2">
                    <Checkbox
                      id="1-star"
                      // onCheckedChange={() =>
                      //   handleFilterChange("propertyRate", "1-star")
                      // }
                    />
                    <Label htmlFor="1-star">1 star</Label>
                    <Checkbox
                      id="2-star"
                      // onCheckedChange={() =>
                      //   handleFilterChange("propertyRate", "2-star")
                      // }
                    />
                    <Label htmlFor="2-star">2 star</Label>
                    <Checkbox
                      id="3-star"
                      // onCheckedChange={() =>
                      //   handleFilterChange("propertyRate", "3-star")
                      // }
                    />
                    <Label htmlFor="3-star">3 star</Label>
                    <Checkbox
                      id="4-star"
                      // onCheckedChange={() =>
                      //   handleFilterChange("propertyRate", "4-star")
                      // }
                    />
                    <Label htmlFor="4-star">4 star</Label>
                    <Checkbox
                      id="5-star"
                      // onCheckedChange={() =>
                      //   handleFilterChange("propertyRate", "5-star")
                      // }
                    />
                    <Label htmlFor="5-star">5 star</Label>
                    <Checkbox
                      id="unrated"
                      // onCheckedChange={() =>
                      //   handleFilterChange("propertyRate", "unrated")
                      // }
                    />
                    <Label htmlFor="unrated">Unrated</Label>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-md font-semibold">Facilities</h4>
                  <div className="flex flex-col space-y-2">
                    <Checkbox
                      id="parking"
                      // onCheckedChange={() =>
                      //   handleFilterChange("facilities", "parking")
                      // }
                    />
                    <Label htmlFor="parking">Parking</Label>
                    <Checkbox
                      id="wifi"
                      // onCheckedChange={() =>
                      //   handleFilterChange("facilities", "wifi")
                      // }
                    />
                    <Label htmlFor="wifi">Wi-Fi</Label>
                    <Checkbox
                      id="wellness"
                      // onCheckedChange={() =>
                      //   handleFilterChange("facilities", "wellness")
                      // }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
          <div className="col-span-1 md:col-span-3">
            {properties.map((property) => (
              <Card key={property.id} className="mb-4">
                <CardHeader className="flex items-center">
                  <div className="flex flex-row gap-10">
                    <Image
                      height={600}
                      width={600}
                      src="/placeholder.svg"
                      alt={property.name}
                      className="w-40 h-40 object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-bold">{property.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {property.location}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {property.distance}
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="flex items-center">
                          {Array.from({ length: property.rating }, (_, i) => (
                            <StarIcon
                              key={i}
                              className="w-4 h-4 text-yellow-500"
                            />
                          ))}
                        </div>
                        <p className="ml-2 text-sm text-muted-foreground">
                          {property.reviews} reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus corporis sed expedita, vero dolore esse hic alias
                    corporis totam dolores dolor voluptatem voluptate quisquam
                    sit animi fugit sapiente.
                  </p>
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

            <div className="flex justify-center mt-8">
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
      <footer className="w-full bg-primary py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div>
            <h3 className="text-lg font-bold text-white">Hotello</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus corporis sed expedita.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold text-white">Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground">
                Home
              </a>
              <a href="#" className="text-muted-foreground">
                Hotel
              </a>
              <a href="#" className="text-muted-foreground">
                Handicraft
              </a>
              <a href="#" className="text-muted-foreground">
                Tour
              </a>
              <a href="#" className="text-muted-foreground">
                About us
              </a>
            </nav>
          </div>
          <div>
            <h4 className="text-md font-semibold text-white">Support</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground">
                FAQs
              </a>
              <a href="#" className="text-muted-foreground">
                Terms & Services
              </a>
              <a href="#" className="text-muted-foreground">
                Privacy Policy
              </a>
            </nav>
          </div>
          <div>
            <h4 className="text-md font-semibold text-white">Information</h4>
            <p className="text-muted-foreground">23 Baker Street, UK</p>
            <p className="text-muted-foreground">012 03 04 05</p>
            <p className="text-muted-foreground">support@gmail.com</p>
          </div>
          <div>
            <h4 className="text-md font-semibold text-white">Social media</h4>
            <nav className="flex space-x-4">
              <a href="#" className="text-muted-foreground">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground">
                Twitter
              </a>
            </nav>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center text-muted-foreground">
          &copy; 2024 - All rights reserved
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
