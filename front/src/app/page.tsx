/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1ThCvMSnXNF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl p-4 mx-auto lg:px-6 sm:py-8 md:py-10">
      <section className="flex-col hidden gap-4 pb-4 sm:flex sm:flex-row sm:items-center sm:pb-8">
        <h1 className="text-xl font-semibold tracking-tight lg:text-3xl">
          Cozy and Charming Mountain Retreat with Hot Tub
        </h1>
        <nav className="flex items-center justify-center gap-1 sm:ml-auto">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-1 underline rounded-md underline-offset-2 hover:bg-muted"
          >
            <a href="#">
              <ShareIcon className="w-4 h-4" />
              Share
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-1 underline rounded-md underline-offset-2 hover:bg-muted"
          >
            <a href="#">
              <HeartIcon className="w-4 h-4" />
              Save
            </a>
          </Button>
        </nav>
      </section>
      <section className="relative bg-muted">
        <div className="grid gap-2 sm:grid-cols-4">
          <Link
            href="#"
            className="relative col-span-2 row-span-2 overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl sm:rounded-l-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Living room"
              className="object-cover aspect-square hover:scale-105 transition-transform"
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-tl-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Living room"
              className="object-cover aspect-square hover:scale-105 transition-transform"
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-tr-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Fireplace"
              className="object-cover aspect-square hover:scale-105 transition-transform"
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-bl-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Bathroom"
              className="object-cover aspect-square hover:scale-105 transition-transform"
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-br-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Bedroom"
              className="object-cover aspect-square hover:scale-105 transition-transform"
            />
          </Link>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="absolute gap-1 bottom-4 right-4 hover:bg-secondary hover:text-secondary-foreground"
        >
          <GripIcon className="w-4 h-4" />
          Show all photos
        </Button>
      </section>
      <section className="py-8 grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 md:gap-16 items-start">
        <div className="grid row-start-2 gap-8 md:row-start-auto">
          <div className="flex-col hidden gap-1 md:flex">
            <h2 className="text-2xl font-semibold">
              Home in Santa Cruz, California, United States
            </h2>
            <p className="text-muted-foreground">
              2 guests · 1 bedroom · 1 bed · 1 bath · Wifi · Kitchen
            </p>
          </div>
          <Card className="hover:bg-muted">
            <CardContent className="relative flex items-center gap-6 p-4 sm:p-6">
              <AwardIcon className="w-10 h-10" />
              <div className="flex-1 font-semibold max-w-[16rem] hidden sm:flex md:hidden lg:flex">
                One of the most loved homes on Airbnb, according to guests.
              </div>
              <div className="flex items-center gap-6 ml-auto">
                <div className="flex flex-col gap-1 text-center">
                  <div className="text-2xl font-semibold tracking-tighter">
                    4.93
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5" />
                  </div>
                </div>
                <Separator orientation="vertical" className="h-9" />
                <div className="flex flex-col gap-0.5 text-center">
                  <div className="text-2xl font-semibold tracking-tighter">
                    745
                  </div>
                  <div className="text-xs font-semibold underline">Reviews</div>
                </div>
              </div>
              <Link
                href="#"
                className="absolute inset-0 hover:bg-muted/50 transition-colors"
                prefetch={false}
              >
                <span className="sr-only">View reviews</span>
              </Link>
            </CardContent>
          </Card>
          <div className="flex items-center gap-6 hover:bg-muted rounded-lg p-4">
            <div className="flex items-center justify-center w-12 h-12">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Hosted by Catherine</div>
              <div className="text-sm text-muted-foreground">
                Joined in 2010 · Superhost
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-6 hover:bg-muted rounded-lg p-4">
            <div className="flex items-center justify-center w-12 h-12">
              <CalendarCheckIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">
                Free cancellation for 48 hours
              </div>
              <div className="text-sm text-muted-foreground">
                Get a full refund if you change your mind.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 hover:bg-muted rounded-lg p-4">
            <div className="flex items-center justify-center w-12 h-12">
              <MedalIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Catherine is a Superhost</div>
              <div className="text-sm text-muted-foreground">
                Superhosts are experienced, highly rated hosts.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 hover:bg-muted rounded-lg p-4">
            <div className="flex items-center justify-center w-12 h-12">
              <MapPinIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Great location</div>
              <div className="text-sm text-muted-foreground">
                100% of recent guests gave the location a 5-star rating.
              </div>
            </div>
          </div>
          <Separator />
          <div className="prose">
            <p>
              Welcome to our serene mountain retreat! Nestled amidst the
              tranquil beauty of the mountains, this cozy home is your perfect
              getaway for relaxation and adventure.
            </p>
            <p>
              Wake up to breathtaking vistas from every window. Enjoy your
              morning coffee on the balcony, taking in the serene landscape.
              This mountain haven is perfect for families, friends, and couples
              seeking a blend of adventure and relaxation. Book your stay and
              experience the magic of the mountains!
            </p>
            <Collapsible>
              <CollapsibleTrigger className="font-semibold flex items-center gap-1 [&[data-state=open]>svg]:-rotate-90 hover:bg-muted rounded-md px-2 py-1">
                Show more
                <ChevronRightIcon className="w-4 h-4 transition-all translate-y-px" />
              </CollapsibleTrigger>
              <CollapsibleContent className="hover:bg-muted rounded-md px-4 py-2">
                <p>
                  Our home comfortably sleeps up to 6 guests in 3 beautifully
                  appointed bedrooms, each designed for relaxation and comfort.
                  Cook up a storm in our modern kitchen, complete with all the
                  appliances and utensils you need for a home-cooked meal.
                </p>
                <p>
                  Stay connected with high-speed internet and a dedicated
                  workspace, ideal for those who mix travel with work.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <Separator />
          <div className="grid gap-8">
            <h3 className="text-xl font-semibold">What this place offers</h3>
            <ul className="grid gap-6 lg:grid-cols-2">
              <li className="flex gap-4 hover:bg-muted rounded-lg p-4">
                <MountainSnowIcon className="w-6 h-6" />
                Mountain view
              </li>
              <li className="flex gap-4 hover:bg-muted rounded-lg p-4">
                <WavesIcon className="w-6 h-6" />
                Beach access
              </li>
              <li className="flex gap-4 hover:bg-muted rounded-lg p-4">
                <ChefHatIcon className="w-6 h-6" />
                Private chef
              </li>
              <li className="flex gap-4 hover:bg-muted rounded-lg p-4">
                <WifiIcon className="w-6 h-6" />
                Wifi
              </li>
              <li className="flex gap-4 hover:bg-muted rounded-lg p-4">
                <CarIcon className="w-6 h-6" />
                Parking
              </li>
              <li className="flex gap-4 hover:bg-muted rounded-lg p-4">
                <CameraIcon className="w-6 h-6" />
                Security cameras
              </li>
              <li className="flex gap-4 hover:bg-muted rounded-lg p-4">
                <AccessibilityIcon className="w-6 h-6" />
                Wheelchair accessible
              </li>
              <li className="flex gap-4 hover:bg-muted rounded-lg p-4">
                <WindIcon className="w-6 h-6" />
                Patio
              </li>
            </ul>
            <Button
              variant="outline"
              className="justify-self-start hover:bg-secondary hover:text-secondary-foreground"
            >
              Show all amenities
            </Button>
          </div>
          <Separator />
          <div className="grid gap-8">
            <div className="grid gap-0.5">
              <h3 className="text-xl font-semibold">Find a date</h3>
              <div className="text-muted-foreground">
                Pick your travel dates for availability.
              </div>
            </div>
            <div className="p-0 rounded-lg sm:border sm:p-4 justify-self-start">
              <Calendar
                numberOfMonths={2}
                mode="range"
                className="p-0 hidden xl:flex [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6 hover:bg-muted"
              />
              <Calendar className="flex p-0 xl:hidden hover:bg-muted" />
            </div>
          </div>
        </div>
        <div className="grid row-start-1 gap-4 md:row-start-auto">
          <div className="flex flex-col gap-1 sm:hidden">
            <h2 className="font-semibold sm:text-2xl">
              Home in Santa Cruz, California, United States
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              2 guests · 1 bedroom · 1 bed · 1 bath · Wifi · Kitchen
            </p>
          </div>
          <Card className="hover:bg-muted">
            <CardHeader>
              <CardTitle>
                $400{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  / night
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <form>
                <div className="grid gap-2">
                  <div className="flex gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-col items-start w-full h-auto hover:bg-muted"
                        >
                          <span className />
                        </Button>
                      </PopoverTrigger>
                    </Popover>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function AccessibilityIcon(props) {
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
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}

function AwardIcon(props) {
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
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function CalendarCheckIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

function CameraIcon(props) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function CarIcon(props) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function ChefHatIcon(props) {
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
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
      <path d="M6 17h12" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function GripIcon(props) {
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
      <circle cx="12" cy="5" r="1" />
      <circle cx="19" cy="5" r="1" />
      <circle cx="5" cy="5" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="19" r="1" />
      <circle cx="19" cy="19" r="1" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
}

function HeartIcon(props) {
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

function MapPinIcon(props) {
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

function MedalIcon(props) {
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
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}

function MountainSnowIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
    </svg>
  );
}

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function StarIcon(props) {
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

function WavesIcon(props) {
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
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}

function WifiIcon(props) {
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
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  );
}

function WindIcon(props) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
