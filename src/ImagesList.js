import React from 'react';

const ImagesList = props => {
  return(
    <div className="ui container">
      <div role="list" className="ui horizontal list">
        {
          props.imagesList.map(item =>
            <div role="listitem" className="item" key={item.id}>
              <img src={item.urls.regular} className="ui small image" alt={item.alt_description} />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default ImagesList;
