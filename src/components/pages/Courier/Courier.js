import React, { Component, useEffect, useState,useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CustomItem from "../../CustomItem/CustomItem";
import "./Courier.css";
const Courier = (variable = true) => {
    const [customs, setCustoms] = useState([]);
    const [currentCustom, setCurrentCustom] = useState(variable ? true : false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://2le7g8.deta.dev/api/v1/order/?skip=0&limit=2`
      );
      const data = await response.json();
      setCustoms(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  function ChangeCurrentCustom(username, custom){
    console.log(1)
    setCurrentCustom({
      user: username
    })
  }
    return (
        <div className='courier__hero-section pinkBg'>
            <div className="container">
                <div className="customer-header header">
                    <div className="header-user">
                        <div className="header-svg-container courier-item">
                            <img src="./assets/svg/Union.svg" alt="Hi,courier" className="header-hi"/>
                        </div>
                        <p className="user-text">Вітаємо, Юзернейм!</p>
                    </div>
                    <div className="header-logo header-logo-text">
                        <strong>COV</strong>OLUNTARY
                    </div>
                </div>
                <div className="flex-main">
                <div className="flex-item-config">
                <div className="courier-item list-products">
                    <p className="header-text">Список товарів користувача {currentCustom.user}</p>
                </div>
                <button type="submit" className="agree-button">Відправити заяву</button>
                </div>
                <div className="courier-customs courier-item">
                    <p className="text-main">Ви можете допомогти цим людям:</p>
                    {
                    customs.map((datumn, index) => {
                    return (
                        
                          <button onClick={ () => {ChangeCurrentCustom(datumn.user.full_name)}}>
                            <CustomItem
                              key={index}
                              name={datumn.user.full_name}
                              phone={datumn.user.phone_number}
                              address={datumn.address}
                            />
                          </button>
                        );
                })}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Courier
