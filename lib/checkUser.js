import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async () => {
    const user = await currentUser();

    // Check for current logged in clerk user
    if (!user) {
        return null;
    }

    // Check if the user is already in th DB
    const loggedInUser = await db.user.findUnique({
        where: {
            clerkUserId: user.id
        }
    });

    // If user in DB, return user
    if (loggedInUser) {
        return loggedInUser;
    }

    // If not in DB, create new user
    const newUser = await db.user.create({
        data: {
            clerkUserId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    });

    return newUser;
}