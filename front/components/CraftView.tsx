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
import { CardContainer, CardItem } from "./ui/3d-card";

interface craftModel {
  name: string;
  description: string;
  rating: number;
  review: number;

  address: string;
}

const CraftView = (hotel: craftModel) => {
  return (
    <CardContainer className="bg-card p-4 rounded-lg shadow-sm py-10 shadow-primary">
      <CardItem
        translateZ="60"
        className="flex items-center justify-between mb-4"
      >
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
      </CardItem>
      <p className="text-muted-foreground mb-4 h-20">{hotel.description}</p>

      <footer className="flex items-center justify-between sticky bottom-0">
        <Link href="/admin/craft/more">
          <Button>View</Button>
        </Link>
        <div className="flex items-center gap-2">
          <StarIcon className="w-5 h-5 fill-yellow-500" />
          <span className="font-medium">{hotel.rating}</span>
        </div>
      </footer>
    </CardContainer>
  );
};

export default CraftView;
