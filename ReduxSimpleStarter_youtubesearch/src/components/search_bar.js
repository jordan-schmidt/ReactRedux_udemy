import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//   return <input />;
// };

// class-based component
// must have defined render method
class SearchBar extends Component {
  // how to initialize state in class-based component
  constructor(props) {
    super(props);

    // this.state used only in constructor function
    // this.setState used outside of constructor
    this.state = { term: ''};
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
