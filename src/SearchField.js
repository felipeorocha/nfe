import React, { Component } from 'react';

class SearchField extends Component {
  state = {
    term: ''
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  }

  // onFormSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state.term);
  // }

  render() {
    return (
      // <form class="ui form" onSubmit={this.onFormSubmit}> callback
      <form className="ui form" onSubmit={e => this.props.onSubmit(e, this.state.term)}>
        <div className="field">
          <label>Search:</label>
          <input value={this.state.term} placeholder="Type your search here..." onChange={this.onInputChange} />
        </div>
        <button type="submit" className="ui button">Submit</button>
      </form>
    );
  }
}

export default SearchField;
