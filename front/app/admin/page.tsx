"use client";
import { Button } from "@/components/ui/button";
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

import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from '../../lib/useAuth';


export default function Component() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // function LoginPage() {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  //   const { setAuthTokens } = useAuth();
  //   const router = useRouter();

  //   const handleLogin = async () => {
  //     try {
  //       const response = await axios.post('${config.apiBaseUrl}/api/token/', {
  //         username,
  //         password,
  //       });

  //       const { access, refresh } = response.data;
  //       setAuthTokens({ access, refresh });

  //       // Rediriger l'utilisateur vers une autre page après la connexion
  //       router.push('/dashboard');
  //     } catch (error) {
  //       console.error('Error logging in:', error);
  //     }
  //   };
  // }

  const fetchData = async () => {
    const accessToken = Cookies.get('access_token');

    if (!accessToken) {
      // Gérer le cas où l'access_token n'est pas disponible (utilisateur non authentifié)
      console.error('No access token available');
      return;
    }

    try {
      const response = await fetch('${config.apiBaseUrl}/api/token/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();


  return (
    <>
      <ToastContainer position="bottom-right" />

      <div className="flex items-center mt-16">
        <div className="px-10">
          <Card className=" flex flex-col md:flex-row mt-8 bg-white shadow-lg py-4 rounded-none">
            <CardContent className="flex-1 p-8 bg-[#3d5a5b] text-white mx-10 max-sm:hidden pt-16">
              <div className="flex items-center justify-center">
                <Image src={logo} alt="Image 1" width={150} height={150} style={{ filter: 'brightness(1)' }} />
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
                console.log(username);
                console.log(password);

                const resolveAfter3Sec = new Promise((resolve) =>
                  setTimeout(resolve, 2000)
                );

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
                Login to your account Administrator
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Welcome back! Please enter your details
              </p>

              <div className="space-y-4 mt-8">
                <div>
                  <Label htmlFor="text">Username</Label>
                  <Input
                    id="username"
                    placeholder="Enter your username"
                    type="username"
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="remember"></Label>
                  </div>
                  <a href="#" className="text-sm text-muted-foreground">

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
                {" "}
                <Link href="/users/register" className="font-semibold">

                </Link>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}
