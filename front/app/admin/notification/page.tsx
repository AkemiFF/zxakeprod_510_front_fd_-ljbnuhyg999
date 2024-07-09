"use client";
import Navadmin from "@/components/Navadmin";

import HeaderAdmin from "@/components/HeaderAdmin";
import Notification from "@/components/Notification";

export default function page() {
  let value = "bg-accent";
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <Navadmin
        dash={""}
        hotels={""}
        craft={""}
        tour={""}
        client={""}
        admin={""}
        mess={""}
      />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <HeaderAdmin name="Tour operator" more="List" links="operateur" />
        <main className="grid items-start flex-1 gap-4 p-4 mt-5 sm:px-6 sm:py-0 md:gap-8">
          <Notification />
        </main>
      </div>
    </div>
  );
}
