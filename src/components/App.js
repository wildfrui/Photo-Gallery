import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const KEY = "rSAPrR_F4_CQnv9b-INWZo99pf0y3DUleFHkgNRsFPM";
class App extends React.Component {
  state = { images: [] };

  handleSearch = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
        per_page: 40,
      },
      headers: {
        Authorization: "Client-ID b4mC9ZENF6HPsxC06jG6eTu_9MfIdQKyRC1c9yVruCs",
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSearch={this.handleSearch}></SearchBar>
        <ImageList images={this.state.images}></ImageList>
      </div>
    );
  }
}

export default App;
