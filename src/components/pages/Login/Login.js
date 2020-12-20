import React,{ useRef } from 'react'
import './Login.css'
function Login() {
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
            console.log(data.access_token)
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
                    <label htmlfor="login-username field field_v1">Ваш e-mail</label>
                    <input type="text" name="username" ref={usernameRef} id="login-username" className="input-text login-form" placeholder="pipipoopoo@gmail.com"/>
                    <label htmlfor="login-password">Ваш пароль</label>
                    <input type="text" name="username" ref={passwordRef} id="login-password" className="input-text login-form" placeholder="Введіть пароль"/>
                    <button type="submit" onClick={LoginUser} className="login-button">Вхід</button>
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
