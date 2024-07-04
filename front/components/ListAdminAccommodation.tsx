/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MCkQqpuduUV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useMemo } from "react";
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

export default function ListAdminAccommodation() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    name: "",
    last: "",
  });
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const handleFilterChange = (field: String, value: String) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      //   [field]: value,
    }));
  };
  const filteredData = useMemo(() => {
    //ici on fait le fetch
    return [
      {
        name: "John ",
        last: "Rabenarivo",
        email: "john.doe@acmetravel.com",
        phone: "+1 (555) 555-5555",
      },
      {
        name: "Jenny ",
        last: "Rakotohasimbola",
        email: "jane.smith@globetrottertours.com",
        phone: "+1 (555) 555-5556",
      },
      {
        name: "Michael ",
        last: "Johnson",
        email: "michael.johnson@adventureseekers.com",
        phone: "+1 (555) 555-5557",
      },
      {
        name: "Emily ",
        last: "Davis",
        email: "emily.davis@wanderlustexpeditions.com",
        phone: "+1 (555) 555-5558",
      },
      {
        name: "David ",
        last: "Lee",
        email: "david.lee@horizonvacations.com",
        phone: "+1 (555) 555-5559",
      },
    ].filter((item) => {
      return (
        item.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        item.last.toLowerCase().includes(filters.last.toLowerCase())
      );
    });
  }, [filters]);
  return (
    <Card>
      <CardHeader className="bg-primary mb-10 rounded-t-md text-white">
        <CardTitle className="font-bold text-xl">
          Administrator of the Accommondation
        </CardTitle>
        <CardDescription className="text-white">
          A list of all administrator the Accommodation agency executives and
          their contact information.
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
                  <Label htmlFor="tourOperator">First Name</Label>
                  <Input
                    id="tourOperator"
                    type="text"
                    placeholder="Filter by tour operator"
                    onChange={(e) =>
                      handleFilterChange("tourOperator", e.target.value)
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="name">Last Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Filter by name"
                    value={filters.name}
                    onChange={(e) => handleFilterChange("name", e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Filter by title"
                    value={filters.last}
                    onChange={(e) =>
                      handleFilterChange("title", e.target.value)
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
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.last}</TableCell>
                <TableCell className="max-sm:hidden max-md:hidden">
                  {item.email}
                </TableCell>
                <TableCell className="max-sm:hidden">{item.phone}</TableCell>
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
      </CardContent>
    </Card>
  );
}
