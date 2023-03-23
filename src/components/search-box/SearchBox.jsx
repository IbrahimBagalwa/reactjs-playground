import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className="search-box monsters-search-box"
          type="search"
          placeholder="Search monsters"
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
export default SearchBox;
