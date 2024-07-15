// components/RegistrationForm.tsx

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import UserHeader from "@/components/UserHeader";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import GoogleSignupButton from "@/components/GoogleSignupButton";
import CustomCard from "@/components/CustomCard";
import Urlconfig from "@/lib/config";
import { getCsrfTokenDirect } from "@/lib/csrf";



export default function Component() {
  const [email, setEmail] = useState("");
  const route = useRouter();

  const sendVerificationEmail = async (email: any) => {
    try {
      const csrfToken = await getCsrfTokenDirect();
      const response = await fetch(`${Urlconfig.apiBaseUrl}/api/accounts/send-verification-code/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'X-CSRFToken': csrfToken,

        },
        body: JSON.stringify({ email }),
      });
      // const data = response.json()


      if (!response.ok) {
        throw new Error("Failed to send verification email.");
      }

      route.push('/users/register/verify-email');
    } catch (error) {
      toast.error("Failed to send verification email. Please try again later.");
    }
  };

  const checkEmailExists = async (e: any) => {
    e.preventDefault();
    const csrfToken = await getCsrfTokenDirect();
    localStorage.setItem("email_user", email);


    try {
      const linkurl = `${Urlconfig.apiBaseUrl}/api/accounts/client/check-email/`;


      const response = await fetch(linkurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({ email }),
      });


      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const result = await response.json();

      if (result.exists) {
        toast.info(
          <>
            Email already exists. <Link href="/users/login">Login here</Link>.
          </>
        );
      } else {
        await sendVerificationEmail(email);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <ToastContainer position="bottom-right" />
      <UserHeader />
      <div className="flex flex-col items-center">
        <div className="px-10">
          <Card className="flex flex-col md:flex-row mt-8 bg-white shadow-lg py-4 rounded-none">
            <CustomCard />
            <form className="flex-1 p-8" onSubmit={checkEmailExists}>
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Sign Up to your account
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Welcome! Please enter your details
              </p>
              <div>
                <GoogleSignupButton />
              </div>
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
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-none"
                  />
                </div>
                <Button className="w-full rounded-none bg-[#305555]" type="submit">
                  Continue
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
