import { FC } from 'react';
import { Pagination } from 'flowbite-react';

interface IProps {
    currentPage: number;
    totalPages: number;
    onChange: (page: number)=> void;
};

const CustomPagination: FC<IProps> = (props): JSX.Element=> {
    const { currentPage, totalPages, onChange } = props;
    return (
        <>
            {
                (totalPages > 1) && 
                <div className="flex justify-center sm:justify-center">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onChange}
                        showIcons
                    />
                </div>
            }
        </>
    );
};

export default CustomPagination;