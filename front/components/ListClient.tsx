"use client";
import Urlconfig from "../lib/config";
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
import { FilterIcon } from "./icons";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import Authorisation from "./Authorisation";
import { toast } from "react-toastify";

interface Client {
  id: number;
  username: string;
  first_name: string;
  email: string;
  numero_client: string;
  isBlocked: boolean; // Nouvelle propriété pour l'état de blocage
}

export default function ListClient() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    first_name: "",
    last_name: "",
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
    fetch(`${Urlconfig.apiBaseUrl}/api/accounts/clients/`)
      .then(response => response.json())
      .then(data => {
        // Ajouter la propriété isBlocked à chaque client
        const clientsWithBlockedStatus = data.map((client: Client) => ({
          ...client,
          isBlocked: false, // Supposons que les clients ne soient pas bloqués par défaut
        }));
        setClients(clientsWithBlockedStatus);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching client data:', error);
        setLoading(false);
      });
  }, []);

  const handleBlockClick = (clientId: number, currentStatus: boolean) => {
    const endpoint = currentStatus
      ? `${Urlconfig.apiBaseUrl}/api/accounts/client-update/${clientId}/ban/`
      : `${Urlconfig.apiBaseUrl}/api/accounts/client-update/${clientId}/ban/`;

    fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          setClients(prevClients =>
            prevClients.map(client =>
              client.id === clientId ? { ...client, isBlocked: !currentStatus } : client
            )
          );
          toast.success(currentStatus ? 'Client unblocked successfully' : 'Client blocked successfully');
        } else {
          toast.error(currentStatus ? 'Failed to unblock client' : 'Failed to block client');
        }
      })
      .catch(error => {
        toast.error(currentStatus ? 'Error unblocking client:' : 'Error blocking client:', error.message);
      });
  };

  const filteredData = useMemo(() => {
    return clients.filter(client => {
      const searchMatches = search === "" || client.username.toLowerCase().includes(search.toLowerCase());
      const nameMatches = client.first_name.toLowerCase().includes(filters.first_name.toLowerCase());
      const lastMatches = client.username.toLowerCase().includes(filters.last_name.toLowerCase());
      return searchMatches && nameMatches && lastMatches;
    });
  }, [clients, search, filters]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader className="bg-primary mb-10 rounded-t-md text-white">
        <CardTitle className="font-bold text-xl">Client User</CardTitle>
        <CardDescription className="text-white">
          A list of all Clients on this site.
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
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    type="text"
                    placeholder="Filter by first name"
                    value={filters.first_name}
                    onChange={(e) =>
                      handleFilterChange("first_name", e.target.value)
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    type="text"
                    placeholder="Filter by last name"
                    value={filters.last_name}
                    onChange={(e) => handleFilterChange("last_name", e.target.value)}
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
            {filteredData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell className="max-sm:hidden max-md:hidden">{item.email}</TableCell>
                <TableCell className="max-sm:hidden">{item.numero_client}</TableCell>
                <TableCell className="flex items-center justify-center gap-10">
                  <Authorisation />
                  <Button
                    className={item.isBlocked ? "bg-green-700 hover:bg-green-500" : "bg-red-700 hover:bg-red-500"}
                    onClick={() => handleBlockClick(item.id, item.isBlocked)}
                  >
                    {item.isBlocked ? 'Activated' : 'Blocked'}
                  </Button>
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
