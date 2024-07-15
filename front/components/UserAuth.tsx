// components/AuthButtons.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { Button } from "@/components/ui/button";  // Assurez-vous d'importer votre composant Button
import Image from "next/image";  // Assurez-vous d'importer votre composant Image
import user from "../public/instagram.png";
import {
    DropdownMenuSeparator,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Urlconfig from '@/lib/config';
const UserAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userProfile, setUserProfile] = useState<string | null>(null);
    const [UserName, setUsername] = useState<string | null>(null);


    useEffect(() => {
        const accessToken = Cookies.get('access_token');
        const refreshToken = Cookies.get('refresh_token');
        const profile = Cookies.get('profile_user');
        const username = Cookies.get('username');

        const checkRefreshToken = async () => {
            try {
                const response = await fetch(`${Urlconfig.apiBaseUrl}/api/token/refresh/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ refresh: refreshToken })
                });

                if (response.ok) {
                    const data = await response.json();
                    Cookies.set('access_token', data.access, { expires: 1, secure: true, sameSite: 'Strict' });
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                    Cookies.remove('access_token');
                    Cookies.remove('refresh_token');
                }
            } catch (error) {
                console.error('Error checking refresh token:', error);
                setIsLoggedIn(false);
                Cookies.remove('access_token');
                Cookies.remove('refresh_token');
            }
        };
        if (refreshToken) {
            checkRefreshToken();
        } else {
            setIsLoggedIn(false);
        }
        if (profile) {
            setUserProfile(profile);
        }
        if (username) {
            setUsername(username);
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        Cookies.remove('csrfToken');
        Cookies.remove('profile_user');
        Cookies.remove('username');
        localStorage.removeItem("user_register_info")

        setIsLoggedIn(false);
        // window.location.href = '/';
    };

    return (
        <div>
            {isLoggedIn ? (
                <div className="flex mr-5">
                    <div className="flex gap-5">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className=" rounded-full"
                                >
                                    <Image
                                        src={userProfile || user}
                                        width={36}
                                        height={36}
                                        alt="Avatar"
                                        className="overflow-hidden rounded-full"
                                    />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                                {/* <DropdownMenuSeparator /> */}
                                <DropdownMenuLabel>
                                    {UserName || "Unknown"}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Cart</DropdownMenuItem>
                                <DropdownMenuItem>Setting</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            ) : (
                <div className="flex gap-5">
                    <Link href="/users/login">
                        <Button className="bg-white text-black hover:text-white">
                            Login
                        </Button>
                    </Link>
                    <Link href="/users/register">
                        <Button className="bg-[#305555] hover:bg-[#305555] hover:opacity-80">
                            Register
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserAuth;
