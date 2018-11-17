import React, { Component } from "react";
import { Route } from "react-router-dom";
import BusinessCards from "./components/BusinessCards";
import FilterBar from "./components/FilterBar";
import BusinessReview from "./components/BusinessReview";
var businessesData = require("./data/businesses-data.json");
var reviewsData = require("./data/reviews-data.json");
var classNames = require("classnames");

export default class App extends Component {
  state = {
    businessesData: businessesData.map(obj => ({ ...obj })),
    reviewsData: reviewsData,
    selectedCategory: "all",
    selectedSortMethod: undefined
  };

  businessCategories = [
    "All",
    "Barber",
    "Tiler",
    "Transport",
    "Removals",
    "Builder / Contractor"
  ];

  componentDidMount() {
    this.setState({
      selectedSortMethod: "a-z"
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedSortMethod !== prevState.selectedSortMethod) {
      // Here I make a clone of this.state.businessData because I will then use arr.prot.sort() that sorts arr in-place
      const businessesData = this.state.businessesData.map(obj => ({ ...obj }));
      if (this.state.selectedSortMethod === "a-z") {
        businessesData.sort((a, b) =>
          a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        );
      } else if (this.state.selectedSortMethod === "z-a") {
        businessesData.sort((a, b) =>
          a.name < b.name ? 1 : a.name > b.name ? -1 : 0
        );
      }
      this.setState(() => ({
        businessesData
      }));
    }

    if (this.state.selectedCategory !== prevState.selectedCategory) {
      const businessesDataRestored = businessesData.map(obj => ({ ...obj }));

      if (this.state.selectedSortMethod === "a-z") {
        businessesDataRestored.sort((a, b) =>
          a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        );
      } else if (this.state.selectedSortMethod === "z-a") {
        businessesDataRestored.sort((a, b) =>
          a.name < b.name ? 1 : a.name > b.name ? -1 : 0
        );
      }

      if (this.state.selectedCategory === "All") {
        this.setState(() => ({
          businessesData: businessesDataRestored
        }));
      } else {
        this.setState(() => ({
          businessesData: businessesDataRestored.filter(
            business => business.category === this.state.selectedCategory
          )
        }));
      }
    }
  }

  handleChangeSortMethod = event => {
    const selectedSortMethod = event.target.value;
    this.setState(() => ({
      selectedSortMethod
    }));
  };

  handleChangeCategory = event => {
    const selectedCategory = event.target.value;
    this.setState(() => ({ selectedCategory }));
  };

  getBusinessReviewData = businessId => {
    const selectedBusiness = this.state.businessesData.find(
      business => business.id === businessId
    );
  };

  getBusinessRating = businessId => {
    console.log("getBusinessRating!");
    let scoreTotal = 0;
    let reviewsCount = 0;
    const maxScore = 5;
    for (let customer in reviewsData) {
      for (let review of customer) {
        if (review.business_id === businessId) {
          scoreTotal += review.score;
          reviewsCount += 1;
          continue;
        }
      }
    }

    if (reviewsCount !== 0) {
      return `${Math.round(scoreTotal / reviewsCount)}/${maxScore}`;
    } else {
      return "No reviews for this business.";
    }
  };

  render() {
    return (
      <div className="container">
        <div
          id="step1"
          className={classNames({
            "d-none": !!this.state.selectedBusiness
          })}
        >
          <h4>SELECT YOUR BUSINESS</h4>
          <FilterBar
            selectedSortMethod={this.state.selectedSortMethod}
            handleChangeSortMethod={this.handleChangeSortMethod}
            selectedCategory={this.state.selectedCategory}
            handleChangeCategory={this.handleChangeCategory}
            businessCategories={this.businessCategories}
          />
          <BusinessCards
            businessesData={this.state.businessesData}
            handleSelectBusiness={this.handleSelectBusiness}
          />
        </div>
        <Route
          path="/step2"
          render={props => (
            <BusinessReview
              {...props}
              getBusinessRating={this.getBusinessRating}
            />
          )}
        />
      </div>
    );
  }
}
