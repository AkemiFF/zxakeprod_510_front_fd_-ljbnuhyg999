import { useSession, signIn, signOut } from 'next-auth/react';

export default function GoogleLoginButton() {
    const { data: session } = useSession();

    const handleLogin = () => {
        signIn('google');
    };

    const handleLogout = () => {
        signOut();
    };

    return (
        <div>
            {session ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Sign Up with Google</button>
            )}
        </div>
    );
}
