import React from 'react'
import original from '../assets/original.jpg'
import Layout from '../layout/Layout'
import '../item.css'

const ItemPage = () => {
  return (
    <Layout>
        <div className="container">
            <div className="item">
                <div className="item__title">
                    <h2>Ключ Minecraft: Windows 10 Edition (Bedrock Edition)</h2>
                </div>
                <div className="item__body">
                    <div className="item__img">
                        <img src={original} alt="" />
                    </div>
                    <div className="item__info">
                        <h5 className='item__price'>5000 тг</h5>
                        <p>Вы получите 50тг кэшбэк</p>
                        <button className='item__button'>
                            Купить сейчас
                        </button>
                        <h6>Информация об игре</h6>
                        <div className='item__info2'>
                            <div>
                                <p>Жанр</p>
                                <p>Платформа</p>
                                <p>Тип</p>
                            </div>
                            <div>
                                <p>Simulator</p>
                                <p>Minecraft</p>
                                <p>Нейсвестен</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item__description">
                    <p>После покупки Вы получаете ключ от Minecraft: Windows 10 Edition (Bedrock Edition).</p>
                    <p>Windows 10 Edition поддерживает возможность играть с 7 игроками одновременно с помощью Xbox Live, а также с 10 другими игроками Bedrock Edition через Minecraft Realms, либо по локальной многопользовательской игре.
Различные схемы управления;
Использование структурного блока;
Обратная связь с игроками;
Возможность записи и распространения игрового процесса с помощью Xbox DVR.
Возможность вести трансляции на платформе Mixer.</p>
<p></p>
<p>Если у Вас возникнут проблемы с активацией - смело обращайтесь в поддержку, мы поможем активировать ключ!
Активация:
1. Установите VPN: Hola VPN (Расширение работает в браузере Opera).
2. Переходим на сайт https://redeem.microsoft.com.
3. Устанавливаем в VPN регион Аргентина.
4. Обновляете страницу.
5. Активируете ключ на свою учетную запись.
VPN нужен только для активации. Играть можете без VPN.</p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default ItemPage