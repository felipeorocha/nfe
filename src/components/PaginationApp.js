import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationApp = ({ promosPerPage, totalPromos, onChange }) => {
  const pages = totalPromos / promosPerPage;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Pagination onPageChange={onChange} defaultActivePage={5} totalPages={pages} />
    </div>
  );
}

export default PaginationApp;