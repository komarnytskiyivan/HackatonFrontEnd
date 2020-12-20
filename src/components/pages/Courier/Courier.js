import React, { Component, useEffect, useState,useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CustomItem from "../../CustomItem/CustomItem";
import "./Courier.css";
const Courier = () => {
    const [customs, setCustoms] = useState([]);
    const [currentCustom, setCurrentCustom] = useState([]);
  useEffect(() => {
    fetchData();
    setCurrentCustom({ready:false})
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://tymkiv.pp.ua/api/v1/order/`
      );
      const data = await response.json();
      setCustoms(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const AgreeCustom = async() =>{
    try {
      const response = await fetch(
        `http://tymkiv.pp.ua/api/v1/order/agree/${currentCustom.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDg0MzUyMjYsInN1YiI6IjEifQ.RFlDVoDUuXu_Gi5B7sHEWFyV44DbCE3la6FD3xlHkYE'
          },
        });
        fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }
  function ChangeCurrentCustom(username, items, id){
    setCurrentCustom({
      user: username,
      items: items,
      id: id,
      ready:true
    })
  }
    return (
        <div className='courier__hero-section pinkBg'>
            <div className="container">
                <div className="customer-header header">
                    <div className="header-user">
                        <div className="header-svg-container-courier courier-item">
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
                    <p className="header-text">{currentCustom.ready ? `Список товарів користувача ${currentCustom.user}` : "Будь-ласка, виберіть користувача"}</p>
                    <p className="describe-product">{currentCustom.items}</p>
                </div>
                <button type="submit" className={currentCustom.ready ? "active agree-button" : "notactive agree-button"} onClick={AgreeCustom}>Відправити заяву</button>
                </div>
                <div className="courier-customs courier-item">
                    <p className="text-main">Ви можете допомогти цим людям:</p>
                    {
                    customs.map((datumn, index) => {
                    return (
                      <button className="CustomItem" onClick={ () => {ChangeCurrentCustom(datumn.user.full_name, datumn.items, datumn.id)}} key={index}>
                        <CustomItem
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
