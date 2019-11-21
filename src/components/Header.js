import React from 'react';
import Button from './Button';
import './Header.css';

const Header = props => {
  return (
    <div className={`ui container ${props.className || ''}`}>
      <h1 className="ui header header-item">{props.content}</h1>
      <Button className="ui vertical animated button header-item">
        <div className="hidden content">Shop</div>
        <div className="visible content">
          <i aria-hidden="true" class="shop icon"></i>
        </div>
      </Button>
    </div>
  );
}

export default Header;
