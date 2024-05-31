import { Table } from "flowbite-react";
import { ColumnProps } from "@/interfaces/industry-type-listing";
import AppLoader from "@/components/@shared/loader/app-loader";

interface IProps<T> {
  isLoading: boolean;
  columns: Array<ColumnProps<T>>;
  data?: T[];
}

const TableWrapper = <T,>({ isLoading, data, columns }: IProps<T>) => {
  return (
    <>
      <Table className="w-full">
        <Table.Head className="border-b-[1px] border-[#C7C8D7]">
          {columns.map((column) => (
            <Table.HeadCell
              className="bg-white text-lg font-semibold px-4 py-3 sm:px-6"
              key={column.key}
            >
              {column.title}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {!isLoading &&
            data?.map((row) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 border-b-[1px] border-[#C7C8D7]">
                {columns.map((column) => {
                  const value = column.render
                    ? column.render(column, row as T)
                    : (row[column.key as keyof typeof row] as string);
                  return (
                    <Table.Cell className="whitespace-nowrap text-lg text-gray-900 dark:text-white px-4 py-4 sm:px-6">
                      {value}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            ))}
        </Table.Body>
      </Table>

      {isLoading && <AppLoader />}
    </>
  );
};

export default TableWrapper;
