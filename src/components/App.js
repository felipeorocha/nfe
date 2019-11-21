import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PromoList from './PromoList';
import PaginationApp from './PaginationApp';
import Header from './Header';

const App = () => {
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [promosPerPage] = useState(10);
  const [apiUrl, setApiUrl] = useState('https://jsonplaceholder.typicode.com/posts/');

  useEffect(() => {
    const fetchPromos = async () => {
      setLoading(true);
      const res = await axios.get(apiUrl);
      setPromos(res.data);
      setLoading(false);
    };

    fetchPromos();
  }, [apiUrl]);

  const indexOfLastPromo = currentPage * promosPerPage;
  const indexOfFirstPromo = indexOfLastPromo - promosPerPage;
  const currentPromos = promos.slice(indexOfFirstPromo, indexOfLastPromo);

  const handlePageChange = (e, pageInfo) => {
  	setCurrentPage(pageInfo.activePage);
    setApiUrl(`https://jsonplaceholder.typicode.com/posts/?page=${pageInfo.activePage.toString()}`);
  };

  return (
    <div className='container'>
      <Header content="Shop" className="header-container" />
      <PromoList promos={currentPromos} loading={loading} />
      <PaginationApp
        onChange={handlePageChange}
        activePage={currentPage}
        promosPerPage={promosPerPage}
        totalPromos={promos.length}
      />
    </div>
  );
}

export default App;
