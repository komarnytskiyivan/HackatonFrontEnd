import React, { Component, Fragment, useRef } from 'react'
import './Customer.css'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, ClearRefinements } from 'react-instantsearch-dom';
import Places from '../../places/widget';
function Customer() {
    let addressRef = useRef(null);
    let nameRef = useRef(null);
    let phoneRef = useRef(null);
    let itemsRef = useRef(null);
    const searchClient = algoliasearch(
        'latency',
        '6be0576ff61c053d5f9a3225e2a90f76'
      );
      const AddCustom = async() =>{
        try {
          const response = await fetch(
            `http://tymkiv.pp.ua/api/v1/order/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDg0MzgyNjgsInN1YiI6IjEifQ.t6uCBI77Dm500SAMJi_FJj93qb-go7Cvp32HG7jAaJE'
              },
              body: {"address": addressRef.current.value,
              "price": true,
              "items": itemsRef.current.value,
              "full_name": nameRef.current.value,
              "phone_number": phoneRef.current.value}
            });
        } catch (error) {
          console.log(error.message);
        }
      }
    return (
        <div className='customer__hero-section blueBg'>
            <div className="container">
                <div className="customer-header header">
                    <div className="header-user">
                        <div className="header-svg-container-customer customer-item">
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
                    <input type="text" className="info-input" size="18" ref={nameRef} placeholder="Ваше ім'я..."></input>
                    <input type="text" className="info-input" size="18" ref={phoneRef} placeholder="Ваш номер"></input>
                    </div>
                </div>
                <div className="product-list customer-item">
                    <p className="header-text">Ваша адреса</p>
                    <InstantSearch ref={addressRef} indexName="airports" searchClient={searchClient}>
                <div className="search-panel">
                    <div className="search-panel__results">
                    <Places
                        defaultRefinement={{
                        lat: 37.7793,
                        lng: -122.419,
                        }}
                    />
                    <div style={{ height: 50 }}>
                    </div>
                    </div>
                </div>
                </InstantSearch>
                </div>
                <button type="submit" onClick={AddCustom} className="send-button">Відправити заяву</button>
                </div>
                <div className="customer-map customer-item">
                    <p className="header-text-main">Список необхідних товарів</p>
                    <textarea className="info-input info-input-textarea" ref={itemsRef} size="18" placeholder="Напишіть що треба взяти..."></textarea>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
