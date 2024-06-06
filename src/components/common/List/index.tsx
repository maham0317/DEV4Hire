import { Table } from "flowbite-react";
import { ColumnProps } from "@/interfaces/industry-type-listing";
import AppLoader from "@/components/@shared/loader/app-loader";

interface IProps<T> {
  isLoading: boolean;
  columns: Array<ColumnProps<T>>;
  data?: T[];
  onRowClick?: (row: T) => void;
}

const TableWrapper = <T,>({
  isLoading,
  data,
  columns,
  onRowClick
}: IProps<T>) => {
  return (
    <div className="overflow-x-auto ">
      <Table className="min-w-full">
        <Table.Head className="border-b-[1px] border-[#C7C8D7]">
          {columns.map((column) => (
            <Table.HeadCell
              key={column.key}
              className="bg-white text-lg font-semibold"
            >
              {column.title}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y" key={'table'}>
          {!isLoading &&
            data?.map((row, i) => (
              <Table.Row
                key={`tr-${i}`}
                className={`${onRowClick ? 'cursor-pointer' : ''} bg-white dark:border-gray-700 dark:bg-gray-800 border-b-[1px] border-[#C7C8D7]`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRowClick && onRowClick(row);
                }}
              >
                {columns.map((column) => {
                  const value = column.render
                    ? column.render(column, row as T)
                    : (row[column.key as keyof typeof row] as string);
                  return (
                    <Table.Cell
                      key={`${column.key}-${i}`}
                      className="whitespace-nowrap text-left text-lg text-gray-900 dark:text-white h-16 overflow-hidden text-ellipsis"
                    >
                      {value}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            ))}
        </Table.Body>
      </Table>

      {isLoading && <AppLoader />}
      {data?.length === 0 && <p className="text-center">No Record found</p>}
    </div>
  );
};

export default TableWrapper;
