import React from "react";

import Link from "next/link";
import {
  BriefcaseIcon,
  CompassIcon,
  HotelIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UsersIcon,
} from "./icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface navigation {
  dash: String;
  hotels: String;
  craft: String;
  tour: String;
  client: String;
}

const Navadmin = (nav: navigation) => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            prefetch={false}
          >
            <HotelIcon className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Hotel</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/dashboard"
                className={
                  "flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 " +
                  nav.dash
                }
                prefetch={false}
              >
                <LayoutDashboardIcon className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/hotel/show"
                className={
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 " +
                  nav.hotels
                }
                prefetch={false}
              >
                <HotelIcon className="h-5 w-5" />
                <span className="sr-only">Hotels</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Hotels</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                prefetch={false}
              >
                <BriefcaseIcon className="h-5 w-5" />
                <span className="sr-only">Crafts</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Crafts</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                prefetch={false}
              >
                <CompassIcon className="h-5 w-5" />
                <span className="sr-only">Tours operator</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Tours operator</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                prefetch={false}
              >
                <UsersIcon className="h-5 w-5" />
                <span className="sr-only">Clients</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Clients</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                prefetch={false}
              >
                <SettingsIcon className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default Navadmin;
