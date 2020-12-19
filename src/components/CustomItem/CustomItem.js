import React from 'react'
import './CustomItem.css'
function CustomItem(props) {
    return (
        <div className="CustomItem">
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
                    <span className="user-info-text">{props.locate}</span>
                </div>
            </div>
            <div className="show-map">
                <a href={props.locate}>
                <img src="./assets/svg/showmap.svg" alt="ShowOnMap"/>
                <p>Відкрити на мапі</p>
                </a>
            </div>
        </div>
    )
}

export default CustomItem
