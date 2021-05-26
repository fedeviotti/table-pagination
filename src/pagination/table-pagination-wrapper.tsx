import * as React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

interface TablePaginationWrapperProps {
  initialPage: number;
  initialRowsPerPage: number;
  count: number;
  onChangePage: (page: number) => void;
  onChangeRowsPerPage: (rowsPerPage: number) => void;
}

const TablePaginationWrapper: React.FC<TablePaginationWrapperProps> = ({
  initialPage,
  initialRowsPerPage,
  count,
  onChangePage,
  onChangeRowsPerPage,
}) => {
  const [page, setPage] = React.useState(initialPage);
  const [rowsPerPage, setRowsPerPage] = React.useState(initialRowsPerPage);

  const onChangePageHandler = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
    onChangePage(newPage);
  };

  const onChangeRowsPerPageHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    onChangeRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    onChangePage(0);
  };

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onChangePage={onChangePageHandler}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={onChangeRowsPerPageHandler}
    />
  );
};

export { TablePaginationWrapper };
