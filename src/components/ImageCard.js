import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpanHeigth);
  }

  setSpanHeigth = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans }); // shorthand property
  }

  render() {
    const {
      image: {
        urls
      } = '', // default values
      className,
      alt
    } = this.props; // destructuring my props from this.props

    return(
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img src={urls.regular} className={className} ref={this.imageRef} alt={alt} />
      </div>
    );
  }
}

export default ImageCard;
