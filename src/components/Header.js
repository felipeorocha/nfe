import React from 'react';
import { Link } from 'react-router-dom';
import { SecondaryButton } from './Button';
import './Header.css';

const Header = props => {
  return (
    <div className={`ui container ${props.className || ''}`}>
      <h1 className="ui header header-item">{props.content}</h1>
      <Link to="/summary">
        <SecondaryButton className="ui vertical animated button header-item">
          <div className="hidden content">Shop</div>
          <div className="visible content">
            <i aria-hidden="true" className="shop icon"></i>
          </div>
        </SecondaryButton>
      </Link>
    </div>
  );
}

export default Header;
