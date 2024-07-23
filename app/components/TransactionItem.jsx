'use client';

import { useState, useEffect } from 'react';
import { addCommas } from '@/lib/utils';
import { FaTrash } from 'react-icons/fa';

import Modal from './Modal';
import ConfirmModal from './ConfirmModal';

const TransactionItem = ({ transaction }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = (state) => {
        setIsOpen(state);
    };

    const year = transaction.createdAt.getFullYear().toString();
    const month = (transaction.createdAt.getMonth() + 1).toString();
    const day = transaction.createdAt.getDate().toString();
    const date = `${day}-${month}-${year}`;

    useEffect(() => {
        console.log('useEffect isOpen', isOpen);
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <Modal
                    isOpen
                    handleOpen={handleOpen}
                    transactionId={transaction.id}
                >
                    <ConfirmModal />
                </Modal>
            )}
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                <div className="transaction-container">
                    <div className="delete">
                        <button
                            title="Delete transaction"
                            onClick={() => {
                                handleOpen(true);
                                // console.log('isOpen clicked. isOpen:', isOpen);
                            }}
                        >
                            <FaTrash />
                        </button>
                    </div>
                    <div className="date">{date}</div>
                    <div className="description">{transaction.description}</div>
                    <div className="amount">
                        {addCommas(Number(transaction.amount.toFixed(2)))}
                    </div>
                </div>
                <div className="delete-mobile">
                    <button
                        title="Delete transaction"
                        onClick={() => {
                            setIsOpen(true);
                            // console.log('isOpen clicked. isOpen:', isOpen);
                        }}
                    >
                        <FaTrash />
                    </button>
                </div>
            </li>
        </>
    );
};
export default TransactionItem;
