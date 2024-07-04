import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import {
  BedIcon,
  DollarSignIcon,
  ExpandIcon,
  FilePenIcon,
  FilterIcon,
  ListOrderedIcon,
  LocateIcon,
  PlusIcon,
  StarIcon,
  TrashIcon,
} from "./icons";
import Hotelview from "./Hotelview";
import Link from "next/link";
import { Meteors } from "./ui/Meteor";
import { HoverEffect } from "./ui/card-hover-effect";

interface HotelModel {
  name: string;
  description: string;
  type: String;
  rating: number;
  review: number;
  roomNumber: number;
  address: string;
}

export default function ListHotel() {
  const hotels: HotelModel[] = [
    {
      name: "Hotel Acme",
      type: "Hotel",
      description: "Located in the heart of Paris",
      rating: 4.5,
      review: 450,
      roomNumber: 100,
      address: "123 Main St, Paris, France",
    },
    {
      name: "Belle Époque",
      type: "Bengalo",
      description: "Stunning view of the Eiffel Tower",
      rating: 4.7,
      review: 380,
      roomNumber: 80,
      address: "456 Elm St, Paris, France",
    },
    {
      name: "Hotel Clarisse",
      type: "hotel",
      description: "Situated in the bustling city center",
      rating: 4.9,
      review: 300,
      roomNumber: 120,
      address: "789 Oak St, Paris, France",
    },
    {
      name: "Villa Dreams",
      type: "Villa",
      description: "Nestled in the heart of New York City",
      rating: 4.2,
      review: 500,
      roomNumber: 150,
      address: "101 Maple St, New York, USA",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold"></h1>
        <div className="flex items-center gap-4">
          <Link href="/admin/hotel/add">
            <Button variant="outline">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add accommodation
            </Button>
          </Link>
          <Button variant="outline">
            <FilterIcon className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <ListOrderedIcon className="w-4 h-4 mr-2" />
            Sort
          </Button>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel, i) => (
          <>
            <Hotelview
              key={hotel.name}
              name={hotel.name}
              description={hotel.description}
              type={hotel.type}
              rating={hotel.rating}
              review={hotel.review}
              roomNumber={hotel.roomNumber}
              address={hotel.address}
            />
          </>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
