"use client";

import FooterUser from "@/components/FooterUser";
import UserHeader from "@/components/UserHeader";
import CustomTimeline from '../timelineTour';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent} from "@/components/ui/card";
import ExclusiveTour from "@/app/users/tour/ExclusiveTour";

import { SunIcon, MoonIcon, RoadIcon, PhoneIcon, EmailIcon} from "@/components/icons";

import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import img1 from "../../../../public/tour/img1.png";
import img2 from "../../../../public/tour/img2.png";
import img3 from "../../../../public/tour/img3.png";
import img4 from "../../../../public/tour/img4.png";
import lahimena from "../../../../public/tour/lahimena.png";


import { Spotlight } from "@/components/ui/SpotLight";
import GoogleMapTrace from "../customMapTrace";
export default function DetailsTripTour() {
  const eventsTour: { ts: string; title: string; description: string; }[] = [
    { 
      ts: '12-07-2024', 
      title: 'Description for Step 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil quisquam labore! Cupiditate nemo tenetur cum similique, architecto perferendis molestiae nobis unde adipisci. Eaque ipsa quam soluta officia. Veritatis, quasi!'
    },
    { 
      ts: '12-07-2024', 
      title: 'Description for Step 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil quisquam labore! Cupiditate nemo tenetur cum similique, architecto perferendis molestiae nobis unde adipisci. Eaque ipsa quam soluta officia. Veritatis, quasi!'
    },
    { 
      ts: '12-07-2024', 
      title: 'Description for Step 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil quisquam labore! Cupiditate nemo tenetur cum similique, architecto perferendis molestiae nobis unde adipisci. Eaque ipsa quam soluta officia. Veritatis, quasi!'
    },
  ];

  const exclusiveTour: tour[] = [
    {
      id: 1,
      operatorTour: "ZTrip Mada",
      circuitTour: "Escapade à Belo Tsiribihina",
      villeTour: "Tsirihibina",
      descriptionsTour: "Lorem ipsum dovoluptate repellat...", 
      responsableTour: "Mr Daniel",
      prixTour : "$235",
      imageTour: img1.src,
      nuiteeTour : "4 jours",
      jourTour : "5 jours",
      dateCreated: "2024-01-01T00:00:00Z",
      dateUpdate: "2024-01-01T00:00:00Z",
    },
    {
      id: 2,
      operatorTour: "ZTrip Mada",
      circuitTour: "Escapade à Belo Tsiribihina",
      villeTour: "Tsirihibina",
      descriptionsTour: "Lorem ipsum dovoluptate repellat...", 
      responsableTour: "Mr Daniel",
      imageTour: img1.src,
      prixTour : "$235",
      nuiteeTour : "4 jours",
      jourTour : "5 jours",
      dateCreated: "2024-01-01T00:00:00Z",
      dateUpdate: "2024-01-01T00:00:00Z",
    },
    {
      id: 3,
      operatorTour: "ZTrip Mada",
      circuitTour: "Escapade à Belo Tsiribihina",
      villeTour: "Tsirihibina",
      descriptionsTour: "Lorem ipsum dovoluptate repellat...", 
      responsableTour: "Mr Daniel",
      prixTour : "$23",
      imageTour: img1.src,
      nuiteeTour : "4 jours",
      jourTour : "5 jours",
      dateCreated: "2024-01-01T00:00:00Z",
      dateUpdate: "2024-01-01T00:00:00Z",
    },
    {
      id: 4,
      operatorTour: "ZTrip Mada",
      circuitTour: "Escapade à Belo Tsiribihina",
      villeTour: "Tsirihibina",
      descriptionsTour: "Lorem ipsum dovoluptate repellat...", 
      responsableTour: "Mr Daniel",
      prixTour : "$23",
      imageTour: img1.src,
      nuiteeTour : "4 jours",
      jourTour : "5 jours",
      dateCreated: "2024-01-01T00:00:00Z",
      dateUpdate: "2024-01-01T00:00:00Z",
    },
  ];


  const router = useRouter();

  const originPlace = {
    lat: -18.831107,
    lng: 47.491135
  };

  const destinationPlace = {
    lat: -20.28869,
    lng:  44.31782
  };

  return (
    <>
    <UserHeader />
    <div className="max-w-6xl p-4 mx-auto lg:px-6 sm:py-8 md:py-10">
        
      <Spotlight fill="#5B876B" className="absolute top-0" />

      <div className="mb-8 ml-10 bg-[#e0ebe9] flex flex-col items-center p-6">
            <h2 className="text-xl font-bold">
                Find your dream travel & activity with all operator tours on Aftrip
            </h2>
            <p className="text-muted-foreground mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                explicabo cupiditate
            </p>
        </div>

      <section className="flex-col hidden gap-4 pb-4 sm:flex sm:flex-row sm:items-center sm:pb-8">
            <Undo2 className="cursor-pointer mb-5 -ms-20" onClick={() => router.back()} />
            <h1 className="text-xl font-semibold tracking-tight lg:text-3xl -mt-6 ml-12 text-[#305555]">The wonders of South</h1>
        
        <nav className="flex items-center justify-center gap-1 sm:ml-auto">
        <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-1 underline rounded-md underline-offset-2 hover:bg-muted"
          >
            <a href="#">
              <HeartIcon className="w-4 h-4" />
              Like
            </a>
          </Button>

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
              <SaveIcon className="w-4 h-4" />
              Save
            </a>
          </Button>
        </nav>
      </section>

      <section className="relative bg-muted -mt-4">
        <div className="grid gap-2 sm:grid-cols-4">
          <div
            className="relative col-span-2 row-span-2 overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl sm:rounded-l-xl"
          >
            <Image
              src={img1}
              width={600}
              height={600}
              alt="paysage"
              className="object-cover transition-transform aspect-square hover:scale-105"
            />
          </div>

          <Link
            href="#"
            className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-tl-xl"
            prefetch={false}
          >
            <Image
              src={img4}
              width={600}
              height={600}
              alt="Living room"
              className="object-cover transition-transform aspect-square hover:scale-105"
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-tr-xl"
            prefetch={false}
          >
            <Image
              src={img3}
              width={600}
              height={600}
              alt="Fireplace"
              className="object-cover transition-transform aspect-square hover:scale-105"
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-bl-xl"
            prefetch={false}
          >
            <Image
              src={img2}
              width={600}
              height={600}
              alt="Bathroom"
              className="object-cover transition-transform aspect-square hover:scale-105"
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-br-xl"
            prefetch={false}
          >
            <Image
              src={img1}
              width={600}
              height={600}
              alt="Bedroom"
              className="object-cover transition-transform aspect-square hover:scale-105"
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

      <section className = "mt-6">
        <div className="flex justify-between">
            <div className="flex-col hidden gap-1 md:flex">
                <h2 className="text-xl font-semibold">Antananarivo - Tsiribihina - Morondava - Toliara</h2>

                <div className = "flex flex-row justify-start">
                    <div className = "flex flex-row justify-start">
                        <RoadIcon className = "w-4 h-4 mt-1 text-muted-foreground"/>
                        <p className=" text-sm text-muted-foreground ms-2">Distance trip : 1000km - </p>
                    </div>
                    <div className = "flex flex-row justify-start ms-4">
                        <SunIcon className = "w-4 h-4 mt-1 text-muted-foreground"/>
                        <p className=" text-sm text-muted-foreground ms-2">5 days - </p>
                    </div>
                    <div className = "flex flex-row justify-start ms-4">
                        <MoonIcon className = "w-4 h-4 mt-1 text-muted-foreground"/>
                        <p className=" text-sm text-muted-foreground ms-2">4 nights</p>
                    </div>
                </div>
            </div>

            <div>
                <h4 className = "font-bold text-3xl">$255<span className = "text-muted-foreground text-sm font-medium">/person</span></h4>
            </div>
        </div>
     

          <section className="mt-6">
          <nav className="p-2 sticky">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-start items-center md:items-start">
          <li>
            <a href="#overview" className="hover:underline hover:underline-offset-12 hover:decoration-2 hover:decoration-primary font-medium">Overview</a>
          </li>
          <li>
            <a href="#summary" className="hover:underline hover:underline-offset-12 hover:decoration-2 hover:decoration-primary font-medium md:ms-12">Summary</a>
          </li>
          <li>
            <a href="#programs" className="hover:underline hover:underline-offset-12 hover:decoration-2 hover:decoration-primary font-medium md:ms-12">Programs</a>
          </li>
          <li>
            <a href="#amenities" className="hover:underline hover:underline-offset-12 hover:decoration-2 hover:decoration-primary font-medium md:ms-12">Amenitites</a>
          </li>
        </ul>
      </nav>
          </section>

          <Separator className = "mt-4"/>
      </section>

      <section className="py-8 grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 md:gap-16 items-start">
        <div className="grid row-start-2 gap-8 md:row-start-auto">
          <section className = "-mt-4">
            <Card className = "hover:bg-muted">
                <div className="flex items-center gap-6 p-4 rounded-lg">
                    <div className="flex items-center justify-center w-12 h-12">
                    <Avatar className="w-16 h-16 border">
                        <AvatarImage src={lahimena.src} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    </div>

                    <div className="grid gap-0.5">
                        <div className="font-semibold">ZTrip Mada</div>
                        <div className="text-sm text-muted-foreground flex justify-start">
                            <MapPinIcon className = "w-4 h-4" />
                            <p className = "-mt-1 ms-1">23 Baker Street, Ivato - Antananarivo 101</p>
                        </div>
                    </div>
                </div>

                <div className="px-6 ms-16">
                    <p className = "text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sunt veritatis obcaecati quaerat saepe commodi, perspiciatis possimus maxime iste enim?...</p>
                </div>

                <div className="flex justify-between px-6 ms-16 my-6">
                    <Link href="#">
                        <Button className="hover:bg-gray-300 text-sm font-medium bg-gray-200 text-black">About</Button>
                    </Link>
                    <Link href="#">
                        <Button className="hover:opacity-80 text-sm font-semibold">Discover more trip</Button>
                    </Link>
                </div>
            </Card>
          </section>
          
          <div className="prose">
            <h3 className = "mb-3 font-semibold text-xl">Description</h3>
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
          </div>
          <Separator />

          <section className = "mt-2">
            <h3 className = "mb-4 font-semibold text-xl">Programs</h3>
                <CustomTimeline items={eventsTour}/>
          </section>
          <Separator />

          <div className="grid gap-8">
              <h3 className="text-xl font-semibold">Travel Inclusion </h3>
              <div className="grid gap-6 lg:grid-cols-2 -mt-2">
                  <div>
                    <TrueIcon className = "w-8 h-8"/>
                    <ul className = "mt-4">
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </div>

                  <div>
                    <FalseIcon className = "w-8 h-8"/>
                    <ul className = "mt-4">
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                      <li className = "list-disc">Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </div>
              </div>
          </div>
        </div>

        <div>
           <Card className = "shadow">
              <CardHeader className="bg-primary rounded-t-xl p-3">
              <h3 className="text-base font-semibold text-white">TRAVEL DETAILS</h3>
            </CardHeader>

            <CardContent className = "py-4">
                <div>
                    <div className = "flex justify-between text-sm">
                      <h5 className="font-semibold">Start</h5>
                      <p>03-07-2024</p>
                    </div>
                    <Separator className = "mt-2 mb-4"/>
                </div>
                
                <div>
                    <div className = "flex justify-between text-sm">
                      <h5 className="font-semibold">End</h5>
                      <p>09-07-2024</p>
                    </div>
                    <Separator className = "mt-2 mb-4"/>
                </div>

                <div>
                    <div className = "flex justify-between text-sm">
                      <h5 className="font-semibold">Available place</h5>
                      <p>11</p>
                    </div>
                    <Separator className = "mt-2 mb-4"/>
                </div>

                <div>
                    <div className = "flex justify-between text-sm">
                      <h5 className="font-semibold">Price</h5>
                      <p>$255</p>
                    </div>
                    <Separator className = "mt-2 mb-4"/>
                </div>

                <div>
                    <div className = "flex justify-between text-sm">
                      <h5 className="font-semibold">Transportation</h5>
                      <p>Land</p>
                    </div>
                </div>

                <p className = "mt-4 text-muted-foreground text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, autem.</p>
            </CardContent>
           </Card>
           
           <Card className="hover:bg-muted">
            <CardContent className="grid gap-6 h-100">
              <GoogleMapTrace origin={originPlace} destination={destinationPlace} zoom = {6}/>
            </CardContent>
          </Card>

          <Separator className="mt-8"/>

          <div className = "px-3 py-8 rounded mt-2">
              <h4 className="font-bold text-primary text-xl text-center">Let's build your trip together</h4>
              <p className = "mt-2 text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam ipsa voluptatem</p>

              <Link href = "tel:+261 34 56 789 09" className = "flex justify-center mt-6 ms-4 border border-black py-2 rounded hover:bg-black hover:text-white">
                 <PhoneIcon />
                 <p className = "ms-3 text-sm font-medium">Contacter</p>
              </Link>

              <Link href = "mailto:ztripmada@gmail.com" className = "flex justify-center ms-4 mt-4 border border-black py-2 rounded hover:bg-black hover:text-white">
                <EmailIcon/>
                <p className = "ms-3 text-sm font-medium">Envoyer un email</p>
              </Link>
           </div>

           <Separator className="mt-6"/>

        </div>
      </section>

      <section className="mt-12">
      <h2 className = "text-2xl font-semibold">You would definitely also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {exclusiveTour.map((tour) => (
                  <ExclusiveTour
                    key={tour.id}
                    id={tour.id}
                    operatorTour={tour.operatorTour}
                    circuitTour={tour.circuitTour}
                    villeTour={tour.villeTour}
                    descriptionsTour={tour.descriptionsTour}
                    responsableTour={tour.responsableTour}
                    prixTour={tour.prixTour}
                    imageTour={tour.imageTour}
                    nuiteeTour={tour.nuiteeTour}
                    jourTour={tour.jourTour}
                    dateCreated={tour.dateCreated}
                    dateUpdate={tour.dateUpdate}
                  />
                ))}
              </div>
      </section>
    </div>

    <FooterUser />
    </>
  );
}

function GripIcon(props: any) {
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

function SaveIcon(props: any) {
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
      strokeLinecap=""
      strokeLinejoin=""
    >
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
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

function TrueIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rounded-full border-2 border-green-500"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function FalseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rounded-full border-2 border-red-500"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}


function ShareIcon(props: any) {
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




