import React from 'react'
import logo from '../assets/logo.png'
import search from '../assets/Search.png'
import cart from '../assets/cart.png'

const Layout = ({ children }) => {
    return (
        <>
            <div className="container">
                <header id="header" className="header">
                    <div className="nav">
                        <img src={logo} alt="Gamepad" className="logo" width="50" height="48" />
                        <ul className="menu">
                            <li>
                                <a href="#home">
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a href="#catalog">
                                    Каталог
                                </a>
                            </li>
                            <li>
                                <a href="#category">
                                    Категорий
                                </a>
                            </li>
                            <li>
                                <a href="#popular">
                                    Популярные игры
                                </a>
                            </li>
                        </ul>
                        <div className="wrap">
                            <div className="search">
                                <input type="text" className="searchTerm" placeholder="Искать игру" />
                                <button type="submit" className="searchButton">
                                    <img src={search} height="19" alt="Search" className="search" />
                                </button>
                            </div>
                        </div>
                        <img src={cart} alt="Search" className="cart" />
                    </div>
                </header>
            </div>
                {children}
            <footer>
                <h5>© 2012–2021 GAMESHOP</h5>
                <p>Все права защищены. Полное или частичное копирование материалов сайта без согласования с администрацией запрещено!
                    Все названия игр, компаний, торговых марок, логотипы и игровые материалы являются собственностью соответствующих владельцев.</p>
            </footer>
        </>
    )
}

export default Layout