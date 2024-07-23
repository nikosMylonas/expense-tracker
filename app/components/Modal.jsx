import { useState, useEffect, useRef } from 'react';
import deleteTransaction from '../actions/deleteTransaction';
import { toast } from 'react-toastify';

const Modal = ({ isOpen, handleOpen, transactionId, children }) => {
    const [modalOpen, setModalOpen] = useState(isOpen);

    const refModal = useRef(null);
    console.log('isOpen', isOpen);
    console.log('modalOpen', modalOpen);

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setModalOpen(false);
            handleOpen(false);
        }
    };

    const handleClose = () => {
        setModalOpen(false);
    };
    const handleDeleteTransaction = async (transactionId) => {
        // console.log('Delete action in Modal activated');
        const { message, error } = await deleteTransaction(transactionId);

        if (error) {
            toast.error(error);
        }
        toast.success(message);
        handleOpen(false);
        handleClose();
    };

    useEffect(() => {
        const modalElement = refModal.current;
        // console.log('Modal Element:', modalElement);
        if (modalElement) {
            if (modalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
                handleOpen(false);
            }
        }
    }, [modalOpen]);

    return (
        <dialog ref={refModal} onKeyDown={handleKeyDown} className="modal">
            <>
                {children}
                <div className="modal-btn-container">
                    <button
                        className="btn modal-close-btn btn-secondary"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    <button
                        className="btn modal-delete-btn btn-primary"
                        onClick={() => {
                            handleDeleteTransaction(transactionId);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </>
        </dialog>
    );
};
export default Modal;
