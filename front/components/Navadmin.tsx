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
import {
  ArchiveIcon,
  BellIcon,
  ChatBubbleIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";

interface navigation {
  dash: String;
  hotels: String;
  craft: String;
  tour: String;
  client: String;
  admin: String;
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
                  "flex h-9 w-9 items-center justify-center rounded-lg  text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 " +
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
                href="/admin/message"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                prefetch={false}
              >
                <div className="relative inline-block">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ChatBubbleIcon className="h-5 w-5" />
                    <span className="sr-only">Message</span>
                  </Button>
                  <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    2
                  </div>
                </div>
                <span className="sr-only">Message</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Message</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/hotel"
                className={
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 " +
                  nav.hotels
                }
                prefetch={false}
              >
                <HotelIcon className="h-5 w-5" />
                <span className="sr-only">accommodation</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">accommodation</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/craft"
                className={
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 " +
                  nav.craft
                }
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
                href="/admin/operateur"
                className={
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 " +
                  nav.tour
                }
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
                href="/admin/client"
                className={
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 " +
                  nav.client
                }
                prefetch={false}
              >
                <UsersIcon className="h-5 w-5" />
                <span className="sr-only">Clients</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Clients</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/administrator"
                className={
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 " +
                  nav.admin
                }
                prefetch={false}
              >
                <PersonIcon className="h-5 w-5" />
                <span className="sr-only">Administrator</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Administrator</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/notification"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                prefetch={false}
              >
                <div className="relative inline-block">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <BellIcon className="h-6 w-6" />
                    <span className="sr-only">Notifications</span>
                  </Button>
                  <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    3
                  </div>
                </div>
                <span className="sr-only">Notification</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Notification</TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
