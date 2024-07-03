import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { StarIcon } from "./icons";
import { CheckIcon } from "@radix-ui/react-icons";
import image1 from "../public/chambre/hotel1.jpg";
import image2 from "../public/chambre/hotel2.jpg";
import image3 from "../public/chambre/hotel3.webp";
import image4 from "../public/chambre/hotel4.jpg";
import image5 from "../public/chambre/chambre5.avif";
import Autoplay from "embla-carousel-autoplay";
import MapInfo from "./MapInfo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";
export default function MoreHotel() {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <Carousel
            className="rounded-lg max-sm:overflow-hidden"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={image1}
                  alt="Hotel Image 1"
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-[3/2]"
                />
              </CarouselItem>

              <CarouselItem>
                <Image
                  src={image2}
                  alt="Hotel Image 2"
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-[3/2]"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={image3}
                  alt="Hotel Image 3"
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-[3/2]"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={image4}
                  alt="Hotel Image 4"
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-[3/2]"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={image5}
                  alt="Hotel Image 5"
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-[3/2]"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="grid gap-6">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-primary">
                The Ritz-Carlton, Bali
              </h1>
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-5 h-5 fill-yellow-500" />
                <StarIcon className="w-5 h-5 fill-yellow-500" />
                <StarIcon className="w-5 h-5 fill-yellow-500" />
                <StarIcon className="w-5 h-5 fill-yellow-500" />
                <StarIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="text-muted-foreground">Nusa Dua, Bali</div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <div className="text-sm font-medium">About</div>
              <p className="text-muted-foreground">
                Nestled on the pristine white sand beaches of Nusa Dua, The
                Ritz-Carlton, Bali is a luxury resort that offers stunning ocean
                views, world-class dining, and a tranquil spa. Enjoy the
                ultimate in beachfront relaxation and Balinese hospitality.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Type</div>
              <p className="text-muted-foreground">Hotel</p>
            </div>

            <div className="grid gap-1">
              <div className="text-sm font-medium">Amenities</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  <span>Outdoor Pool</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  <span>Fitness Center</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  <span>Spa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  <span>Free WiFi</span>
                </div>
              </div>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Who is Responsible for This accommodation?
                  </AccordionTrigger>
                  <AccordionContent>Name: Rabe Randria</AccordionContent>
                  <AccordionContent>
                    Email: contact@[yourtravelagencyname].com
                  </AccordionContent>
                  <AccordionContent>Contact : +261 33 ...</AccordionContent>
                  <AccordionContent>
                    <Link href="#">
                      <Button className="bg-slate-900 hover:bg-slate-800">
                        Show more
                      </Button>
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="lg">Edit</Button>
        <Button size="lg" className="bg-red-700">
          Delete
        </Button>
      </div>
      <div className="flex items-center justify-center my-20 ">
        <MapInfo />
      </div>

      <Separator className="my-8" />
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium">Guest Reviews</div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Alex Chen</div>
                  <div className="text-sm text-muted-foreground">
                    2 days ago
                  </div>
                </div>
                <div className="flex items-center gap-0.5 ml-auto text-primary">
                  <StarIcon className="w-4 h-4 fill-yellow-500" />
                  <StarIcon className="w-4 h-4 fill-yellow-500" />
                  <StarIcon className="w-4 h-4 fill-yellow-500" />
                  <StarIcon className="w-4 h-4" />
                  <StarIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-muted-foreground">
                The Ritz-Carlton, Bali is an absolute gem! The beachfront
                location is breathtaking, and the service is impeccable. I
                highly recommend this resort for a luxurious and relaxing
                getaway.
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Jane Doe</div>
                  <div className="text-sm text-muted-foreground">
                    1 week ago
                  </div>
                </div>
                <div className="flex items-center gap-0.5 ml-auto text-primary">
                  <StarIcon className="w-4 h-4 fill-yellow-500" />
                  <StarIcon className="w-4 h-4 fill-yellow-500" />
                  <StarIcon className="w-4 h-4" />
                  <StarIcon className="w-4 h-4" />
                  <StarIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-muted-foreground">
                I had an amazing stay at The Ritz-Carlton, Bali. The staff were
                incredibly attentive and the facilities were top-notch. The spa
                treatments were a real highlight. I cant wait to come back!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
