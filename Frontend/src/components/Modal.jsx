import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
    function closeModal() {
        setIsModalOpen(false);
    }

    function openModal() {
        setIsModalOpen(true);
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
            </div>

            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative max-w-md transform overflow-hidden rounded-2xl bg-white px-6 text-left align-middle shadow-xl transition-all">
                                    <button
                                        type="button"
                                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-hide="popup-modal"
                                        onClick={closeModal}
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">
                                            Close modal
                                        </span>
                                    </button>
                                    <div className="p-6 text-center">
                                        <svg
                                            className="mx-auto mb-4 p-2 rounded-full text-teal-500 bg-teal-200 w-12 h-12"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 25 25"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                            {/* #TODO: Predicted Score to be inserted here */}
                                            Result
                                        </h3>
                                        <button
                                            data-modal-hide="popup-modal"
                                            type="button"
                                            className="text-white bg-teal-500 hover:bg-teal-700 w-52 font-medium rounded-lg text-sm items-center px-5 py-2.5 text-center"
                                            onClick={closeModal}
                                        >
                                            Ok
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
};
export default Modal;
