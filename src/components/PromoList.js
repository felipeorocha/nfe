import React from 'react';
import PromoCard from './PromoCard';

const PromoList = props => {
  const promoItem = props.promoList.map(item => {
    return <PromoCard
            key={item.id}
            title={item.title}
            content={item.body}
          />
  });

  return <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'center' }}>{promoItem}</div>;
}

export default PromoList;
