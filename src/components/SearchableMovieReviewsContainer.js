import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'api-key=iKNCFaYpFvkvMZA1cl2AZfS81IAsgwHA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state={
    reviews: [],
    searchTerm: "",
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(URL+this.state.searchTerm+NYT_API_KEY)
      .then(response => response.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          onChange={this.handleChange}
        />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
  )}
}

export default SearchableMovieReviewsContainer
