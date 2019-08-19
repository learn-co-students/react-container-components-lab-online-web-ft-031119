import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    handleSearchInputChange = e => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
            .then(resp => resp.json())
            .then(data => this.setState({reviews: data.results}))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search</label>
                    <input id="search-input" type="text" style={{width: 300}} onChange={this.handleSearchInputChange} />
                    <button type="submit">Submit</button>
                </form>
                {typeof this.state.reviews === 'object' && this.state.reviews.lenght > 0 && <h2>Movie Reviews</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
