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

export default function ListCraft() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    craft: "",
    description: "",
    title: "",
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
    return [
      {
        craft: "Acme Travel",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        title: "CEO",
        email: "john.doe@acmetravel.com",
        phone: "+1 (555) 555-5555",
      },
      {
        craft: "Globetrotter Tours",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        title: "President",
        email: "jane.smith@globetrottertours.com",
        phone: "+1 (555) 555-5556",
      },
      {
        craft: "Adventure Seekers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        title: "VP of Operations",
        email: "michael.johnson@adventureseekers.com",
        phone: "+1 (555) 555-5557",
      },
      {
        craft: "Wanderlust Expeditions",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        title: "Chief Marketing Officer",
        email: "emily.davis@wanderlustexpeditions.com",
        phone: "+1 (555) 555-5558",
      },
      {
        craft: "Horizon Vacations",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        title: "Director of Sales",
        email: "david.lee@horizonvacations.com",
        phone: "+1 (555) 555-5559",
      },
    ].filter((item) => {
      return (
        item.craft.toLowerCase().includes(filters.craft.toLowerCase()) &&
        item.description
          .toLowerCase()
          .includes(filters.description.toLowerCase()) &&
        item.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    });
  }, [filters]);
  return (
    <Card>
      <CardHeader className="bg-primary rounded-t-md mb-5 text-white ">
        <CardTitle className="font-bold text-xl">Craft</CardTitle>
        <CardDescription className="text-white">
          A list of all Craft agency executives and their contact information.
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
                  <Label htmlFor="craft">Craft</Label>
                  <Input
                    id="craft"
                    type="text"
                    placeholder="Filter by Craft"
                    value={filters.craft}
                    onChange={(e) =>
                      handleFilterChange("craft", e.target.value)
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="name">Description</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Filter by name"
                    value={filters.description}
                    onChange={(e) =>
                      handleFilterChange("description", e.target.value)
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="title">Email</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Filter by email"
                    value={filters.title}
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
              <TableHead>Craft Name</TableHead>
              <TableHead>description</TableHead>
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
                <TableCell>{item.craft}</TableCell>
                <TableCell className="break-words">
                  {item.description}
                </TableCell>

                <TableCell className="max-sm:hidden max-md:hidden">
                  {item.email}
                </TableCell>
                <TableCell className="max-sm:hidden">{item.phone}</TableCell>
                <TableCell className="flex gap-5">
                  <Link href="/admin/craft/more">
                    <Button variant="outline" size="sm">
                      More
                    </Button>
                  </Link>
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
