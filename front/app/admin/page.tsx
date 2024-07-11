"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Urlconfig from "@/lib/config";

import chrome from "../../public/chercher.png"; // Note: Not used in the code
import logo from "../../public/logo-aftrip.png";

export default function Component() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const fetchData = async (username: string, password: string) => {
    try {
      const response = await fetch(`${Urlconfig.apiBaseUrl}/api/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      // console.log(data);

      // Store tokens in cookies
      Cookies.set('access_token', data.access);
      Cookies.set('refresh_token', data.refresh);

      // Verify if the user is an admin
      checkAdminStatus(data.access);

    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Erreur de la connexion');
    }
  };

  const checkAdminStatus = async (accessToken: any) => {
    try {
      const response = await fetch(`${Urlconfig.apiBaseUrl}/api/accounts/check-admin/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to verify admin status');
      }

      const data = await response.json();
      // console.log(data);

      // If the user is an admin, redirect to the admin page
      if (data.is_admin) {
        router.push("/admin/dashboard");
      } else {
        toast.error('Vous n\'avez pas les privilèges d\'administrateur');
      }

    } catch (error) {
      console.error('Error verifying admin status:', error);
      toast.error('Erreur lors de la vérification du statut d\'administrateur');
    }
  };

  return (
    <>
      <ToastContainer position="bottom-right" />

      <div className="flex items-center mt-16">
        <div className="px-10">
          <Card className="flex flex-col md:flex-row mt-8 bg-white shadow-lg py-4 rounded-none">
            <CardContent className="flex-1 p-8 bg-[#3d5a5b] text-white mx-10 max-sm:hidden pt-16">
              <div className="flex items-center justify-center">
                <Image src={logo} alt="Logo" width={150} height={150} style={{ filter: 'brightness(1)' }} />
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
                await fetchData(username, password);

                const resolveAfter3Sec = new Promise((resolve) =>
                  setTimeout(resolve, 2000)
                );

                toast.promise(
                  resolveAfter3Sec,
                  {
                    pending: "Connexion au serveur",
                    // success: "Connexion réussie",
                    error: "Erreur de la connexion",
                  },
                  { autoClose: 2000 }
                );
              }}
            >
              <div className="space-y-4 mt-8">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Enter your username"
                    type="text"
                    required
                    className="rounded-none"
                    onChange={(e) => {
                      setUsername(e.target.value);
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
                <Button
                  className="w-full rounded-none bg-[#305555]"
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}
