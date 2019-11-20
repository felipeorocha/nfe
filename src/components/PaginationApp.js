import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationApp = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
    <Pagination defaultActivePage={5} totalPages={10} />
  </div>
)

export default PaginationApp;