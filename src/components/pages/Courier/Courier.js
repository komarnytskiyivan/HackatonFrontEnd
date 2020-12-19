import React, { Component, useEffect, useState,useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CustomItem from "../../CustomItem/CustomItem";
import "./Courier.css";
function Courier() {
    const [customs, setCustoms] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://2le7g8.deta.dev/api/v1/order/?skip=0&limit=100`
      );
      const data = await response.json();
      setCustoms(data);
    } catch (error) {
      console.log(error.message);
    }
  };
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
                    <div className="header-logo">
                        <p className="header-logo-text"><strong>COV</strong>OLUNTARY</p>
                    </div>
                </div>
                <div className="flex-main">
                <div className="flex-item-config">
                <div className="courier-item list-products">
                    <p className="header-text">Список товарів Максима</p>
                    <ul className="products">
                    <li>Первый пункт</li>
                    <li>Второй пункт</li>
                    <li>Третий пункт</li>
                    </ul>
                </div>
                <button type="submit" className="agree-button">Відправити заяву</button>
                </div>
                <div className="courier-customs courier-item">
                    <p className="text-main">Ви можете допомогти цим людям:</p>
                    {
                    customs.map((datumn) => {
                    return (
                        <CustomItem
                        />
                    );
                })}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Courier
