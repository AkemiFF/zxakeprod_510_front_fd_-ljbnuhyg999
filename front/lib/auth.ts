// lib/auth.ts (Côté serveur)
import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Connexion",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "exemple@exemple.com" },
                password: { label: "Mot de passe", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) return null;
                // Logique de vérification de l'utilisateur
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
};

export async function loginEstRequisServeur() {
    const session = await getServerSession(authConfig);
    if (!session) redirect("/");
}
