'use server';
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getTransactions() {
    const date = new Date();
    const currentMonth = date.getFullYear() + '-' + (date.getMonth() + 1) + '-1'

    const { userId } = auth();

    if (!userId) {
        return { error: 'User not found' }
    }

    try {
        const transactions = await db.transaction.findMany({
            where: {
                userId,
                createdAt: {
                    gte: new Date(currentMonth)
                }
            }, orderBy: { createdAt: 'desc' }
        });

        const amounts = transactions.map((transaction) => transaction.amount);
        const monthlyTotal = amounts.reduce((total, amount) => total + amount, 0);

        return { transactions, monthlyTotal }
    } catch (error) {
        return { error: 'Database error' }
    }

}

export default getTransactions;