import React, { Component } from 'react';
import axios from 'axios';
import PromoList from './PromoList';
import PaginationApp from './PaginationApp';

class App extends Component {
  state = {
    promoList: []
  };

  componentDidMount() {
    this.onSearchTerm()
  }

  onSearchTerm = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    this.setState({ promoList: response.data });
  }

  render() {
    return (
      <div className="ui container">
        <PromoList promoList={this.state.promoList} />
        <PaginationApp />
      </div>
    );
  }
}

export default App;
