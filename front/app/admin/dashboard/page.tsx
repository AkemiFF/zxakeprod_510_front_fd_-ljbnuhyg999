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
import Link from "next/link";
import Cookies from 'js-cookie';
import Urlconfig from "@/lib/config";
import { useState, useEffect } from "react";
import { fetch_new_access } from "@/lib/csrf";

export default function Component() {
  const [accommodationCount, setAccommodationCount] = useState(0);
  const [TourOperatorCount, setTourOperatorCount] = useState(0);
  const [ArtisanlCount, setArtisanalCount] = useState(0);

  useEffect(() => {
    // Verification Cookies
    const verifyCookies = async () => {
      const cookies = Cookies.get("refresh_token");

      if (!cookies) {
        window.location.href = `${Urlconfig.adminUrl}/`;
      }
    };

    // Recuperation numbre d'accomodation
    const fetch_AccommodationCount = async () => {
      try {
        const new_access = await fetch_new_access();
        const response = await fetch(`${Urlconfig.apiBaseUrl}/api/hebergement/get-count-hebergement/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${new_access}`, //Authorization token a partir access token
          },
        });

        const data = await response.json();
        // console.log('Data from server:', data);
        setAccommodationCount(data.count);
      } catch (error) {
        console.error('Error fetching accommodation count:', error);
      }
    };

    const fetch_TourOperatorCount = async () => {
      try {
        const new_access = await fetch_new_access();
        const response = await fetch(`${Urlconfig.apiBaseUrl}/api/tour-operateurs/get_count_operateur/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${new_access}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch tour operator count. Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log('Data from server:', data);
        setTourOperatorCount(data.count);
      } catch (error) {
        console.error('Error fetching tour operator count:', error);
      }
    };


    const fetch_ArtisanalCount = async () => {
      try {
        const new_access = await fetch_new_access();
        const response = await fetch(`${Urlconfig.apiBaseUrl}/api/artisanal/artisanats/count/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${new_access}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch tour operator count. Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log('Data from server:', data);
        setArtisanalCount(data.count);
      } catch (error) {
        console.error('Error fetching tour operator count:', error);
      }
    };

    verifyCookies();
    fetch_AccommodationCount();
    fetch_TourOperatorCount();
    fetch_ArtisanalCount();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Navadmin
        mess={""}
        dash="bg-accent"
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
            <Link href="/admin/hotel">
              <Card className="hover:bg-slate-200 transition-all">
                <CardHeader>
                  <CardTitle>Accommodation</CardTitle>
                  <CardDescription>Registered accommodation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold">{accommodationCount}</div>
                    <HotelIcon className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/admin/operateur">
              <Card className="hover:bg-slate-200 transition-all">
                <CardHeader>
                  <CardTitle>Tour Operator</CardTitle>
                  <CardDescription>Registered Tour Operator</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold">{TourOperatorCount}</div>
                    <CompassIcon className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/admin/craft">
              <Card className="hover:bg-slate-200 transition-all">
                <CardHeader>
                  <CardTitle>Crafts</CardTitle>
                  <CardDescription>Registered Crafts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold">{ArtisanlCount}</div>
                    <BriefcaseIcon className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/admin/client">
              <Card className="hover:bg-slate-200 transition-all">
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
            </Link>
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
                  Hotel customer signed in over the last 6 months.
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
