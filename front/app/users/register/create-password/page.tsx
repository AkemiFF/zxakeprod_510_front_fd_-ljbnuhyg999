"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import config from "../../../../lib/config"
import { Card, CardContent } from "@/components/ui/card";
import chrome from "../../../../public/chercher.png";
import Schema1 from "../../../../public/asset-login/Beautiful hotel insights details.png";
import Schema2 from "../../../../public/asset-login/Breakfast on a wooden table with a natural view.png";
import Schema3 from "../../../../public/asset-login/Hand pressing receptionist's bell.png";
import Schema4 from "../../../../public/asset-login/Hotel lobby.png";
import UserHeader from "@/components/UserHeader";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie'
import { getCsrfFromToken, getCsrfToken } from "@/lib/csrf";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import { SessionProvider, signIn } from 'next-auth/react';
import GoogleSignupButton from "@/components/GoogleSignupButton";
import { validatePassword } from "@/lib/verify";
export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    const info = localStorage.getItem("user_register_info");
    if (info) {
      setUserInfo(JSON.parse(info));
    }
  }, []);

  interface ProviderData {
    providerId: string;
    uid: string;
    phoneNumber?: string;
  }

  interface UserInfo {
    displayName: string;
    email: string;
    photoURL: string;
    providerData: ProviderData[];
  }

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

                const resolveAfter3Sec = new Promise((resolve) =>
                  setTimeout(resolve, 2000)
                );

                if (password !== password1) {
                  toast.error("Les mots de passe ne correspondent pas", {
                    autoClose: 3000,
                  });
                  return;
                }

                const createClient = async (password: string) => {

                  try {
                    const csrfToken = await getCsrfFromToken();
                    const response = await fetch(`${config.apiBaseUrl}api/accounts/client/create/emailinfo/`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        // 'X-CSRFToken': csrfToken,
                      },

                      body: JSON.stringify({
                        username: userInfo?.displayName ?? '',
                        email: userInfo?.email ?? '',
                        password: password,
                        emailProviderId: userInfo?.providerData[0]?.providerId ?? '',
                        emailProviderUid: userInfo?.providerData[0]?.uid ?? '',
                        emailPhotoUrl: userInfo?.photoURL ?? '',
                      }),
                    });

                    if (!response.ok) {
                      throw new Error('Failed to create client');
                    }

                  } catch (error) {
                    throw error;
                  }
                };
                if (validatePassword(password)) {
                  const api = createClient(password)

                  api.then(async (response) => {
                    toast.promise(
                      api,
                      {
                        pending: "Connexion au serveur",
                        success: "Inscription reussite",
                        error: "Vous avez déjà un compte",
                      },
                      { autoClose: 3000 }
                    );
                  })
                } else {
                  toast.error("Le mot de passe doit contenir : Lettre Majuscule, Minuscule, Chiffre");
                }

              }
              }
            >
              <h2 className="text-2xl font-semibold mb-2 text-center">
                You are almost there
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Create a strong password
              </p>

              <div className="space-y-4">

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
      </div >
    </>
  );
}


