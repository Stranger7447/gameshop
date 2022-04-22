import React from 'react'
import Layout from '../layout/Layout'
import catalog1 from '../assets/catalog1.jpg'
import catalog2 from '../assets/catalog2.jpg'
import catalog3 from '../assets/catalog3.jpg'
import catalog4 from '../assets/catalog4.jpg'
import catalog5 from '../assets/catalog5.jpg'
import catalog6 from '../assets/catalog6.jpg'
import catalog7 from '../assets/catalog7.jpg'
import catalog8 from '../assets/catalog8.jpg'
import planet from '../assets/planet.png'
import bonfire from '../assets/bonfire.png'
import game1 from '../assets/game1.jpg'
import game2 from '../assets/game2.jpg'
import game3 from '../assets/game3.jpg'
import game4 from '../assets/game4.jpg'
import game5 from '../assets/game5.jpg'
import game6 from '../assets/game6.jpg'
import rocket from '../assets/rocket.png'
import target from '../assets/target.png'
import sword from '../assets/sword.png'
import skull from '../assets/skull.png'
import emoji from '../assets/emoji.png'
import wand from '../assets/magic-wand.png'
import Slider from '../compontets/Slider'


const HomePage = () => {
    return (
        <Layout>
            <Slider />
            <section className="offer">
                <h1>Game Shop</h1>
                <p>В нашем интернет-магазине вы сможете гарантированно приобрести ключи к играм от Steam, Uplay, Battle.net и прочих популярных игровых платформ. Наш магазин делает все для того, чтобы ваши покупки проходили быстро, с максимальным удобством и безопасностью, а цены оставались максимально доступными.</p>
            </section>
            <div className="container">
                <section className="catalog" id="catalog">
                    <div className="section-top">
                        <h2>Каталог</h2>
                    </div>
                    <div className="first-cards">
                        <div className="card">
                            <img src={catalog1} alt="catalog1" style={{ width: "100%" }} />
                            <div className="card-container">
                                <h4><b>Steam Random Аккаунт</b></h4>
                                <p>2000тг</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={catalog2} alt="catalog2" style={{ width: "100%" }} />
                            <div className="card-container">
                                <h4><b>Origin Random Аккаунт</b></h4>
                                <p>2000тг</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={catalog3} alt="catalog3" style={{ width: "100%" }} />
                            <div className="card-container">
                                <h4><b>Ключ Terraria</b></h4>
                                <p>500тг</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={catalog4} alt="catalog4" style={{ width: "100%" }} />
                            <div className="card-container">
                                <h4><b>Ключ Beholder</b></h4>
                                <p>500тг</p>
                            </div>
                        </div>
                    </div>
                    <div className="second-cards">
                        <div className="card">
                            <img src={catalog5} alt="catalog5" style={{ width: "100%" }} />
                            <div className="card-container">
                                <h4><b>Ключ Human: Fall Flat</b></h4>
                                <p>800тг</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={catalog6} alt="catalog6" style={{ width: "100%" }} />
                            <div className="card-container">
                                <h4><b>Streets of Rogue</b></h4>
                                <p>800тг</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={catalog7} alt="catalog7" style={{ width: "100%" }} />
                            <div className="card-container">
                                <h4><b>Ключ Horizon Zero Dawn</b></h4>
                                <p>1500тг</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={catalog8} alt="catalog8" style={{ width: "100%" }} />
                            <div className="card-container">
                                <h4><b>Ключ Ведьмак</b></h4>
                                <p>2000тг</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="bg-category">
                <div className="container">
                    <section className="category" id="category">
                        <div className="section-top">
                            <h2 style={{ color: "#fff" }}>Категории</h2>
                        </div>
                        <div className="first-categories">
                            <div className="category-container">
                                <div className="category-img">
                                    <img src={planet} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="category-text">
                                    <h4><b>Открытый мир</b></h4>
                                </div>
                            </div>
                            <div className="category-container">
                                <div className="category-img">
                                    <img src={bonfire} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="category-text">
                                    <h4><b>Выживание</b></h4>
                                </div>
                            </div>
                            <div className="category-container">
                                <div className="category-img">
                                    <img src={rocket} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="category-text">
                                    <h4><b>Космос</b></h4>
                                </div>
                            </div>
                            <div className="category-container">
                                <div className="category-img">
                                    <img src={target} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="category-text">
                                    <h4><b>От первого лица</b></h4>
                                </div>
                            </div>
                            <div className="category-container">
                                <div className="category-img">
                                    <img src={sword} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="category-text">
                                    <h4><b>Кооператив</b></h4>
                                </div>
                            </div>
                            <div className="category-container">
                                <div className="category-img">
                                    <img src={skull} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="category-text">
                                    <h4><b>Хоррор</b></h4>
                                </div>
                            </div>
                            <div className="category-container">
                                <div className="category-img">
                                    <img src={emoji} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="category-text">
                                    <h4><b>Смешная</b></h4>
                                </div>
                            </div>
                            <div className="category-container">
                                <div className="category-img">
                                    <img src={wand} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="category-text">
                                    <h4><b>Магия</b></h4>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container">
                <section className="popular" id="popular">
                    <div className="section-top">
                        <h2>Популярные игры</h2>
                    </div>
                    <div className="popular-columns">
                        <div className="first-column">
                            <div className="popular-container">
                                <div className="popular-img">
                                    <img src={game1} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="popular-text">
                                    <h4>Metro Exodus</h4>
                                    <p>Экшены, Приключения</p>
                                </div>
                                <button>Купить</button>
                            </div>
                            <div className="popular-container">
                                <div className="popular-img">
                                    <img src={game2} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="popular-text">
                                    <h4>Need for Speed: Hot Pursuit Remastered</h4>
                                    <p>Экшены, Приключения</p>
                                </div>
                                <button>Купить</button>
                            </div>
                            <div className="popular-container">
                                <div className="popular-img">
                                    <img src={game3} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="popular-text">
                                    <h4>Frostpunk (GOG)</h4>
                                    <p>Стратегии, Симуляторы</p>
                                </div>
                                <button>Купить</button>
                            </div>
                        </div>
                        <div className="second-column">
                            <div className="popular-container">
                                <div className="popular-img">
                                    <img src={game4} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="popular-text">
                                    <h4>World War Z: Aftermath</h4>
                                    <p>Экшены</p>
                                </div>
                                <button>Купить</button>
                            </div>
                            <div className="popular-container">
                                <div className="popular-img">
                                    <img src={game5} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="popular-text">
                                    <h4>BioShock The Collection</h4>
                                    <p>Экшены</p>
                                </div>
                                <button>Купить</button>
                            </div>
                            <div className="popular-container">
                                <div className="popular-img">
                                    <img src={game6} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="popular-text">
                                    <h4>Risen</h4>
                                    <p>RPG</p>
                                </div>
                                <button>Купить</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default HomePage