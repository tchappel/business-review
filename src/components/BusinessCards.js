import React from "react";
import { Link } from "react-router-dom";
import BusinessCard from "./BusinessCard";

const BusinessCards = props => {
  return (
    <div className="card-deck">
      {props.businessesData.map(business => (
        <BusinessCard
          key={business.id}
          businessName={business.name}
          businessCity={business.city}
          businessCountry={business.country}
          businessDescription={business.description}
          imageUrl={business.imageUrl}
        >
          <Link to={"/step2?businessId=" + business.id}>
            <button className="btn btn-success">Continue</button>
          </Link>
        </BusinessCard>
      ))}
    </div>
  );
};

export default BusinessCards;
