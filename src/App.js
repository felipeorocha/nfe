import React, { Component } from 'react';
import SearchField from './SearchField';

class App extends Component {

  onSearchTerm(event, term) {
    event.preventDefault();
    console.log(term);
  }

  render() {
    return (
      <div className="ui container">
        <SearchField onSubmit={this.onSearchTerm} />
      </div>
    );
  }
}

export default App;
