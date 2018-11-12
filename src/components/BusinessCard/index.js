import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('./styles.scss');

class BusinessCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card">
            {/*
                display: flex;
                flex: 1 0 0%;
                flex-direction: column;
                position: relative;
            */}
                <div className="card-body d-flex flex-row">
                {/*
                    flex: 1 1 auto;
                    padding: 1.25rem;
                */}
                    <div className="card-header">
                        <img
                            className="businessLogo"
                            src={this.props.imageUrl}
                            alt="business logo"
                        />
                    </div>
                    <div>
                        <h5 className="card-title">{this.props.businessName}</h5>
                        <p>
                            {this.props.businessCity},
                            {this.props.businessCountry}
                        </p>
                        <p className="card-text">
                            {this.props.businessDescription}
                        </p>
                    </div>                    
                </div>
                {this.props.children}          
            </div>
        );
    }
}
 
export default BusinessCard;