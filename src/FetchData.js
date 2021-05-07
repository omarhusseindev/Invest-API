import React, { Component, useState } from "react";
import InvestData from './data/current-loans.json'
import PopUp from './PopUp.js'
const FetchData = () => {
  const [data, setData] = useState(null);
  const [invest, setInvest] = useState(false);
  const [investAvailable, setInvestAvialable] = useState(false)
  const [buttonPopup, setButtonPopup] = useState(false)


    function getData(val){
      setData(val.target.value);
      setInvest(false);
      setInvestAvialable(false);
    }
    let totalValue = 0;
        return (
          <div className="main">
            <div className="header"> <h1>Current Loans</h1> </div>
            {InvestData.map((investDetails, index ) => {
              return(
                <div className={"LoanBox " + investDetails.tranche} key={investDetails.id}>
                    <div className="content">
                        <h4>Loan Name {index+1}</h4>
                        <p>Loan details, amounts and values</p>
                        <button onClick={() => setButtonPopup(true)}>INVEST</button>
                      </div>
                  </div>
                )
     
            })}
          <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                  {InvestData.map((investDetails, index ) => {
                    return  <div className={"investBox " + investDetails.tranche} key={investDetails.id}>
                                <div className="content">
                                    <h2><b>Invest in loan</b></h2>
                                    <h4>{investDetails.title}</h4>
                                    {
                                      investAvailable?
                                      <p>Amount Avilable: <span>£{parseInt(investDetails.available.replace(/\,/g, ''))-parseInt(data.replace(/\,/g, ''))}</span></p>
                                      :<p>Amount Avilable: <span>£{investDetails.available}</span></p>
                                    }
                                   
                                   
                                    <div className="Button">
                                      <p>Investment amount:(£)</p>
                                      <input type="text" onChange={getData}></input>
                                      <button onClick={() => setInvest(true)} onClick={() => setInvestAvialable(true)}>INVEST</button>
                                    
                                  </div>
                                  </div>
                            </div>
              
                  })}

          </PopUp>
              {InvestData.forEach(function(e){
                let totalAmount = e.amount.replace(/\,/g, '')
                let parseAmount = parseInt(totalAmount)
                totalValue += parseAmount
              })}


            <div className="totalAvailable"> Total amount avilable for investments: <span>£{totalValue}</span></div>
          
          </div>
        );

    
}

export default FetchData;



