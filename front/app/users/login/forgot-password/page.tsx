// components/ForgotPasswordForm.tsx

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

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const route = useRouter();

  const sendPasswordResetEmail = async (email: any) => {
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

      if (!response.ok) {
        throw new Error("Failed to send password reset email.");
      }

      toast.success("Password reset email sent. Please check your inbox.");
      route.push('/users/login/forgot-password/verif');
    } catch (error) {
      toast.error("Failed to send password reset email. Please try again later.");
    }
  };

  const handlePasswordResetRequest = async (e: any) => {
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

      if (!result.exists) {
        toast.info(
          <>
            Email does not exist. <Link href="/users/register">Register here</Link>.
          </>
        );
      } else {
        await sendPasswordResetEmail(email);
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
            <form className="flex-1 p-8" onSubmit={handlePasswordResetRequest}>
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Reset your password
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Enter your email to reset your password
              </p>
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
                  Reset Password
                </Button>
              </div>
              <p className="text-center text-sm mt-4">
                Remembered your password?{" "}
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
