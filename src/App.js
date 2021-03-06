import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';
import './App.css';
import { faThList } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }

  updateSearchTerm(term) {
    console.log("Updating searchTerm ", term)
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    console.log("Updating FilterOptions ", option)
    
    this.setState({
      filterOption: option
    })
  }

  render() {
    console.log("Inside App.js")
    return (
    <div className="App">
      <SearchBar
        searchTerm={this.state.searchTerm}
        filterOption={this.state.filterOption}
        handleUpdate={term=>this.updateSearchTerm(term)}
        handleFilterChange={option => this.updateFilterOption(option)}/>
      <FilterableList files={this.props.files}
        files={this.props.files}
        searchTerm={this.state.searchTerm}
        filterOption={this.state.filterOption}/>
    </div>
    );
  }
}

export default App;
