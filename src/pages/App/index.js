import React, {Component} from 'react';
import BusinessCards from './components/BusinessCards/index';
import BusinessCard from '../../components/BusinessCard';
const businessesData = require('../../data/businesses-data.json');
const reviewsData = require('../../data/reviews-data.json');

export default class App extends Component {
    state = {
        businessesData: businessesData.map(obj => ({...obj})),
        reviewsData: reviewsData,
        selectedCategory: 'all',
        selectedSortMethod: undefined,
        selectedBusinessId: undefined
    }

    componentDidMount() {
        this.setState({
            selectedSortMethod: 'a-z'
        });
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.selectedSortMethod !== prevState.selectedSortMethod) {
            // Here I make a clone of this.state.businessData because I will then use arr.prot.sort() that sorts arr in-place
            const businessesData = this.state.businessesData.map(obj => ({...obj}));
            if (this.state.selectedSortMethod === 'a-z') {
                businessesData.sort((a, b) => (
                    (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
                );
            } else if (this.state.selectedSortMethod === 'z-a') {
                businessesData.sort((a, b) => (
                    (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0)
                );
            }
            this.setState(() => ({
                businessesData
            }));
        }

        if (this.state.selectedCategory !== prevState.selectedCategory) {

            const businessesDataRestored = businessesData.map(obj => ({...obj}));

            if (this.state.selectedSortMethod === 'a-z') {
                businessesDataRestored.sort((a, b) => (
                    (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
                );
            } else if (this.state.selectedSortMethod === 'z-a') {
                businessesDataRestored.sort((a, b) => (
                    (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0)
                );
            }

            if (this.state.selectedCategory === 'all') {
                this.setState(() => ({
                    businessesData: businessesDataRestored
                }));

            } else {
                this.setState(() => ({
                    businessesData: businessesDataRestored.filter((business) => (
                        business.category == this.state.selectedCategory
                    ))
                }));
            }
        }
    }

    handleChangeSortMethod = (event) => {
        const selectedSortMethod = event.target.value;
        this.setState(() => ({
            selectedSortMethod,
        }));
    }

    handleChangeCategory = () => {
        const selectedCategory = event.target.value;
        this.setState(() => ({selectedCategory}));
    }
    
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

                <div id="step1">
                    <h4>{pageTitle.toUpperCase()}</h4>
                    <form>
                        <label>
                            Sort:
                            <select value={this.state.selectedSortMethod} onChange={this.handleChangeSortMethod}>
                                <option value={'a-z'}>A-Z</option>
                                <option value={'z-a'}>Z-A</option>
                            </select>
                        </label>
                        <label>
                            Category 
                            <select value={this.state.selectedCategory} onChange={this.handleChangeCategory}>
                            <option value={'all'}>All</option>
                            {
                                businessCategories.map((category) => (
                                    <option
                                        key={category}
                                        value={category}
                                    >
                                        {category}
                                    </option>
                                ))
                            }
                            </select>
                        </label>                    
                    </form>
                    <BusinessCards businessesData={this.state.businessesData} />
                </div>

                <div id="step2" className="d-none">
                <BusinessCard>
                <button>Go To previous page</button>
                </BusinessCard>
                </div>
                
            </div>
        );
    }
}
 