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

export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  return (
    <>
      <ToastContainer position="bottom-right" />
      <UserHeader />
      <div className="  flex flex-col items-center">
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
            <form
              className="flex-1 p-8"
              onSubmit={async (e) => {
                e.preventDefault();
                // console.log(email);
                // console.log(password);
                // console.log(password1);
                const resolveAfter3Sec = new Promise((resolve) =>
                  setTimeout(resolve, 2000)
                );

                if (password !== password1) {
                  toast.error("Les mots de passe ne correspondent pas", {
                    autoClose: 3000,
                  });
                  return;
                }

                // TEST
                // const api = fetch(
                //   "http://192.168.88.56:8000/api/get-csrf-token/",
                //   {
                //     method: "get",
                //     headers: {
                //       "Content-Type": "application/json",
                //     },
                //     // body: JSON.stringify({ email, password }),
                //   }
                // );

                const api = fetch("http://127.0.0.1:8000/api/accounts/client/create/", {
                  method: "post",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ email: email, password: password }),
                });

                api.then(async (response) => {
                  if (!response.ok) {
                    const errorData = await response.json();
                    if (errorData.email) {
                      toast.error(errorData.email[0], {
                        autoClose: 5000,
                      });
                    }
                    if (errorData.password) {
                      toast.error(errorData.password[0], {
                        autoClose: 5000,
                      });
                    }
                    // throw new Error('API error: ' + JSON.stringify(errorData));
                  }
                  return response.json();
                })
                // .catch(error => {
                //   console.error('There was a problem with the fetch operation:', error);
                //   toast.error("Une erreur s'est produite lors de l'inscription: " + error.message, {
                //     autoClose: 5000,
                //   });
                // });

                const data = (await api).json();
                console.log(
                  data.then((data) => {
                    console.log(JSON.stringify(data, null, 1));
                    data.headers["set-cookie"][0];
                  })
                );
                toast.promise(
                  api,
                  {
                    pending: "Connexion au serveur",
                    success: "Inscription reussite",
                    error: "erreur de Connexion",
                  },
                  { autoClose: 2000 }
                );
              }
              }
            >
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Sign Up to your account
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Welcome ! Please enter your details
              </p>
              <Button
                variant="outline"
                type="button"
                className="w-full mb-4 flex items-center justify-center gap-5 rounded-none"
              >
                <Image src={chrome} width={20} height={20} alt="chrome" />
                <span>Sign up with Google</span>
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="rounded-none"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="rounded-none"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Confirm Password</Label>
                  <Input
                    id="password1"
                    placeholder="Confirm your password"
                    type="password"
                    required
                    onChange={(e) => {
                      setPassword1(e.target.value);
                    }}
                    className="rounded-none"
                  />
                </div>
                <Button
                  className="w-full rounded-none bg-[#305555]"
                  type="submit"
                >
                  Register
                </Button>
              </div>
              <p className="text-center text-sm mt-4">
                I have an account{" "}
                <Link href="/users/login" className="font-semibold">
                  Login
                </Link>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}


