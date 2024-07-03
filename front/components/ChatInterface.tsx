/**
 * v0 by Vercel.
 * @see https://v0.dev/t/y1QxU9FY8BC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MoveHorizontalIcon, PhoneIcon, SendIcon, VideoIcon } from "./icons";
import MenuChat from "./MenuChat";

export default function Component() {
  return (
    <div className="flex h-screen w-full bg-background">
      <MenuChat />
      <div className="flex flex-col w-full">
        <header className="flex h-14 items-center border-b bg-muted/40 px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-xs text-muted-foreground">Online</div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-4">
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 rounded-md bg-muted p-3 text-sm">
                <p>Hey, how is it going?</p>
                <div className="mt-2 text-xs text-black">2:30 PM</div>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="flex-1 rounded-md bg-primary p-3 text-sm text-primary-foreground">
                <p>Pretty good, just working on a new project.</p>
                <div className="mt-2 text-xs text-white">2:32 PM</div>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 rounded-md bg-muted p-3 text-sm">
                <p>That s great, let me know if you need any help!</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  2:35 PM
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="flex-1 rounded-md bg-primary p-3 text-sm text-primary-foreground">
                <p>Will do, thanks!</p>
                <div className="mt-2 text-xs text-white">2:36 PM</div>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 bg-background px-4 py-2">
          <div className="relative">
            <Textarea
              placeholder="Type your message..."
              className="min-h-[48px] rounded-2xl resize-none p-4 pr-16 w-full"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute w-8 h-8 top-5 right-3"
            >
              <SendIcon className="w-4 h-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
