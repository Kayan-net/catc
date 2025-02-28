// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            name: "credentials",
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                try {
                    //Authenticate User with Firebase
                    const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
                    const user = userCredential.user;

                    // Return user info
                    return { id: user.uid, name: user.displayName, email: user.email };

                } catch (error) {
                    console.error("Error during authentication:", error);
                    return null;
                }
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };