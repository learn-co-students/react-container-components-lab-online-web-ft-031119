import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "pXPclw6nDydSnoMLeDZJfOwAtM3GmIb9";
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchReviews(this.state.searchTerm);
  };

  fetchReviews = query => {
    fetch(`${URL}&query=${query}`)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={e => this.setState({ searchTerm: e.target.value })}
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
          />
          <button />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
