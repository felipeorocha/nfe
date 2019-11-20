import React, { Component } from 'react';
import axios from 'axios';
import SearchField from './SearchField';
import ImagesList from './ImagesList';
import PaginationApp from './PaginationApp';

class App extends Component {
  state = {
    imagesList: []
  };

  onSearchTerm = async (event, term) => {
    event.preventDefault();
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        page: 1,
        per_page: 30
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
        <PaginationApp />
      </div>
    );
  }
}

export default App;
