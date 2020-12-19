import React from 'react'
import './CustomItem.css'
function CustomItem() {
    return (
        <div className="CustomItem">
            <div className="user-info">
                <div className="user-info-item">
                    <img src="./assets/svg/user.svg" alt="user"/>
                    <span className="user-info-text">Max</span>
                </div>
                <div className="user-info-item">
                    <img src="./assets/svg/phone.svg" alt="phone"/>
                    <span className="user-info-text">Max</span>
                </div>
                <div className="user-info-item">
                    <img src="./assets/svg/map.svg" alt="map"/>
                    <span className="user-info-text">Max</span>
                </div>
            </div>
            <div className="show-map">
                <img src="./assets/svg/showmap.svg" alt="ShowOnMap"/>
                <p>Відкрити на мапі</p>
            </div>
        </div>
    )
}

export default CustomItem
