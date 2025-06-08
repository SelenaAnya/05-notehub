import ReactPaginate, { type ReactPaginateProps } from 'react-paginate';
import css from './Pagination.module.css';

interface PaginationProps extends Omit<Partial<ReactPaginateProps>, 'onPageChange'> {
  totalPages: number;
  currentPage: number;
  onPageChange: (selectedPage: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  className,
  ...rest
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const handlePageClick = (selectedItem: { selected: number }) => {
    onPageChange(selectedItem.selected + 1); // ReactPaginate uses 0-based indexing
  };

  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={currentPage - 1}
      onPageChange={handlePageClick}
      containerClassName={`${css.pagination} ${className ?? ''}`}
      activeClassName={css.active}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      previousLabel="‹"
      nextLabel="›"
      breakLabel="..."
      {...rest}
    />
  );
};

export default Pagination;