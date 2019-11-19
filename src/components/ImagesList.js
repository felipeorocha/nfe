import './ImagesList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImagesList = props => {
  const images = props.imagesList.map(imageItem => {
    return <ImageCard
            key={imageItem.id}
            className="ui medium rounded image"
            alt={imageItem}
            image={imageItem}
          />
  });

  return <div className="image-list">{images}</div>;
}

export default ImagesList;

// const ImagesList = props => {
//   return(
//     <div className="image-list">
//       {
//         props.imagesList.map(item =>

//           <ImageCard
//             key={item.id}
//             image={item}
//             className="ui medium rounded image"
//             alt={item}
//           />

//         )
//       }
//     </div>
//   );
// }
