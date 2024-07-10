/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MCkQqpuduUV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { FilterIcon, PlusIcon } from "./icons";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import Link from "next/link";
import Authorisation from "./Authorisation";
import Urlconfig from "@/lib/config";

interface Craft {
  first_name: string;
  last_name: string;
  email: string;
  numero_responsable: string;
}

export default function ListAdminCraft() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    first_name: "",
    last_name: "",
  });
  const [craft, setOperators] = useState<Craft[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  useEffect(() => {
    fetch(`${Urlconfig.apiBaseUrl}/api/accounts/responsables/type/2/`)
      .then(response => response.json())
      .then(data => {
        setOperators(data); // Assurez-vous que les données renvoyées sont bien typées comme TourOperator[]
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching operators data:', error);
        setLoading(false);
      });
  }, []);

  const filteredData = useMemo(() => {
    return craft.filter(operator => {
      const nameMatches = operator.first_name.toLowerCase().includes(filters.first_name.toLowerCase());
      const lastMatches = operator.last_name.toLowerCase().includes(filters.last_name.toLowerCase());
      return nameMatches && lastMatches;
    });
  }, [craft, filters]);
  return (
    <Card>
      <CardHeader className="bg-primary mb-10 rounded-t-md text-white">
        <CardTitle className="font-bold text-xl">
          Administrator of the Business Craft
        </CardTitle>
        <CardDescription className="text-white">
          A list of all administrator the Business Craft executives and their
          contact information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-4">
          <Input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
            className="flex-1"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FilterIcon className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px]">
              <DropdownMenuLabel>Filters</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Filter by first name"
                    value={filters.first_name}
                    onChange={(e) =>
                      handleFilterChange("first_name", e.target.value)
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Filter by last name"
                    value={filters.last_name}
                    onChange={(e) =>
                      handleFilterChange("last_name", e.target.value)
                    }
                  />
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead className="max-sm:hidden max-md:hidden">
                Email
              </TableHead>
              <TableHead className="max-sm:hidden">Phone</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
                <TableCell className="max-sm:hidden max-md:hidden">
                  {item.email}
                </TableCell>
                <TableCell className="max-sm:hidden">{item.numero_responsable}</TableCell>
                <TableCell>
                  <Authorisation />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-center mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
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
      </CardContent>
    </Card>
  );
}
