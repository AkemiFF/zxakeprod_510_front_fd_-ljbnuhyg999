// components/GoogleLoginButton.tsx
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import chrome from "../public/chercher.png";
import Cookies from "js-cookie";

export default function GoogleLoginButton() {
    const firebaseConfig = {
        apiKey: "AIzaSyDx_dviqCLZGqXXdLDF5EFjdOJiXROc5mo",
        authDomain: "test-ce224.firebaseapp.com",
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

                console.log("info_user: ", user);
                localStorage.setItem("user_register_info", JSON.stringify(user))
                window.location.href = "/users/register/create-password";

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            }
            );



    };

    return (
        <Button onClick={handleSignIn}
            variant="outline"
            type="button"
            className="w-full mb-4 flex items-center justify-center gap-5 rounded-none"
        >

            <Image src={chrome} width={20} height={20} alt="chrome" />
            Log in with Google
        </Button>
    );
};

