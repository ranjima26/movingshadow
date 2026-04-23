import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        // Add your authentication providers here
        // e.g., GoogleProvider, CredentialsProvider, etc.
    ],
    session: {
        strategy: "jwt",
    },
    // pages: {
    //     signIn: '/login', // Example of custom sign-in page
    // }
};
