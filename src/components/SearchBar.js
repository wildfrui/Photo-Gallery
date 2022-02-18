import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.term);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input onChange={this.handleInputChange} type="text" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
