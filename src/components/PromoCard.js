import React from 'react';
import Button from './Button';
import './PromoCard.css';

const PromoCard = ({ title, added, content, price , addFunc, id }) => {
  return(
    <div className="ui card" style={{ margin: '20px' }}>
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">
          {content}
        </div>
      </div>
      <div className="extra content extra-content-container">
        <div className="meta">R$ {price} per consult</div>
        <Button
          className={added ? "ui disabled button" : "ui primary button"}
          addFunc={addFunc}
          id={id}
          content={content}
          title={title}
          price={price}
        >
          Buy
        </Button>
      </div>
    </div>
  );
}

export default PromoCard;
