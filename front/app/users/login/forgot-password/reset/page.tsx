// components/ResetPasswordForm.tsx

"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Urlconfig from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";
import UserHeader from "@/components/UserHeader";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCsrfTokenDirect } from "@/lib/csrf";
import { validatePassword } from "@/lib/verify";
import { useRouter } from "next/navigation";
import CustomCard from "@/components/CustomCard";

export default function ResetPasswordForm() {
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const csrfToken = await getCsrfTokenDirect();
        const email = localStorage.getItem("email_user");

        if (password !== password1) {
            toast.error("Les mots de passe ne correspondent pas", {
                autoClose: 3000,
            });
            return;
        }

        const resetPassword = async (password: string) => {
            try {
                const response = await fetch(`${Urlconfig.apiBaseUrl}/api/accounts/reset-password/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken,
                    },
                    body: JSON.stringify({ email, password }),
                });

                if (!response.ok) {
                    throw new Error("Failed to reset password.");
                }

                localStorage.removeItem("email_user");
                toast.success("Password reset successfully. Please log in.");
                router.push('/users/login');
            } catch (error: any) {
                toast.error('An error occurred: ' + error.message);
            }
        }

        if (validatePassword(password)) {
            resetPassword(password);
        } else {
            toast.error("Le mot de passe doit contenir : Lettre Majuscule, Minuscule, Chiffre");
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
                        <form className="flex-1 p-8" onSubmit={handleSubmit}>
                            <h2 className="text-2xl font-semibold mb-2 text-center">
                                Reset your password
                            </h2>
                            <p className="text-muted-foreground mb-6 text-center">
                                Create a new strong password
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="password">New Password</Label>
                                    <Input
                                        id="password"
                                        placeholder="Enter your new password"
                                        type="password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="rounded-none"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="password1">Confirm Password</Label>
                                    <Input
                                        id="password1"
                                        placeholder="Confirm your new password"
                                        type="password"
                                        required
                                        onChange={(e) => setPassword1(e.target.value)}
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
