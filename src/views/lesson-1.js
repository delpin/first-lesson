import './lesson-1.css';
function Lesson1() {
    return (
        <div className="root">
            {<div className='page'>
                <div className='header'>
                    <div className='logo'>
                        <img alt="Яндекс" className="logo-img" src="//yastatic.net/q/logoaas/v2/Яндекс.svg?size=25&amp;color=000"/>
                    </div>
                </div>
                <div className='content col center'>
                    <div className='title'>
                        <h2>Как сделать Яндекс главным по поиску</h2>
                    </div>
                    <div className='center flex col'>
                        <a className="link" 
                        href="https://chrome.google.com/webstore/detail/%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D0%B8-%D1%81%D1%82%D0%B0%D1%80%D1%82%D0%BE%D0%B2%D0%B0%D1%8F-%E2%80%94-%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA/nehapofakghljopfegjogpgpeljkhjjn?utm_source=main&amp;utm_medium=popup&amp;utm_campaign=sethome_L&amp;from=popup_main_Chrome_sethome_macos&amp;yclid=3932121594700813314" 
                        data-clickable="true" data-log-node="0--100">
                            <div className="button">
                                <span className="button_text">
                                    <span>Установить расширение</span>
                                </span>
                            </div>
                        </a>
                        <div className="text-block">
                            <div className="text flex">
                                <span>Устанавливая программу, вы принимаете условия <a href="http://legal.yandex.ru/desktop_software_agreement/?utm_source=main&amp;utm_medium=popup&amp;utm_campaign=sethome_L&amp;from=popup_main_Chrome_sethome_macos&amp;yclid=3932121594700813314" data-smooth-scroll="true">Лицензионного соглашения</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <section id="less-1">
                        <div className="items">
                            <section className='flex col center'>
                                <div className='image flex'>
                                    <img className="less-img" src="https://avatars.mds.yandex.net/get-lpc/1531919/6a1c901a-ee13-46af-9bb6-08d8e6360e0a/width_360" alt=""/>
                                </div>
                                <div className="text">
                                    <h4>Установите расширение из Google Chrome Store</h4>
                                </div>
                            </section>
                            <section className='flex col center'>
                                <div className='image flex'>
                                    <img className="less-img" src="https://avatars.mds.yandex.net/get-lpc/1531919/f4b4d03e-934b-4b11-b9de-e2d4e649578f/width_360" alt=""/>
                                </div>
                                <div className="text">
                                    <h4>Активируйте его, нажав на иконку у адресной строки</h4>
                                </div>
                            </section>
                            <section className='flex col center'>
                            <div className='image flex'>
                                    <img className="less-img" src="https://avatars.mds.yandex.net/get-lpc/1520633/3ed38931-24c1-49ed-931e-912985601262/width_360" alt=""/>
                                </div>
                                <div className="text">
                                    <h4>Спрашивайте у Яндекса на стартовой и в адресной строке</h4>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
                <div className='footer'>
                    <div className="foot-text">
                        <div>© 2020 Яндекс</div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default Lesson1;