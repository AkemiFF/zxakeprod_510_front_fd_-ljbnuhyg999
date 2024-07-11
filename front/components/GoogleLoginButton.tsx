// components/GoogleLoginButton.tsx
import { signIn } from "next-auth/react";

const GoogleLoginButton = () => {
    const handleSignIn = () => {
        signIn("google");
    };

    return (

        <button onClick={handleSignIn}>
            <SessionProvider>

                {/* <Button */}
                variant="outline"
                type="button"
                className="w-full mb-4 flex items-center justify-center gap-5 rounded-none"
                >

                <Image src={chrome} width={20} height={20} alt="chrome" />
                <GoogleLoginButton />
                {/* <span>Sign up with Google</span> */}

                {/* <GoogleSignupButton /> */}

            </SessionProvider>
        </Button>

    );
};

export default GoogleLoginButton;
