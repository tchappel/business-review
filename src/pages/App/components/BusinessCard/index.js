import React, { Component } from 'react';
require('./styles.scss');

class BusinessCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card">
            {/* 
                card-deck {
                display: flex;
                flex-direction: column;
                }

                @media (min-width: 576px)
                .card-deck {
                    -ms-flex-flow: row wrap;
                    flex-flow: row wrap;
                    margin-right: -15px;
                    margin-left: -15px;
                }
                

                @media (min-width: 576px) {
                display: flex;
                flex: 1 0 0%;
                flex-direction: column;
                position: relative;
                flex-direction: column;
                margin-right: 15px;
                margin-bottom: 0;
                margin-left: 15px;
                }

                .card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    min-width: 0;
                    word-wrap: break-word;
                    background-color: #fff;
                    background-clip: border-box;
                    border: 1px solid rgba(0, 0, 0, 0.125);
                    border-radius: 0.25rem;
                }
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
                        {
                            !!this.props.businessRating && 
                            <p>Rating: {this.props.businessRating}</p>
                        }
                        {
                            !!this.props.businessCategory && 
                            <p>Category: {this.props.businessCategory}</p>
                        }
                    </div>                    
                </div>
                {this.props.children}          
            </div>
        );
    }
}
 
export default BusinessCard;