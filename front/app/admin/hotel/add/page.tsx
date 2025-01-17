"use client";
import Navadmin from "@/components/Navadmin";

import HeaderAdmin from "@/components/HeaderAdmin";
import FormHotel from "@/components/FormHotel";

export default function page() {
  let value = "bg-accent";
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <Navadmin
        mess={""}
        dash={""}
        hotels={value}
        craft={""}
        tour={""}
        client={""}
        admin={""}
      />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <HeaderAdmin name="Hotel" more="more" links="hotel" />
        <main className="grid items-start flex-1 gap-4 p-4 mt-5 sm:px-6 sm:py-0 md:gap-8">
          <FormHotel />
        </main>
      </div>
    </div>
  );
}
