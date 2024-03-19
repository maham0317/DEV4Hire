import React from "react";
import { Table } from 'flowbite-react';
import { RxCross2 } from "react-icons/rx";

const IndustryList = () => {
    return (
        <>
            <form className="bg-gray-200 rounded shadow p-4 mt-4">
                {/* hr tag */}
                <hr className="mx-11 my-4 bg-gray-300 h-0.5 rounded-full" />
                <div className="mx-11 flex justify-center space-x-11">
                    <div className="flex flex-col space-y-2 mt-4 ">
                        <label className="block text-sm font-medium">
                            Start Date
                        </label>
                        <input
                            type="text"
                            className="border rounded-md p-2"
                            placeholder="12-03-2024"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <label className="block text-sm font-medium">
                            End Date
                        </label>
                        <input
                            type="text"
                            className="border rounded-md p-2"
                            placeholder="12-03-2024"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <label className="block text-sm font-medium">
                            Typo
                        </label>
                        <input
                            type="text"
                            className="border rounded-md p-2"
                            placeholder="Velg Type"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <label className="block text-sm font-medium">
                            Typo
                        </label>
                        <input
                            type="text"
                            className="border rounded-md p-2"
                            placeholder="Velg Type"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <label className="block text-sm font-medium">
                            Postnummer
                        </label>
                        <input
                            type="text"
                            className="border rounded-md p-2"
                            placeholder=""
                        />
                    </div>
                </div>
                {/* Hr tag */}
                <hr className="mx-11 my-4 bg-gray-300 h-0.5 rounded-full" />
                <div className="mx-11 flex justify-center space-x-11 -ml-16">
                    <div className="flex flex-col space-y-2 mt-4">
                        <label className="block text-sm font-medium">
                            Status
                        </label>
                        <input
                            type="text"
                            className="border rounded-md p-2"
                            placeholder="Alternativer"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <label className="block text-sm font-medium">
                            Produckter
                        </label>
                        <input
                            type="text"
                            className="border rounded-md p-2"
                            placeholder="bestrivelete"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <label className="block text-sm font-medium">
                            Projeskter
                        </label>
                        <input
                            type="text"
                            className="border rounded-md p-2"
                            placeholder="Alternativer"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <label className="block text-sm font-medium">
                            Tekst
                        </label>
                        <input
                            type="text"
                            className="border rounded-md p-2"
                            placeholder="Alternativer"
                        />
                    </div>
                    <div className="mx-11 mt-11">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                            Submit
                        </button>
                    </div>
                </div>
                {/* hr tag */}
                <hr className="mx-11 my-4 bg-gray-300 h-0.5 rounded-full" />

            </form>

            {/* Table */}
            <div className="mt-5">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Navn</Table.HeadCell>
                        <Table.HeadCell>Klar tid</Table.HeadCell>
                        <Table.HeadCell>Address</Table.HeadCell>
                        <Table.HeadCell>Prioritet</Table.HeadCell>
                        <Table.HeadCell>Typoz</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>Slett</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Slet</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>Anders</Table.Cell>
                            <Table.Cell>11-03-2024</Table.Cell>
                            <Table.Cell>DHA Block D</Table.Cell>
                            <Table.Cell>Normal</Table.Cell>
                            <Table.Cell>Delivery</Table.Cell>
                            <Table.Cell>New</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    <RxCross2 />
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>Anders</Table.Cell>
                            <Table.Cell>11-03-2024</Table.Cell>
                            <Table.Cell>DHA Block D</Table.Cell>
                            <Table.Cell>Normal</Table.Cell>
                            <Table.Cell>Delivery</Table.Cell>
                            <Table.Cell>New</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    <RxCross2 />
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>Anders</Table.Cell>
                            <Table.Cell>11-03-2024</Table.Cell>
                            <Table.Cell>DHA Block D</Table.Cell>
                            <Table.Cell>Normal</Table.Cell>
                            <Table.Cell>Delivery</Table.Cell>
                            <Table.Cell>New</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    <RxCross2 />
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>Anders</Table.Cell>
                            <Table.Cell>11-03-2024</Table.Cell>
                            <Table.Cell>DHA Block D</Table.Cell>
                            <Table.Cell>Normal</Table.Cell>
                            <Table.Cell>Delivery</Table.Cell>
                            <Table.Cell>New</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    <RxCross2 />
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </>
    );
}

export default IndustryList;
