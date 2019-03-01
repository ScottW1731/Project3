import React from "react";

class SearchTask extends React.Component {
    searchTask = () => {
      const searchValue = this.searchInput.value;
      const { searchTask } = this.props;
      searchTask(searchValue);
    };
  
    render() {
      return (
        <div id="search-field">
          <input
            type="text"
            placeholder="Search Task"
            onChange={this.searchTask}
            ref={input => (this.searchInput = input)}
          />
          <i className="fa fa-search" />
        </div>
      );
    }
  }

export default SearchTask;