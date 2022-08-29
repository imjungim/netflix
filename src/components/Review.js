import React from "react";

const Review = ({ review }) => {
  console.log("review다", review);
  if (review.results.length === 0) {
    return (
      <div className="Review">
        <h3 style={{ textAlign: "center" }}>'There's no review'</h3>
      </div>
    );
  }
  return (
    <div className="Review">
      {review.results.map((it) => (
        <div className="review-data">
          <h4>{it.author}</h4>
          <p>{it.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
