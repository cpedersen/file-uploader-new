import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
    render() {
        return (
            <div className="FilterOptions">
                <div className="FilterOptions_option">
                    <label htmlFor="filter_all">
                        <input type="radio" value="All" id="filter_all" name="filter"/>
                    All
                    </label>
                </div>
                <div className="FilterOptions_option">
                    <label htmlFor="filter_uploaded">
                        <input type="radio" value="All" id="filter_all" name="filter"/>
                    Uploaded
                    </label>
                </div>
                <div className="FilterOptions_option">
                    <label htmlFor="filter_synced">
                        <input type="radio" value="All" id="filter_all" name="filter"/>
                    Synced
                    </label>
                </div>
                <div className="FilterOptions_option">
                    <label htmlFor="filter_new">
                        <input type="radio" value="All" id="filter_all" name="filter"/>
                    New    
                    </label>
                </div>
            </div>
        );
    }

}

export default FilterOptions;