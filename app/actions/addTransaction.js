'use server';
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

async function addTransaction(formData) {
    let amount;
    const transactionTypeValue = formData.get('type');
    const descriptionValue = formData.get('description');
    const amountValue = formData.get('amount');

    // Check for input values
    if (!descriptionValue || descriptionValue === '' || !amountValue) {
        return { error: 'Transaction description or amount is missing' };
    }

    const description = descriptionValue.toString(); // Ensure description is a string
    amount = parseFloat(amountValue.toString()).toFixed(2); // Parse amount as number with 2 digits decimal part

    // Convert amount to a positive (income) or negative (expenses) number
    if (transactionTypeValue === 'expenses') {
        amount = -Math.abs(amount);
    } else {
        amount = Math.abs(amount);
    }

    // Get logged in user
    const { userId } = auth();

    // Check for user
    if (!userId) {
        return { error: 'User not found' }
    }

    try {
        const transactionData = await db.transaction.create({
            data: {
                description,
                amount,
                userId
            }
        });

        revalidatePath('/');

        return { data: transactionData }

    } catch (error) {
        return { error: 'Transaction failed' }
    }


}

export default addTransaction;