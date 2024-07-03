"use client";
import Navadmin from "@/components/Navadmin";

import HeaderAdmin from "@/components/HeaderAdmin";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListAdminOperator from "@/components/ListAdminOperator";
import ListAdminCraft from "@/components/ListAdminCraft";

export default function page() {
  let value = "bg-accent ";
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <Navadmin
        dash={""}
        hotels={""}
        craft={""}
        tour={""}
        client={""}
        admin={value}
      />

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <HeaderAdmin name="Administrator" more="List" links="administrator" />
        <main className="grid items-start flex-1 gap-4 p-4 mt-5 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="operator">
            <center className="my-9 ">
              <TabsList className="">
                <TabsTrigger value="operator" className="text-md ">
                  Administrator Tour Operator
                </TabsTrigger>
                <TabsTrigger value="craft" className="text-md ">
                  Administrator Craft
                </TabsTrigger>
              </TabsList>
            </center>
            <TabsContent value="operator">
              <ListAdminOperator />
            </TabsContent>
            <TabsContent value="craft">
              <ListAdminCraft />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
