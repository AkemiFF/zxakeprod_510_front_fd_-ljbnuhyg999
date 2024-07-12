import { useState, useEffect } from "react";
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
import Urlconfig from "@/lib/config";
import { fetch_new_access } from "@/lib/csrf";

interface HotelModel {
  type: String;
  id: number;
  nom_hebergement: string;
  description_hebergement: string;
  nombre_etoile_hebergement: number;
  review: number;
  roomNumber: number;
  address: string;
}



export default function ListHotel() {
  const [hotels, setHotels] = useState<HotelModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const new_access = await fetch_new_access();
        const response = await fetch(`${Urlconfig.apiBaseUrl}/api/hebergement/get-all-hebergement/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${new_access}`,
          },
        });

        const data = await response.json();
        // console.log("Data from server:", data);  // Log pour vérifier les données
        if (data && Array.isArray(data.hebergements)) {
          setHotels(data.hebergements);
        } else {
          console.error("Data is not an array:", data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">List of Hotels</h1>
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
          <Hotelview
            key={i}
            name={hotel.nom_hebergement}
            description={hotel.description_hebergement}
            type={hotel.type}
            rating={hotel.nombre_etoile_hebergement}
            review={hotel.review || 0}
            roomNumber={hotel.roomNumber || 0}
            address={hotel.address || ""}
          />
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
