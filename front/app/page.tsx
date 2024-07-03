/* eslint-disable @next/next/no-img-element */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/q4oN4lOjSSk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { useState } from "react";

export default function Component() {
  const [region, setRegion] = useState("Antananarivo");
  const [dates, setDates] = useState({
    start: "2024-07-01",
    end: "2024-07-14",
  });
  const [guests, setGuests] = useState(2);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-4 py-2 border-b md:px-6">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="Logo" className="h-8" />
          <div className="flex items-center space-x-2 md:space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  {region}
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-0 md:w-64">
                <Command>
                  <CommandInput
                    placeholder="Search regions"
                    className="border-b h-9"
                  />
                  <CommandEmpty>No regions found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem onClick={() => setRegion("Antananarivo")}>
                      Antananarivo
                    </CommandItem>
                    <CommandItem onClick={() => setRegion("Toamasina")}>
                      Toamasina
                    </CommandItem>
                    <CommandItem onClick={() => setRegion("Fianarantsoa")}>
                      Fianarantsoa
                    </CommandItem>
                    <CommandItem onClick={() => setRegion("Mahajanga")}>
                      Mahajanga
                    </CommandItem>
                    <CommandItem onClick={() => setRegion("Toliara")}>
                      Toliara
                    </CommandItem>
                    <CommandItem onClick={() => setRegion("Antsiranana")}>
                      Antsiranana
                    </CommandItem>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  {`${dates.start} - ${dates.end}`}
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 md:w-[400px]">
                <Calendar
                  mode="range"
                  defaultValue={[new Date(dates.start), new Date(dates.end)]}
                  onValueChange={(value: { toISOString: () => string }[]) => {
                    setDates({
                      start: value[0].toISOString().split("T")[0],
                      end: value[1].toISOString().split("T")[0],
                    });
                  }}
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  {guests} guests
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-0 md:w-64">
                <div className="grid gap-4 p-4">
                  <div className="flex items-center justify-between">
                    <div>Adults</div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setGuests(Math.max(guests - 1, 1))}
                      >
                        <MinusIcon className="w-4 h-4" />
                      </Button>
                      <span>{guests}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setGuests(guests + 1)}
                      >
                        <PlusIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Children</div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setGuests(Math.max(guests - 1, 0))}
                      >
                        <MinusIcon className="w-4 h-4" />
                      </Button>
                      <span>0</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setGuests(guests + 1)}
                      >
                        <PlusIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <Button variant="outline" className="hidden md:inline-flex">
            List your property on Airbnb
          </Button>
          <Button variant="ghost" size="icon">
            <SearchIcon className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Button>
          {/* <Button variant="ghost" size="icon">
            <MenuIcon className="w-6 h-6" />
          </Button> */}
        </div>
      </header>
      <main className="flex flex-col flex-1 md:flex-row">
        <div className="w-full p-4 md:w-2/3 md:p-6">
          <div className="flex flex-wrap gap-2 md:gap-4">
            <Link
              href="/"
              className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-bl-xl"
              prefetch={false}
            >
              <Button variant="outline" className="flex-1 md:flex-none">
                Hebergements
              </Button>
            </Link>
            <Link
              href="/users/artisanal"
              className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-bl-xl"
              prefetch={false}
            >
              <Button variant="outline" className="flex-1 md:flex-none">
                Artisanal
              </Button>
            </Link>
            <Link
              href="/users/tour"
              className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-bl-xl"
              prefetch={false}
            >
              <Button variant="outline" className="flex-1 md:flex-none">
                Tour
              </Button>
            </Link>
          </div>
          <div className="mt-4 md:mt-6">
            <h2 className="text-lg font-semibold">
              Over 1,000 homes in the map area
            </h2>
            <p className="text-sm text-muted-foreground">Sorting results</p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 md:gap-6">
            {/* atao components */}
            <Link href="/users/hebergement">
              <Card>
                <CardHeader className="relative">
                  <img
                    src="/placeholder.svg"
                    alt="Villa"
                    className="object-cover w-full h-48 rounded-t-md"
                  />
                  <Badge variant="secondary" className="absolute top-2 left-2">
                    Travelers Choice
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                  >
                    <HeartIcon className="w-6 h-6" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <h3 className="text-sm font-semibold">
                    Villa · Gqeberha, South Africa
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Oceans 9: 3 Bed Villa with pool
                  </p>
                  <p className="text-sm text-muted-foreground">
                    3 beds · 3 bedrooms
                  </p>
                  <p className="text-sm text-muted-foreground">Professional</p>
                  <p className="text-sm font-bold">
                    $128 per night · $2,800 total
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <span className="ml-1 text-sm font-semibold">5.0 (44)</span>
                  </div>
                  <Button variant="outline" size="sm">
                    View more
                  </Button>
                </CardFooter>
              </Card>
            </Link>
            <Card>
              <CardHeader className="relative">
                <img
                  src="/placeholder.svg"
                  alt="Cabin"
                  className="object-cover w-full h-48 rounded-t-md"
                />
                <Badge variant="secondary" className="absolute top-2 left-2">
                  Travelers Choice
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                >
                  <HeartIcon className="w-6 h-6" />
                </Button>
              </CardHeader>
              <CardContent>
                <h3 className="text-sm font-semibold">
                  Cabin · Gqeberha, South Africa
                </h3>
                <p className="text-sm text-muted-foreground">
                  The Great Escape: Luxury cabin
                </p>
                <p className="text-sm text-muted-foreground">
                  3 beds · 3 bedrooms
                </p>
                <p className="text-sm text-muted-foreground">Professional</p>
                <p className="text-sm font-bold">
                  $128 per night · $1,936 total
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <span className="ml-1 text-sm font-semibold">5.0 (24)</span>
                </div>
                <Button variant="outline" size="sm">
                  View more
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="relative">
                <img
                  src="/placeholder.svg"
                  alt="Villa"
                  className="object-cover w-full h-48 rounded-t-md"
                />
                <Badge variant="secondary" className="absolute top-2 left-2">
                  Travelers Choice
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                >
                  <HeartIcon className="w-6 h-6" />
                </Button>
              </CardHeader>
              <CardContent>
                <h3 className="text-sm font-semibold">
                  Villa · Saint Francis Bay, South Africa
                </h3>
                <p className="text-sm text-muted-foreground">
                  Discover luxury and comfort
                </p>
                <p className="text-sm text-muted-foreground">
                  11 beds · 8 bedrooms
                </p>
                <p className="text-sm text-muted-foreground">Professional</p>
                <p className="text-sm font-bold">
                  $192 per night · $4,601 total
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <span className="ml-1 text-sm font-semibold">4.92 (25)</span>
                </div>
                <Button variant="outline" size="sm">
                  View more
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="w-full p-4 md:w-1/3 md:p-6">
          <div className="relative w-full h-[400px] md:h-full">
            <img
              src="/placeholder.svg"
              alt="Map"
              className="object-cover w-full h-full rounded-md"
            />
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <Button variant="outline" size="icon">
                <ChevronLeftIcon className="w-6 h-6" />
              </Button>
            </div>
            <div className="absolute space-y-2 top-4 right-4 md:top-6 md:right-6 md:space-y-3">
              <Button variant="outline" size="icon">
                <PlusIcon className="w-6 h-6" />
              </Button>
              <Button variant="outline" size="icon">
                <MinusIcon className="w-6 h-6" />
              </Button>
            </div>
            <div className="absolute space-y-2 bottom-4 left-4 md:bottom-6 md:left-6 md:space-y-3">
              <Badge variant="secondary">$178</Badge>
              <Badge variant="secondary">$117</Badge>
              <Badge variant="secondary">$58</Badge>
              <Badge variant="secondary">$154</Badge>
            </div>
            <div className="absolute space-y-2 bottom-4 right-4 md:bottom-6 md:right-6 md:space-y-3">
              <Badge variant="secondary">$159</Badge>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ChevronDownIcon(props: any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronLeftIcon(props: any) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
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

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MinusIcon(props: any) {
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
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
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
