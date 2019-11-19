import React, { Component } from 'react';
import axios from 'axios';
import SearchField from './SearchField';
import ImagesList from './ImagesList';

class App extends Component {
  state = {
    imagesList: []
  };

  onSearchTerm = async (event, term) => {
    event.preventDefault();
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID dca040ec4115a13484560df329adad673bf8df094a77688818ffaa4894a7bd03'
      }
    });

    console.log(response.data.results);
    this.setState({ imagesList: response.data.results });
    // .then(response => {
    //   console.log(response.data.results)
    // }); // promises way
  }

  render() {
    return (
      <div className="ui container">
        <SearchField onSubmit={this.onSearchTerm} />
        <ImagesList imagesList={this.state.imagesList} />
      </div>
    );
  }
}

export default App;
