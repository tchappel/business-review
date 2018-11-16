import React from "react";
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
          <button
            className="btn btn-success"
            onClick={() => props.handleSelectBusiness(business.id)}
          >
            Continue
          </button>
        </BusinessCard>
      ))}
    </div>
  );
};

export default BusinessCards;
