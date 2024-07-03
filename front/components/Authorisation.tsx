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
import { Bar, BarChart, Label, ResponsiveContainer } from "recharts";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
const Authorisation = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>More</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm pb-10">
          <DrawerHeader>
            <DrawerTitle>Access Secure</DrawerTitle>
            <DrawerDescription>
              Enter your password to have account access
            </DrawerDescription>
          </DrawerHeader>
          <DrawerDescription>
            <Card className="w-[350px] ">
              <CardHeader>
                <CardTitle>Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Input
                        id="name"
                        placeholder="Enter the admin password"
                        type="password"
                      />
                    </div>
                  </div>
                  <Button className="mt-5 w-full">Get Access</Button>
                </form>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </CardContent>
            </Card>
          </DrawerDescription>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Authorisation;
