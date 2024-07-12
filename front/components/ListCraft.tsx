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
import CraftView from "./CraftView";
import { useEffect, useState } from "react";
import { fetch_new_access } from "@/lib/csrf";
import Urlconfig from "@/lib/config";

interface CraftModel {
  type: string;
  id: number;
  nom_produit_artisanal: string;
  description_artisanat: string;
  review: number;
  rating: number;
  roomNumber: number;
  address: string;
}

export default function ListCraft() {
  const [crafts, setCrafts] = useState<CraftModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCrafts = async () => {
      try {
        const new_access = await fetch_new_access();
        const response = await fetch(`${Urlconfig.apiBaseUrl}/api/artisanal/produits-artisanal/all/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${new_access}`,
          },
        });

        const data = await response.json();
        // console.log("Data from server:", data);  // Log pour vérifier les données
        if (data && Array.isArray(data)) {
          setCrafts(data);
        } else {
          console.error("Data is not an array:", data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crafts:", error);
        setLoading(false);
      }
    };
    fetchCrafts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Crafts List</h1>
        <div className="flex items-center gap-4">
          <Link href="/admin/hotel/add">
            <Button variant="outline">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add craft
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
        {crafts.map((craft, i) => (
          <CraftView
            key={i}
            name={craft.nom_produit_artisanal}
            description={craft.description_artisanat}
            rating={craft.rating}
            review={craft.review}
            address={craft.address}
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
