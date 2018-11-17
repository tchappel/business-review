import React from "react";
const queryString = require("query-string");
// import { Link } from "react-router-dom";

const BusinessReview = props => {
  const { businessId } = queryString.parse(props.location.search);
  return (
    <div className="row">
      <div className="col">Image goes Here</div>
      <div className="col">
        <h5>businessName</h5>
        <p>City, Country</p>
        <p>businessDescription</p>
        <p>Rating: {props.getBusinessRating(parseInt(businessId))}</p>
        <p>Category: </p>
        {/** Programmatic Navigation below */}
        <a href="#">
          <button>Submit</button>
        </a>
      </div>
    </div>
  );
};

export default BusinessReview;
