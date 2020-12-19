import React from 'react'
import './Customer.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function Customer() {
    return (
        <div className='customer__hero-section blueBg'>
            <div className="container">
                <div className="customer-header header">
                    <div className="header-user">
                        <div className="header-svg-container customer-item">
                            <img src="./assets/svg/Hand.svg" alt="Hi,customer" className="header-hi"/>
                        </div>
                        <p className="user-text">Вітаємо, Юзернейм!</p>
                    </div>
                    <div className="header-logo">
                        <img src="./assets/COVOLUNTARY.png" alt="Logo" className="header-logo-ing"/>
                    </div>
                </div>
                <div className="flex-main">
                <div className="flex-item-config">
                <div className="info-select customer-item">
                    <p className="header-text">Вкажіть контакти</p>
                    <div className="info-inputs">
                    <input type="text" className="info-input" size="18" placeholder="Ваше ім'я..."></input>
                    <input type="text" className="info-input" size="18" placeholder="Ваш номер"></input>
                    </div>
                </div>
                <div className="product-list customer-item">
                    <p className="header-text">Список необхідних товарів</p>
                    <img src="./assets/svg/plus.svg" alt="AddProducts" className="add-products"/>
                </div>
                </div>
                <div className="customer-map customer-item"></div>
                
                </div>
                <button type="submit" className="send-button">Відправити заяву</button>
            </div>
        </div>
    )
}

export default Customer
