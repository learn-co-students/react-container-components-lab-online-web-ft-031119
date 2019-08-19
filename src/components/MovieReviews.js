import React, {Component} from 'react'

const review = ({headline, byline, link, summary_short}) => {
    return (
        <div key={headline} className="review">
                <h1><a className="review-link" href={link.url}>{headline}</a></h1>
                <h3 className="author">{byline}</h3>
            <br />

            <p>{summary_short}</p>
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

const MovieReviews = ({reviews}) => (
    <div className="review-list">
        {reviews.map(review)}
    </div>
)

export default MovieReviews
