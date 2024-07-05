import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import hotello from "../../../public/hotello.png";
import { MenuIcon } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import chrome from "../../../public/chercher.png";
import Schema1 from "../../../public/asset-login/Beautiful hotel insights details.png";
import Schema2 from "../../../public/asset-login/Breakfast on a wooden table with a natural view.png";
import Schema3 from "../../../public/asset-login/Hand pressing receptionist's bell.png";
import Schema4 from "../../../public/asset-login/Hotel lobby.png";
export default function Component() {
  return (
    <div className="min-h-screen bg-[#d8e7e6] flex flex-col items-center">
      <header className="w-full bg-[#d8e7e6] py-2 md:py-2 lg:py-2">
        <div className=" container mx-auto flex flex-col items-center space-y-4 px-4 md:flex-row md:justify-between md:space-y-0">
          <div className="flex items-center max-sm:hidden">
            <Image src={hotello} alt="Logo" className="h-20 w-20" />
          </div>
          <div className="md:hidden">
            <Sheet>
              <div className="max-sm:flex max-sm:flex-row">
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MenuIcon className="w-6 h-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80vw] bg-[#d8e7e6]">
                  <div className="flex items-center ">
                    <Image src={hotello} alt="Logo" className="h-20 w-20" />
                  </div>
                  <nav className="flex flex-col items-start space-y-4 p-4">
                    <a href="#" className="text-lg font-medium">
                      Home
                    </a>
                    <a href="#" className="text-lg font-medium">
                      Accommodation
                    </a>
                    <a href="#" className="text-lg font-medium">
                      Handicraft
                    </a>
                    <a href="#" className="text-lg font-medium">
                      Tour
                    </a>
                    <a href="#" className="text-lg font-medium">
                      About us
                    </a>
                    <div className="flex gap-5">
                      <Button className="bg-white text-black">Login</Button>
                      <Button className="bg-[#305555]">Register</Button>
                    </div>
                  </nav>
                </SheetContent>
              </div>
            </Sheet>
          </div>
          <nav className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-6 lg:space-x-8 max-sm:hidden md:flex">
            <a href="#" className="text-sm md:text-sm lg:text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-sm md:text-sm lg:text-sm font-medium">
              Accommodation
            </a>
            <a href="#" className="text-sm md:text-sm lg:text-sm font-medium">
              Handicraft
            </a>
            <a href="#" className="text-sm md:text-sm lg:text-sm font-medium">
              Tour
            </a>
            <a href="#" className="text-sm md:text-sm lg:text-sm font-medium">
              About us
            </a>
          </nav>
          <div className="flex space-x-4 max-sm:hidden">
            <Button className="bg-white text-black">Login</Button>
            <Button className="bg-[#305555]">Register</Button>
          </div>
        </div>
      </header>
      <div className="px-10">
        <Card className=" flex flex-col md:flex-row mt-8 bg-white shadow-lg py-4 rounded-none">
          <CardContent className="flex-1 p-8 bg-[#3d5a5b] text-white mx-10 max-sm:hidden">
            <div className="flex items-center justify-center gap-2">
              <Image
                src={Schema3}
                alt="Image 1"
                width={60}
                height={40}
                className="col-span-1  aspect-[4/10]"
              />
              <Image
                src={Schema4}
                alt="Image 2"
                width={60}
                height={40}
                className=" mt-20 aspect-[4/10]"
              />
              <Image
                src={Schema2}
                alt="Image 3"
                width={60}
                height={40}
                className=" mt-20 max-h-30 aspect-[4/10]"
              />
              <Image
                src={Schema1}
                alt="Image 4"
                width={60}
                height={40}
                className="aspect-[4/10]"
              />
            </div>
            <p className="text-center italic text-lg mb-4 mt-10">
              Lorem ipsum dolor emet si tu acquiem perma!
            </p>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              explicabo cupiditate laboriosam blanditiis recusandae iste,
              nesciunt asperiores alias ratione.
            </p>
          </CardContent>
          <div className="flex-1 p-8">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Login to your account
            </h2>
            <p className="text-muted-foreground mb-6 text-center">
              Welcome back! Please enter your details
            </p>
            <Button
              variant="outline"
              className="w-full mb-4 flex items-center justify-center gap-5 rounded-none"
            >
              <Image src={chrome} width={20} height={20} alt="chrome" />
              <span>Login with Google</span>
            </Button>
            <div className="flex items-center mb-4">
              <hr className="flex-1" />
              <span className="px-2 text-sm text-muted-foreground">OR</span>
              <hr className="flex-1" />
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="rounded-none"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  className="rounded-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-muted-foreground">
                  Forgotten password?
                </a>
              </div>
              <Button className="w-full rounded-none bg-[#305555]">
                Login
              </Button>
            </div>
            <p className="text-center text-sm mt-4">
              Don t have any account yet?{" "}
              <a href="#" className="font-semibold">
                Register
              </a>
            </p>
          </div>
        </Card>
      </div>
      <footer className="w-full py-4 bg-[#d8e7e6] text-center text-sm">
        <p>Copyright 2024 - All rights reserved</p>
        <a href="#" className="text-muted-foreground">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}
