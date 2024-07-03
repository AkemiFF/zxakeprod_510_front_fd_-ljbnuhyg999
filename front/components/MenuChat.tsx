import React from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "./icons";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import AddChat from "./AddChat";

const MenuChat = () => {
  return (
    <div className="hidden w-64 flex-col border-r bg-white md:flex bg-scroll">
      <div className="sticky top-0 z-10 flex h-14 items-center justify-between border-b px-4 bg-white">
        <div className="text-lg font-semibold">Chats</div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <PlusIcon className="h-5 w-5" />
              <span className="sr-only">New Chat</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add Discussion</SheetTitle>
              <SheetDescription>
                Select or research a person to hae a Discussion
              </SheetDescription>
            </SheetHeader>
            <div className="flex gap-4 mt-5">
              <AddChat />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex-1 overflow-auto ">
        <nav className="divide-y">
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors"
            prefetch={false}
          >
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="flex-1 truncate">
              <div className="font-medium">Acme Inc</div>
              <div className="text-sm text-muted-foreground">
                Hey there! how are you doing
              </div>
            </div>
            <div className="text-xs text-muted-foreground">2:39 PM</div>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors"
            prefetch={false}
          >
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="flex-1 truncate">
              <div className="font-medium">Acme Inc</div>
              <div className="text-sm text-muted-foreground">
                Hey there! How is it going?
              </div>
            </div>
            <div className="text-xs text-muted-foreground">2:39 PM</div>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors"
            prefetch={false}
          >
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="flex-1 truncate">
              <div className="font-medium">Acme Inc</div>
              <div className="text-sm text-muted-foreground">
                Hey there! How is it going?
              </div>
            </div>

            <div className="text-xs text-muted-foreground">2:39 PM</div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MenuChat;
