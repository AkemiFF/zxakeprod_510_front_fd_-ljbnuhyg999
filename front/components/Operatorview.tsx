import React from "react";
import { Button } from "./ui/button";
import {
  BedIcon,
  ExpandIcon,
  FilePenIcon,
  LocateIcon,
  StarIcon,
} from "./icons";
import { TrashIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Meteors } from "./ui/Meteor";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { HoverCardContent } from "./ui/hover-card";

interface HotelModel {
  name: string;
  description: string;
  type: String;
  rating: number;
  review: number;
  address: string;
}

const Operatorview = (hotel: HotelModel) => {
  return (
    <CardContainer className="relative bg-card p-4 rounded-lg shadow-sm  shadow-primary  hover:shadow-2xl hover:shadow-emerald-500/2 flex flex-col">
      <CardItem className="" translateZ="60">
        <div className="flex items-center content-between justify-between">
          <h2 className="text-lg font-medium">{hotel.name}</h2>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <FilePenIcon className="w-5 h-5 " />
              <span className="sr-only">Edit</span>
            </Button>
            <Button size="icon" variant="ghost">
              <TrashIcon className="w-5 h-5 text-red-700" />
              <span className="sr-only">Delete</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost">
                  <ExpandIcon className="w-5 h-5" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-4">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <LocateIcon className="w-5 h-5" />
                    <span>{hotel.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-yellow-500" />
                    <span>
                      {hotel.rating}/5 {hotel.review}
                    </span>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardItem>
      <p className="text-muted-foreground mb-4">Type : {hotel.type}</p>
      <p className="text-muted-foreground mb-4">{hotel.description}</p>

      <div className="flex items-center justify-between ">
        <Link href="/admin/operateur/more">
          <Button>View</Button>
        </Link>
        <div className="flex items-center gap-2">
          <StarIcon className="w-5 h-5 fill-yellow-500" />
          <span className="font-medium">4.5</span>
        </div>
      </div>
    </CardContainer>
  );
};

export default Operatorview;
