"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import chrome from "../../../public/chercher.png";
import Schema1 from "../../../public/asset-login/Beautiful hotel insights details.png";
import Schema2 from "../../../public/asset-login/Breakfast on a wooden table with a natural view.png";
import Schema3 from "../../../public/asset-login/Hand pressing receptionist's bell.png";
import Schema4 from "../../../public/asset-login/Hotel lobby.png";
import UserHeader from "@/components/UserHeader";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import config from "../../../lib/config";
import { getCsrfFromToken } from "@/lib/csrf";
import Router from "next/router";

const setCookieWithExpiry = (name: any, value: any, minutes: any) => {
  Cookies.set(name, value, { expires: (1 / 24 / 60) * minutes });
};

export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const csrfToken = await getCsrfFromToken();
      const response = await fetch(`${config.apiBaseUrl}/api/info/client/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          toast.error("Email incorrect ou n'existe pas", { autoClose: 5000 });
        } else if (response.status === 401) {
          toast.error("Mot de passe incorrect", { autoClose: 5000 });
        } else {
          toast.error("Erreur de connexion", { autoClose: 5000 });
        }
        return;
      }

      // Successful login
      setCookieWithExpiry("csrfToken", csrfToken, 5);
      setCookieWithExpiry("access", data.access, 5);
      Cookies.set("refresh", data.refresh, { expires: 1 });

      toast.success("Connexion réussie", { autoClose: 2000 });
      setIsLoggedIn(true); // Update login state

      // Redirection vers la page d'accueil après une connexion réussie
      Router.push("/users/register"); // Use Next.js Router for navigation
    } catch (error) {
      toast.error("Erreur de connexion", { autoClose: 2000 });
    }
  };

  return (
    <>
      <ToastContainer position="bottom-right" />
      <UserHeader />
      <div className="flex flex-col items-center">
        <div className="px-10">
          <Card className="flex flex-col md:flex-row mt-8 bg-white shadow-lg py-4 rounded-none">
            <CardContent className="flex-1 p-8 bg-[#3d5a5b] text-white mx-10 max-sm:hidden">
              <div className="flex items-center justify-center gap-2">
                <Image src={Schema3} alt="Image 1" width={60} height={40} className="col-span-1 aspect-[4/10]" />
                <Image src={Schema4} alt="Image 2" width={60} height={40} className="mt-20 aspect-[4/10]" />
                <Image src={Schema2} alt="Image 3" width={60} height={40} className="mt-20 max-h-30 aspect-[4/10]" />
                <Image src={Schema1} alt="Image 4" width={60} height={40} className="aspect-[4/10]" />
              </div>
              <p className="text-center italic text-lg mb-4 mt-10">
                Lorem ipsum dolor emet si tu acquiem perma!
              </p>
              <p className="text-center text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione.
              </p>
            </CardContent>
            <form className="flex-1 p-8" onSubmit={handleLogin}>
              <h2 className="text-2xl font-semibold mb-2 text-center">Login to your account</h2>
              <p className="text-muted-foreground mb-6 text-center">
                Welcome back! Please enter your details
              </p>
              <Button variant="outline" type="button" className="w-full mb-4 flex items-center justify-center gap-5 rounded-none">
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                <Button className="w-full rounded-none bg-[#305555]" type="submit">
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
