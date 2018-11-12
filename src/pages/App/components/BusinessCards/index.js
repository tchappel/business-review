import React, { Component } from 'react';
import BusinessCard from '../../../../components/BusinessCard/index';

class BusinessCards extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card-deck">
                {
                    this.props.businessesData.map((business) => (
                        <BusinessCard
                            key = {business.id}
                            businessName = {business.name}
                            businessCity = {business.city}
                            businessCountry = {business.country}
                            businessDescription = {business.description}
                            imageUrl = {business.imageUrl}
                        >
                            <button className="btn btn-success">Continue</button>
                        </BusinessCard>                            
                    ))
                }
                
                {/*
                    <BusinessCard />
                    <div className="w-100"></div>
                    <BusinessCard />
                    <BusinessCard />
                    <div className="w-100"></div>
                    <BusinessCard />
                    <BusinessCard />
                */}
            </div>
        );
    }
};

export default BusinessCards;