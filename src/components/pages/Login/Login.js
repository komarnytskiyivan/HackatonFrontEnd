import React from 'react'
import './Login.css'
function Login() {
    return (
        <div>
            <div className='customer__hero-section whiteBg'>
            <div className="container">
                <div className="flex-main">
                <div className="login-form page">
                    <p>Вхід</p>
                    <label for="login field field_v1">Ваш e-mail</label>
                    <input type="text" name="username" id="login" className="input-text omrs-input-underlined omrs-input-danger" placeholder="pipipoopoo@gmail.com"/>
                    <label for="login">Ваш пароль</label>
                    <input type="text" name="username" id="login" className="input-text form__field" placeholder="Введіть пароль"/>
                    <button type="submit" className="login-button">Вхід</button>
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
