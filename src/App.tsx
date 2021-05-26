import * as React from 'react';
import './App.css';
import { TablePaginationWrapper } from './pagination/table-pagination-wrapper';

const App: React.FC = () => {
  function onChangePageHanlder(page: number) {
    console.log(page);
  }

  function onChangeRowsPerPageHandler(rowsPerPage: number) {
    console.log(rowsPerPage);
  }

  return (
    <div className="App">
      <TablePaginationWrapper
        initialPage={0}
        initialRowsPerPage={10}
        count={125}
        onChangePage={onChangePageHanlder}
        onChangeRowsPerPage={onChangeRowsPerPageHandler}
      />
    </div>
  );
};

export default App;
