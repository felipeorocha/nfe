import React, { Component } from 'react';

class ImageCard extends Component {

  componentDidMount() {
  }

  render() {
    return(
      <div class="ui card" style={{ margin: '20px' }}>
        <div class="content">
          <div class="header">{this.props.title}</div>
          <div class="meta">R$ 00,09 per consult</div>
          <div class="description">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
