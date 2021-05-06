import React, { Component } from "react";
import InvestData from './data/current-loans.json'

class FetchData extends Component {
  render() {
        return (
          <div>
            <h1>Hello There</h1>
            {InvestData.map((investDetails, index ) => {
              return <h1>{investDetails.title}</h1>
            })}
          </div>
        );
    }
}

export default FetchData;
