/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MCkQqpuduUV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import config from "../lib/config";
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
import { Console, log } from "console";

interface Client {
  username: string;
  first_name: string;
  email: string;
  numero_client: string;
}

export default function ListClient() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    name: "",
    last: "",
  });
  const [clients, setClients] = useState<Client[]>([]);
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
    fetch(`${config.apiBaseUrl}/api/info/clients/`)
      .then(response => response.json())
      .then(data => {
        setClients(data); // Assurez-vous que les données renvoyées sont bien typées comme Client[]
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching client data:', error);
        setLoading(false);
      });
  }, []);

  const filteredData = useMemo(() => {
    return clients.filter(client => {
      console.log(client.email)
      const nameMatches = client.username && client.username.toLowerCase().includes(filters.name.toLowerCase());
      const lastMatches = client.first_name && client.first_name.toLowerCase().includes(filters.last.toLowerCase());
      return nameMatches && lastMatches;
    });
  }, [clients, filters]);


  return (
    <Card>
      <CardHeader className="bg-primary mb-10 rounded-t-md text-white">
        <CardTitle className="font-bold text-xl">Client User</CardTitle>
        <CardDescription className="text-white">
          A list of all Client in this site.
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
              <TableHead>
                <center>Actions</center>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.first_name}</TableCell>
                <TableCell className="max-sm:hidden max-md:hidden">{item.email}</TableCell>
                <TableCell className="max-sm:hidden">{item.numero_client}</TableCell>
                <TableCell className="flex items-center justify-center gap-10">
                  <Authorisation />
                  <Button className="bg-red-700 hover:bg-red-500">Blocked</Button>
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
