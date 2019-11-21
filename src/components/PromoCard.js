import React, { Component } from 'react';
import Button from './Button';
import './PromoCard.css';

class ImageCard extends Component {
  componentDidMount() {
  }

  render() {
    return(
      <div className="ui card" style={{ margin: '20px' }}>
        <div className="content">
          <div className="header">{this.props.title}</div>
          <div className="description">
            {this.props.content}
          </div>
        </div>
        <div className="extra content extra-content-container">
          <div className="meta">R$ 00,09 per consult</div>
          <Button className="ui primary button">
            Buy
          </Button>
        </div>
      </div>
    );
  }
}

export default ImageCard;
