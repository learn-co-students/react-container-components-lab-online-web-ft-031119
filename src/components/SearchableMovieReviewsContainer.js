import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = { 
        searchTerm: '',
        reviews: []
     }

     handleSearchInput = (event) => {
         this.setState({searchTerm: event.target.value})
     }

     handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(BASE_URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(response => this.setState({reviews: response.results}))
     }
    render() { 
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input id="search-input" type="text" style={{width: 300}} onChange={this.handleSearchInput}></input>
                    <button type="submit">Search</button>
                </form>
                {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
          );
    }
}
 
export default SearchableMovieReviewsContainer;