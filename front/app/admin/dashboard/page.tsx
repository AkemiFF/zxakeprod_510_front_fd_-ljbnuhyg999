"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Navadmin from "@/components/Navadmin";
import { BarChart, LineChart } from "@/components/chart";
import {
  BriefcaseIcon,
  CompassIcon,
  HotelIcon,
  UsersIcon,
} from "@/components/icons";
import HeaderAdmin from "@/components/HeaderAdmin";
import { Spotlight } from "@/components/ui/SpotLight";

export default function Component() {
  let value = "bg-accent";
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Navadmin
        dash={value}
        hotels={""}
        craft={""}
        tour={""}
        client={""}
        admin={""}
      />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Spotlight fill="#5B876B" className="absolute top-0" />
        <HeaderAdmin name="Dashboard" more="Home" links="dashboard" />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>accommodation</CardTitle>
                <CardDescription>Registered accommodation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">125</div>
                  <HotelIcon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tour Operator</CardTitle>
                <CardDescription>Registered Tour Operator</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">35</div>
                  <CompassIcon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Crafts</CardTitle>
                <CardDescription>Registered Crafts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">78</div>
                  <BriefcaseIcon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customers</CardTitle>
                <CardDescription>Registered Customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">2,345</div>
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
            <Card>
              <CardHeader>
                <CardTitle>Bookings</CardTitle>
                <CardDescription>
                  Hotel bookings over the last 6 months.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer Satisfaction</CardTitle>
                <CardDescription>
                  Hotel customer satisfaction over the last 6 months.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
          </div>
          <div className="">
            <Card>
              <CardHeader>
                <CardTitle>Customer Sign in this year</CardTitle>
                <CardDescription>
                  hotel customer signed in over the last 6 months.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
