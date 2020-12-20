import React,{ useRef, useState } from 'react'
import { Link } from "react-router-dom";
import './Login.css'
function Login() {
    const [token, setToken] = useState([]);
    let usernameRef = useRef(null)
    let passwordRef = useRef(null)
    const LoginUser = async() =>{
        let formData = new FormData();
    formData.append('username', usernameRef.current.value);
    formData.append('password', passwordRef.current.value);
        try {
          const response = await fetch(
            `http://tymkiv.pp.ua/api/v1/user/login/access-token`, {
              method: 'POST',
              body: formData
            })
            const data = await response.json();
            setToken({
                token: `Bearer ${data.access_token}`
            })
            console.log(token)
        } catch (error) {
          console.log(error.message);
        }
      }
    return (
        <div>
            <div className='customer__hero-section whiteBg'>
            <div className="container">
                <div className="flex-main">
                <div className="login-form">
                    <p>Вхід</p>
                    <label htmlFor="login-username field field_v1">Ваш e-mail</label>
                    <input type="text" name="username" ref={usernameRef} id="login-username" className="input-text login-form" placeholder="pipipoopoo@gmail.com"/>
                    <label htmlFor="login-password">Ваш пароль</label>
                    <input type="text" name="username" ref={passwordRef} id="login-password" className="input-text login-form" placeholder="Введіть пароль"/>
                    <button type="submit" onClick={LoginUser} className="login-button">Вхід</button>
                    {token.token ? <div><p>Choose your role</p>
                    <div className="choose-role">
                    <Link to={{ pathname:"./Customer", token:{token}}}>
                    <div className="choose-item">
                    <div className="header-svg-container-customer customer-item">
                        <img src="./assets/svg/Hand.svg" alt="Hi,customer" className="header-hi"/>
                    </div>
                    </div>
                    </Link>
                    <div className="choose-item">
                    <Link to={{ pathname:"./Courier", token:{token}}}>
                    <div className="header-svg-container-courier courier-item">
                        <img src="./assets/svg/Union.svg" alt="Hi,courier" className="header-hi"/>
                    </div>
                    </Link>
                    </div>
                    </div></div> : <div></div>}
                    
                </div>
                <div className="login-img">
                <img src="./assets/Login.png" alt="Login"/>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login
