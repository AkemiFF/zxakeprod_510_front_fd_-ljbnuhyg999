import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import chrome from "../public/chercher.png";
import Cookies from "js-cookie";
import React, { useEffect, useState } from 'react';
import { getCsrfTokenDirect } from "@/lib/csrf";
import Urlconfig from "@/lib/config";
import { toast } from "react-toastify";
import { userInfo } from "os";

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
const setCookieWithExpiry = (name: string, value: string, days: number, secure: boolean = true, sameSite: 'Strict' | 'Lax' | 'None' = 'Strict') => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    Cookies.set(name, value, {
        expires: date,
        secure: secure,
        sameSite: sameSite
    });
};


const verifyUserInfo = async (firebaseInfoUser: UserInfo, setIsLoggedIn: (value: boolean) => void) => {
    try {
        const csrfToken = await getCsrfTokenDirect();
        const response = await fetch(`${Urlconfig.apiBaseUrl}/api/accounts/client/loginwithemail/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "X-CSRFToken": csrfToken,
            },
            body: JSON.stringify({ email: firebaseInfoUser.email, emailProviderUid: firebaseInfoUser.providerData[0].uid }),
        });

        const data = await response.json();

        if (!response.ok) {
            if (response.status === 404) {
                toast.error("Email incorrect ou n'existe pas", { autoClose: 5000 });
            } else {
                toast.error("Erreur de connexion", { autoClose: 5000 });
            }
            return;
        }

        setCookieWithExpiry("csrfToken", csrfToken, 5);
        setCookieWithExpiry("access_token", data.access, 5);

        Cookies.set("refresh_token", data.refresh, { expires: 1, secure: true, sameSite: 'Strict' });

        const info = localStorage.getItem("user_register_info");
        if (info) {
            const parsedInfo = JSON.parse(info);
            Cookies.set("profile_user", parsedInfo.photoURL, { expires: 1, secure: true, sameSite: 'Strict' });
            Cookies.set("username", parsedInfo.displayName, { expires: 1, secure: true, sameSite: 'Strict' });
        }


        localStorage.removeItem("user_register_info");

        toast.success("Connexion réussie", { autoClose: 2000 });
        setIsLoggedIn(true);
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    } catch (error) {
        toast.error("Erreur de connexion", { autoClose: 2000 });
    }
};

export default function GoogleLoginButton() {
    const apikey = process.env.NEXT_PUBLIC_GOOGLE_API_FIREBASE as string;
    const auth_domain = process.env.NEXT_PUBLIC_GOOGLE_FIREBASE_AUTHDOMAIN as string;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>();

    const firebaseConfig = {
        apiKey: apikey,
        authDomain: auth_domain,
        projectId: "test-ce224",
        storageBucket: "test-ce224.appspot.com",
        messagingSenderId: "758626351874",
        appId: "1:758626351874:web:4e0e954eb74dde33c3a01b",
        measurementId: "G-9B4HNZLJ79"
    };

    const app = initializeApp(firebaseConfig);

    const handleSignIn = () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        const auth = getAuth(app);
        auth.languageCode = 'fr';
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
        });

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);

                if (credential) {
                    const token = credential.accessToken;
                }

                const user = result.user;
                localStorage.setItem("user_register_info", JSON.stringify(user));
                setUserInfo({
                    displayName: user.displayName || '',
                    email: user.email || '',
                    photoURL: user.photoURL || '',
                    providerData: user.providerData as ProviderData[]
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData?.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.error("Error Code: ", errorCode);
                console.error("Error Message: ", errorMessage);
                console.error("Email: ", email);
                console.error("Credential: ", credential);
            });
    };

    useEffect(() => {
        const info = localStorage.getItem("user_register_info");
        if (info) {
            setUserInfo(JSON.parse(info));
        }
    }, []);

    useEffect(() => {
        if (userInfo) {
            verifyUserInfo(userInfo, setIsLoggedIn);
        }
    }, [userInfo]);

    return (
        <Button
            onClick={handleSignIn}
            variant="outline"
            type="button"
            className="w-full mb-4 flex items-center justify-center gap-5 rounded-none"
        >
            <Image src={chrome} width={20} height={20} alt="chrome" />
            Log in with Google
        </Button>
    );
}
