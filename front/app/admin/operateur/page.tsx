"use client";
import Navadmin from "@/components/Navadmin";

import HeaderAdmin from "@/components/HeaderAdmin";
import ListOperator from "@/components/ListOperator";
import { Spotlight } from "@/components/ui/SpotLight";

export default function page() {
  let value = "bg-accent text-accent-foreground";
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <Navadmin
        dash={""}
        hotels={""}
        craft={""}
        tour={value}
        client={""}
        admin={""}
      />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <HeaderAdmin name="Tour operator" more="List" links="operateur" />
        <main className="grid items-start flex-1 gap-4 p-4 mt-5 sm:px-6 sm:py-0 md:gap-8">
          <ListOperator />
          <Spotlight fill="#5B876B" className="absolute top-0" />
        </main>
      </div>
    </div>
  );
}
