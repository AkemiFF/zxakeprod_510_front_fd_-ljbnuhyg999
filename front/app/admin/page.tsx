"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import chrome from "../../public/chercher.png";
import logo from "../../public/logo-aftrip.png";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <ToastContainer position="bottom-right" />

      <div className="  flex flex-col items-center">
        <div className="px-10">
          <Card className=" flex flex-col md:flex-row mt-8 bg-white shadow-lg py-4 rounded-none">
            <CardContent className="flex-1 p-8 bg-[#3d5a5b] text-white mx-10 max-sm:hidden pt-16">
              <div className="flex items-center justify-center">
                <Image src={logo} alt="Image 1" width={150} height={150} style={{ filter: 'brightness(1)' }}/>
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
            <form
              className="flex-1 p-8"
              onSubmit={async (e) => {
                e.preventDefault();
                console.log(email);
                console.log(password);

                const resolveAfter3Sec = new Promise((resolve) =>
                  setTimeout(resolve, 2000)
                );

                // Daniel 08/07/24
                // const response = await fetch("http://127.0.0.1:8000/api/accounts/client/login/", {
                //   method: "POST",
                //   headers: {
                //     "Content-Type": "application/json",
                //   },
                //   body: JSON.stringify({ email, password }),
                // });
                // const data = await response.json();
                // console.log(data);

                toast.promise(
                  resolveAfter3Sec,
                  {
                    pending: "Connexion au serveur",
                    success: "Connexion reussite",
                    error: "Erreur de l'inscription",
                  },
                  { autoClose: 2000 }
                );
              }}
            >
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Login to your account
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Welcome back! Please enter your details
              </p>
              <Button
                variant="outline"
                type="button"
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
                    required
                    className="rounded-none"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    required
                    className="rounded-none"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
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
                <Button
                  className="w-full rounded-none bg-[#305555]"
                  type="submit"
                >
                  Login
                </Button>
              </div>
              <p className="text-center text-sm mt-4">
                Don t have any account yet?{" "}
                <Link href="/users/register" className="font-semibold">
                  Register
                </Link>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}
