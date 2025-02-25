import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

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
                    const bcrypt = await import('bcryptjs'); // Dynamically import bcryptjs

                    if (credentials.email === "test@example.com") {
                        const passwordMatch = await bcrypt.compare(credentials.password, "$2a$10$L4rXb0x6t.561NqGjK9s4O6fJ6/U0823U05jK1i24m/20f1.h45gK");

                        if (passwordMatch) {
                            return { id: "1", name: "Test User", email: "test@example.com" };
                        }
                    }
                    return null;

                } catch (error) {
                    console.error("Error during bcrypt comparison:", error);
                    return null; // Or handle the error appropriately
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