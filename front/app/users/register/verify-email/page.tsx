"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Urlconfig from "@/lib/config"
import { Card, CardContent } from "@/components/ui/card";
import UserHeader from "@/components/UserHeader";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCsrfTokenDirect } from "@/lib/csrf";

import { useRouter } from "next/navigation";
import CustomCard from "@/components/CustomCard";
import Cookies from "js-cookie";

export default function Component() {
  const [code, setCode] = useState('');
  const router = useRouter();


  const handleSubmit = async (e: any) => {
    const csrfToken = await getCsrfTokenDirect();
    const email = localStorage.getItem("email_user");
    console.log(email)
    e.preventDefault();
    try {
      const response = await fetch(`${Urlconfig.apiBaseUrl}/api/accounts/verify-code/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();



      if (response.ok) {
        toast.success('Verification code is correct');
        router.push('/users/register/create-password-manual/');
      } else {
        toast.error(data.error || 'Verification code is incorrect');
      }
    } catch (error: any) {
      toast.error('An error occurred: ' + error.message);
    }
  };


  return (
    <>
      <ToastContainer position="bottom-right" />
      <UserHeader />
      <div className="  flex flex-col items-center">
        <div className="px-10">
          <Card className=" flex flex-col md:flex-row mt-8 bg-white shadow-lg py-4 rounded-none">
            <CustomCard />
            <div
              className="flex-1 p-8"
            >
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Sign Up to your account
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Please check your email
              </p>
              <div className="space-y-4">

                <div>
                  <Label htmlFor="code">Verify Email</Label>
                  <Input
                    id="code"
                    placeholder="Add email verification code"
                    type="number"
                    required
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                    className="rounded-none"
                  />
                </div>
                <Button
                  className="w-full rounded-none bg-[#305555]"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Continue
                </Button>
              </div>
              <p className="text-center text-sm mt-4">
                I have an account{" "}
                <Link href="/users/login" className="font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}


