import React,{Component} from 'react';


class Search extends Component {
  state ={
    exercises: [],
    searchExercises: "",


  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.searchExercises) {
      return alert("Search Another Exercise!");
    }
  }
 
}
export default Search