'use server';
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

async function getUserBalance() {
    const { userId } = auth();

    if (!userId) {
        return { error: 'User not found' }
    }

    try {
        const transactions = await db.transaction.findMany({
            where: { userId }
        });
        const balance = Number(transactions.reduce((sum, transaction) => sum + transaction.amount, 0).toFixed(2));
        return { balance }
    } catch (error) {
        return { error: 'Database error' }
    }
}

export default getUserBalance;