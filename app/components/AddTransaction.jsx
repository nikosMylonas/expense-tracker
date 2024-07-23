'use client';

import { useRef } from 'react';
import addTransaction from '../actions/addTransaction';
import { toast } from 'react-toastify';

const AddTransaction = () => {
    const formRef = useRef(null);

    const clientAction = async (formData) => {
        const { data, error } = await addTransaction(formData);
        if (error) {
            toast.error(error);
        } else {
            toast.success('Transaction added');
            formRef.current?.reset();
        }
    };
    return (
        <section id="add-transaction">
            <h3 className="h3-form">Add Transaction</h3>
            <div className="separator"></div>
            <form
                ref={formRef}
                action={clientAction}
                className="transaction-form"
            >
                <div className="form-control radio-container">
                    Transaction Type
                    <div className="radio-item">
                        <input
                            type="radio"
                            id="expenses"
                            name="type"
                            value="expenses"
                            defaultChecked
                        />
                        <label htmlFor="expenses">Expense</label>
                    </div>
                    <div className="radio-item">
                        <input
                            type="radio"
                            id="income"
                            name="type"
                            value="income"
                        />
                        <label htmlFor="income">Income</label>
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="description">Transaction Description</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Enter Transaction  description ..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="Enter Amount..."
                        step="0.01"
                    />
                </div>
                <div className="btn-container">
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
            <div className="separator"></div>
        </section>
    );
};
export default AddTransaction;
