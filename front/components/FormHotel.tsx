"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { FilterIcon, ListOrderedIcon, PlusIcon, XIcon } from "./icons";
import { CopyIcon } from "@radix-ui/react-icons";

interface form {
  name: string;
  location: string;
  description: string;
  priceRange: string;
}
export default function Component() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    let file: File[] = selectedFiles;
    file.push(...files);
    setSelectedFiles(file);

    // Créez des URLs de prévisualisation pour chaque fichier
    const previewURLs = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews(previewURLs);
  };

  const handleRemoveImage = (index: number) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);

    const newPreviews = [...previews];
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);
  };

  function handleSubmit() {
    // Envoyer les données du nouveau hôtel à votre API
    //...
  }

  return (
    <>
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-bold"></h1>
        <div className="flex items-center gap-4">
          <Link href="/admin/hotel/show">
            <Button variant="outline">
              <CopyIcon className="w-4 h-4 mr-2" />
              View hotel
            </Button>
          </Link>
        </div>
      </div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Hotel</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Hotel Name</Label>
                  <Input id="name" placeholder="Enter hotel name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Enter hotel location" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter hotel description"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="rooms">Number of Rooms</Label>
                  <Input
                    id="rooms"
                    type="number"
                    placeholder="Enter number of rooms"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="amenities">Amenities</Label>
                  <Textarea
                    id="amenities"
                    placeholder="Enter hotel amenities"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="images">Hotel Images</Label>
                  <div className="grid grid-cols-3 gap-4">
                    {previews.map((image, index) => (
                      <div key={index} className="relative group">
                        <Image
                          src={image}
                          alt={`Hotel Image ${index + 1}`}
                          width={200}
                          height={200}
                          className="object-cover w-full rounded-md aspect-square"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="ghost"
                            size="icon"
                            type="button"
                            className="text-white"
                            onClick={() => {
                              handleRemoveImage(index);
                            }}
                          >
                            <XIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                <Button type="submit" className="justify-self-end">
                  Save Hotel
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
