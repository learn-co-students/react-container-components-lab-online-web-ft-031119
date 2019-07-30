import React from "react";

const Review = ({ title, critic }) => (
  <div className="review" key={title}>
    <h3>{title}</h3>
    <p>{critic}</p>
  </div>
);

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => (
        <Review title={review.display_title} critic={review.critics_pick} />
      ))}
    </div>
  );
};

export default MovieReviews;
