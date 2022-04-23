import React from 'react'
import {Link} from "react-router-dom";
import arrow from "../assets/arrow.png";

const RegisterPage = () => {
  return (
      <div className="login-container">
        <div className="left-side">
          <Link to='/'>
            <img src={arrow} alt='arrow' className='arrow'/>
          </Link>
          <span className="auth-title">Registration</span>
          <hr className="hr-nahu"/>
        </div>
        <div className="right-side">
          <div>
            <form>
              <div className="login-group">
                <h4 className="input-title">Полное имя</h4>
                <input className="login-input" type="text" required placeholder="Пример: Тимур Касымтай"/>
              </div>
              <div className="login-group">
                <h4 className="input-title">Электронная почта</h4>
                <input className="login-input" type="text" required placeholder="Пример: example.com"/>
              </div>
              <div className="login-group">
                <h4 className="input-title">Пароль</h4>
                <input className="login-input" type="text" required placeholder="Ваш пароль"/>
              </div>
              <div className="login-group">
                <h4 className="input-title">Телефон номера</h4>
                <input className="login-input" type="text" required placeholder="+77777777"/>
              </div>

              <div className="assign">
                <input type='checkbox'/>
                <span className="agree-ass">Вы соглашаетесь идти на#уй</span>
              </div>
            </form>
            <div>
              <Link to="/">
                <button className="login-button">
                  Войти
                </button>
              </Link>

              <span className="register-span">Если есть аккаунт -  <Link to="/login"
                                                                         className="register-link">войдите</Link></span>

            </div>

          </div>
        </div>
      </div>
  )
}

export default RegisterPage
