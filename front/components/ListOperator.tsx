import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import { FilterIcon, ListOrderedIcon, PlusIcon } from "./icons";
import Hotelview from "./Hotelview";
import Link from "next/link";
import { Meteors } from "./ui/Meteor";
import { HoverEffect } from "./ui/card-hover-effect";
import Operatorview from "./Operatorview";
import { useEffect, useState } from "react";
import { fetch_new_access } from "@/lib/csrf";
import Urlconfig from "@/lib/config";

interface OperatorsModel {
  type: String,
  id: number;
  nom_operateur: string;
  description_operateur: string;
  nombre_etoile_operateur: number;
  review: number;
  address: number;
}

export default function ListHotel() {
  const [operators, setOperators] = useState<OperatorsModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOperators = async () => {
      try {
        const new_access = await fetch_new_access();
        const response = await fetch(`${Urlconfig.apiBaseUrl}/api/tour-operateurs/get_all_tour_operateurs/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${new_access}`,
          },
        });

        const data = await response.json();
        console.log("Data from server:", data); // Log pour vérifier les données
        if (data && Array.isArray(data)) {
          setOperators(data);
        } else {
          console.error("Data is not an array:", data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setLoading(false);
      }
    };

    fetchOperators();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Operatior List</h1>
        <div className="flex items-center gap-4">
          <Link href="/admin/operator/add">
            <Button variant="outline">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Operator
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
        {operators.map((operator, i) => (
          <Operatorview
            key={i}
            name={operator.nom_operateur}
            description={operator.description_operateur}
            type={operator.type}
            rating={operator.nombre_etoile_operateur || 0}
            review={operator.review || 0}
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
