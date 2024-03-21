import React, { useState } from "react";
import { Table } from 'flowbite-react';
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/dist/query";

const IndustryList = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleSubmit = () => {
        toggleModal();
    };

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="bg-gray-300 text-xl text-indigo-900 font-montserrat font-semibold w-full h-16 border-b-1 border-gray-300 ">
                    <div className="px-4 py-4">Industry Type</div>
                </div>
                <Table className="w-full bg-gray-300  ">
                    <Table.Body className="rounded-none">
                        <Table.Row className=" border-t border-gray-400">
                            <Table.Cell className="border-r h-28 w-72  border-gray-400">
                                <label className="block  text-xl font-montserrat font-semibold  text-indigo-900">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="border mt-2 font-montserrat font-light text-xl text-indigo-900 rounded-md p-2 w-61 h-9 border-1 border-gray-300"
                                    placeholder=" name"
                                />
                            </Table.Cell>
                            <Table.Cell className="border-r h-28 w-72  border-gray-400">
                                <label className="block text-lg text-xl font-montserrat  font-semibold text-indigo-900">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    className="border mt-2 font-montserrat font-light text-indigo-900 text-xl rounded-md p-2 w-61 h-9 border-1 border-gray-300"
                                    placeholder="description"
                                />
                            </Table.Cell>
                            <Table.Cell className="">
                                <button
                                    onClick={handleSubmit} // Trigger modal on Submit button click
                                    type="button"
                                    className="text-white bg-blue-500 text-blue-700 font-semibold py-1 px-4 border border-blue-500 hover:border-transparent rounded w-40 h-10"
                                >
                                    Submit
                                </button>
                            </Table.Cell>
                            <Table.Cell>
                                {/* Modal toggle */}
                                <button
                                    onClick={toggleModal}
                                    className="text-white bg-blue-500 text-blue-700 font-semibold py-1 px-4 border border-blue-500 hover:border-transparent rounded w-40 h-10"
                                >
                                    Toggle modal
                                </button>
                                {/* Modal */}
                                {showModal && (
                                    <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
                                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                        <div className="relative bg-white rounded-lg shadow-lg">
                                            <div className="p-5">
                                                <h1 className="text-lg font-semibold text-gray-900">Static modal</h1>
                                                <button
                                                    onClick={toggleModal}
                                                    className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                                                >
                                                    <RxCross2 className="h-6 w-6" />
                                                </button>
                                            </div>
                                            <div className="p-4 md:p-5 space-y-4">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around
                                                    <br></br> the world are updating their terms of service agreements to comply.
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on<br></br> May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations<br></br> to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                                </p>
                                            </div>
                                            {/* Modal footer */}
                                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button data-modal-hide="static-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                                <button data-modal-hide="static-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>

                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>

                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>

                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
}
export default IndustryList;