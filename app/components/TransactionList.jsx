import getTransactions from '../actions/getTransactions';
import TransactionItem from './TransactionItem';
import { addCommas } from '@/lib/utils';

const TransactionList = async () => {
    const { transactions, monthlyTotal, error } = await getTransactions();

    if (error) {
        return (
            <div className="error">
                <span>Warning!</span> {error}
            </div>
        );
    }

    return (
        <section id="transaction-list">
            <h3>Monthly Transactions ({transactions.length})</h3>
            {transactions.length === 0 && (
                <h3>No transactions registered this month</h3>
            )}

            <ul className="list">
                {transactions &&
                    transactions.map((transaction) => (
                        <TransactionItem
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}
            </ul>

            <div
                className={
                    'montly-total ' + (monthlyTotal < 0 ? 'minus' : 'plus')
                }
            >
                Monthly Balance: €{addCommas(Number(monthlyTotal.toFixed(2)))}
            </div>
        </section>
    );
};
export default TransactionList;
