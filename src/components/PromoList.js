import React from 'react';
import PromoCard from './PromoCard';
import Loader from './Loader';
import './PromoList.css';

const PromoList = ({ promos, loading }) => {
  if (loading) {
    return (
      <Loader />
    );
  }

  const promoItem = promos.map(item => {
    return <PromoCard
            key={item.id}
            title={item.title}
            content={item.body}
          />
  });

  return <div className="promo-list-container">{promoItem}</div>;
}

export default PromoList;
