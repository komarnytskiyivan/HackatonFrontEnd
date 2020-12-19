import React, { Component, Fragment } from 'react'
import './Customer.css'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, ClearRefinements } from 'react-instantsearch-dom';
import Places from '../../places/widget';
function Customer() {
    const searchClient = algoliasearch(
        'latency',
        '6be0576ff61c053d5f9a3225e2a90f76'
      );
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
                    <div className="header-logo header-logo-text-customer">
                        <strong>COV</strong>OLUNTARY
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
                    <p className="header-text">Ваша адреса</p>
                    <InstantSearch indexName="airports" searchClient={searchClient}>
                <div className="search-panel">
                    <div className="search-panel__results">
                    <Places
                        defaultRefinement={{
                        lat: 37.7793,
                        lng: -122.419,
                        }}
                    />
                    <div style={{ height: 500 }}>
                    </div>
                    </div>
                </div>
                </InstantSearch>
                </div>
                <button type="submit" className="send-button">Відправити заяву</button>
                </div>
                <div className="customer-map customer-item">
                    <p className="header-text-main">Список необхідних товарів</p>
                    <textarea className="info-input info-input-textarea" size="18" placeholder="Напишіть що треба взяти..."></textarea>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
