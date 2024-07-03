import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import cartes from "../public/operator/cartes.jpg";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import Image from "next/image";
const MapInfo = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">View localisation</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Localisation of the accommodation</DrawerTitle>
            <DrawerDescription>Where is it ?</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="mt-3 h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <Image src={cartes} alt={""} />
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MapInfo;
