"use client";
import Navadmin from "@/components/Navadmin";

import HeaderAdmin from "@/components/HeaderAdmin";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListAdminOperator from "@/components/ListAdminOperator";
import ListAdminCraft from "@/components/ListAdminCraft";
import ChatInterface from "@/components/ChatInterface";
import { Spotlight } from "@/components/ui/SpotLight";

export default function page() {
  let value = "bg-accent ";
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <Navadmin
        mess={value}
        dash={""}
        hotels={""}
        craft={""}
        tour={""}
        client={""}
        admin={""}
      />

      <div className="flex flex-col sm:gap-4 sm:pl-14">
        <div className="max-xl:hidden max-sm:block">
          <HeaderAdmin name="Administrator" more="List" links="administrator" />
        </div>
        <ChatInterface />
        <Spotlight fill="#5B876B" className="absolute top-0" />
      </div>
    </div>
  );
}
