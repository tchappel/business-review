import React, { Component } from "react";
import BusinessCard from "./components/BusinessCard";
import BusinessCards from "./components/BusinessCards";
var businessesData = require("./data/businesses-data.json");
var reviewsData = require("./data/reviews-data.json");
var classNames = require("classnames");

export default class App extends Component {
  state = {
    businessesData: businessesData.map(obj => ({ ...obj })),
    reviewsData: reviewsData,
    selectedCategory: "all",
    selectedSortMethod: undefined,
    selectedBusiness: undefined
  };

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

      if (this.state.selectedCategory === "all") {
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

  handleSelectBusiness = id => {
    const selectedBusiness = this.state.businessesData.find(
      business => business.id === id
    );
    this.setState({ selectedBusiness });
  };

  render() {
    const pageTitle = "select your business";
    const businessCategories = [
      "Barber",
      "Tiler",
      "Transport",
      "Removals",
      "Builder / Contractor"
    ];
    return (
      <div className="container">
        <div
          id="step1"
          className={classNames({
            "d-none": !!this.state.selectedBusiness
          })}
        >
          <h4>{pageTitle.toUpperCase()}</h4>
          <form>
            <label>
              Sort:
              <select
                value={this.state.selectedSortMethod}
                onChange={this.handleChangeSortMethod}
              >
                <option value={"a-z"}>A-Z</option>
                <option value={"z-a"}>Z-A</option>
              </select>
            </label>
            <label>
              Category
              <select
                value={this.state.selectedCategory}
                onChange={this.handleChangeCategory}
              >
                <option value={"all"}>All</option>
                {businessCategories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </form>
          <BusinessCards
            businessesData={this.state.businessesData}
            handleSelectBusiness={this.handleSelectBusiness}
          />
        </div>
        {this.state.selectedBusiness && (
          <div id="step2">
            <BusinessCard
              businessName={this.state.selectedBusiness.name}
              businessCategory={this.state.selectedBusiness.category}
              businessCity={this.state.selectedBusiness.city}
              businessCountry={this.state.selectedBusiness.country}
              businessDescription={this.state.selectedBusiness.description}
              imageUrl={this.state.selectedBusiness.imageUrl}
            >
              <button className="btn btn-success"> Submit </button>
            </BusinessCard>

            <button
              onClick={() =>
                this.setState({
                  selectedBusiness: undefined
                })
              }
            >
              Go to Previous Page
            </button>
          </div>
        )}
      </div>
    );
  }
}
