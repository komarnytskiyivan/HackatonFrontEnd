import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CustomItem from "../../CustomItem/CustomItem";
import "./Courier.css";
function Courier() {
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
                    <CustomItem/>
                    <CustomItem/>
                    <CustomItem/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Courier
