import { useSession, signIn } from 'next-auth/react';

export default function GoogleLoginButton() {
    const { data: session } = useSession();

    const handleLogin = () => {
        signIn('google');
        // console.log("oyyy")
    };

    function handleLogout(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div>
            {session ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login with Google</button>
            )}
        </div>
    );
}
