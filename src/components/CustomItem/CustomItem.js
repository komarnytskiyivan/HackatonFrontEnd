import React from 'react'
import './CustomItem.css'
function CustomItem(props) {
    return (
        <div className="item-main">
            <div className="user-info">
                <div className="user-info-item">
                    <img src="./assets/svg/user.svg" alt="user"/>
                    <span className="user-info-text">{props.name}</span>
                </div>
                <div className="user-info-item">
                    <img src="./assets/svg/phone.svg" alt="phone"/>
                    <span className="user-info-text">{props.phone}</span>
                </div>
                <div className="user-info-item">
                    <img src="./assets/svg/map.svg" alt="map"/>
                    <span className="user-info-text">{props.address}</span>
                </div>
            </div>
            <div className="show-map">
                <a href={props.adress}>
                <img src="./assets/svg/showmap.svg" alt="ShowOnMap"/>
                <p className="showonmap-text">Відкрити на мапі</p>
                </a>
            </div>
        </div>
    )
}

export default CustomItem
