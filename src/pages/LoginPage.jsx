import React,{useState} from "react";
import {Link} from "react-router-dom";
import arrow from  '../assets/arrow.png'

const LoginPage = () => {
    return(
        <>

            <div className="login-container">

            <div className="left-side">
                <Link to='/'>
                    <img src={arrow} alt='arrow' className='arrow'/>
                </Link>
                <span className="auth-title">Sign Up</span>
                <hr className="hr-nahu"/>
            </div>
            <div className="right-side">
                <div>
                    <form>
                        <div className="login-group">
                            <h4 className="input-title">Электронная почта</h4>
                            <input className="login-input" type="text" required placeholder="Пример: example.com"/>
                        </div>
                        <div className="login-group">
                            <h4 className="input-title">Пароль</h4>
                            <input className="login-input" type="text" required placeholder="Ваш пароль"/>
                        </div>
                    </form>
                    <div>
                        <Link to="/">
                            <button className="login-button">
                                Войти
                            </button>
                        </Link>

                        <span className="register-span">Если нет аккаунта -  <Link to="/register" className="register-link">зарегистрируйтесь</Link></span>

                    </div>

                </div>
            </div>
        </div>
        </>

    )
}

export  default LoginPage
