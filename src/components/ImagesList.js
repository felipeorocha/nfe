import './ImagesList.css';
import React from 'react';

const ImagesList = props => {
  return(
    <div className="ui container">
      <div role="list" className="image-list">
        {
          props.imagesList.map(item =>
            <div role="listitem" className="item image-item" key={item.id}>
              <img src={item.urls.regular} className="ui medium rounded image" alt={item.alt_description} />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default ImagesList;
