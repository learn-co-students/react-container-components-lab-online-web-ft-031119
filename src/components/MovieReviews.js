import React, {Component} from 'react'


const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(rev => {
  return <div key={rev.display_title} className='review'>{rev.headline}</div>
})}</div>


MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
