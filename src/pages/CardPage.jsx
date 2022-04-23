import Layout from '../layout/Layout'
import '../css/Card.css'
const CardPage = () => {
    return (
        <Layout>
            <div class='CardSec'>
                <div className='wrapper'>
                    <div class="CardDiv">
                        <div class='korzina'>Корзина</div>
                        <div class='item'>
                            <div className='img'><img src="https://lololoshkashop.net/img/goods/gallery/10/76/original.jpg" width="250px"/></div>
                            <div class='desc'>Ключ Minecraft: Windows 10 Edition (Bedrock Edition)</div>
                            <div class='cardprice'>5000tg</div>
                        </div>
                        <div class='item'>
                            <div className='img'><img src="https://lololoshkashop.net/img/goods/gallery/10/76/original.jpg" width="250px"/></div>
                            <div class='desc'>Ключ Minecraft: Windows 10 Edition (Bedrock Edition)<br/> <span class='descInfo'>Описание</span>
                            </div>
                            <div class='cardprice'>5000tg</div>
                        </div>
                    </div>


                    <div class="price">
                    <div class='korzina'>Сумма заказа</div>
                        <div class='sum'>Общая сумма заказа: "spodkafgosjdg"</div>
                        <button class='confirmation'>Купить</button>

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CardPage;
