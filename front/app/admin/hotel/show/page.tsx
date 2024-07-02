"use client";
import Navadmin from "@/components/Navadmin";

import HeaderAdmin from "@/components/HeaderAdmin";
import ListHotel from "@/components/ListHotel";

export default function Component() {
  let value = "bg-accent";
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Navadmin dash={""} hotels={value} craft={""} tour={""} client={""} />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <HeaderAdmin name="Hotel" more="List" />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 mt-5">
          <ListHotel />
        </main>
      </div>
    </div>
  );
}
