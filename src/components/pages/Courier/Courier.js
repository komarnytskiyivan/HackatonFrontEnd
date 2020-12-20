import React, { useEffect, useState } from "react";
import CustomItem from "../../CustomItem/CustomItem";
import "./Courier.css";
const Courier = (props) => {
    const [customs, setCustoms] = useState([]);
    const [currentCustom, setCurrentCustom] = useState([]);
    const [name, setName] = useState([]);
  useEffect(() => {
    fetchData();
    fetchName();
    setCurrentCustom({ready:false})
  }, []);
  const fetchName= async () => {
    try {
      const response = await fetch(
        `http://tymkiv.pp.ua/api/v1/user/me`, {
          method: 'GET',
          headers: {
            'Authorization':`${props.location.token.token.token}`
          }
        });
      const data = await response.json();
      setName(data.full_name);
    } catch (error) {
      console.log(error.message);
    }
  };
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
            'Authorization':`${props.location.token.token.token}`
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
                        <p className="user-text">Вітаємо, Кур'єр {name}!</p>
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
                <button type="submit" className={currentCustom.ready ? "active agree-button" : "notactive agree-button"} onClick={AgreeCustom}>Прийняти замовлення</button>
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
