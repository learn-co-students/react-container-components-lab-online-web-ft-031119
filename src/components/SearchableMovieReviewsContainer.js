import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dEX2mBzSBnGRSaws8bZDePwj8ng0a4Hi';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;



export default class SearchableMovieReviewsContainer extends Component{
    state = {
      reviews: [],
      searchTerm: ''
    }

    componentDidMount(){
      this.fetchQuery()
    }

    fetchQuery = () =>{
      const fullURL = URL + this.state.searchTerm
      console.log("full url", fullURL)
      console.log(this.state)
      fetch(fullURL)
      .then(res => res.json())
      .then(reviews => {
        this.setState({reviews: reviews.results})})
    }

    handleChange = (event) => {
      this.setState({searchTerm: event.target.value})
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.fetchQuery()
    }


    render(){
      return(
        <div className="searchable-movie-reviews" >
        <h2>Reviews by Search</h2>
          <form onSubmit={event => this.handleSubmit(event)}>
            <input type="text" value={this.state.searchTerm} onChange={event => this.handleChange(event)} />
            <input type='submit' value="Submit" />
          </form>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
}
