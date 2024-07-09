// lib/auth.ts
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

export const authConfig: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,

};
console.log(process.env.GOOGLE_CLIENT_ID as string);
export async function loginEstRequisServeur() {
    const session = await getServerSession(authConfig);
    if (!session) return redirect("/");
}
