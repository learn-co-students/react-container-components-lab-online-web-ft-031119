import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dEX2mBzSBnGRSaws8bZDePwj8ng0a4Hi';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component{
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }
  
    componentDidMount(){
      fetch(URL)
      .then(res => res.json())
      .then(reviews => {
        this.setState({reviews: reviews.results})})
    }


    render(){
      return(
        <div className="latest-movie-reviews" >
        <h2>Latest Movie Reviews</h2>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
}
