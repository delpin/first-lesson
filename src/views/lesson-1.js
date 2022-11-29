// import './lesson-1.css';
import './lesson-1.scss';

function Lesson1() {
    return (
        <div className="root">
            <div className='wrapper'>
                <header className="header">
                    <div className="header__container">
                        <img src="https://yastatic.net/q/logoaas/v2/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg?size=25&color=000" alt="yandex home"></img>
                    </div>
                </header>

                <main className="main">
                    <div className="main__container">
                        <div className="main__content">
                            <h1 className="main__subtitle">Как сделать Яндекс главным по поиску</h1>
                            <p className="main__button-download"><a href="https://chrome.google.com/webstore/detail/%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D0%B8-%D1%81%D1%82%D0%B0%D1%80%D1%82%D0%BE%D0%B2%D0%B0%D1%8F-%E2%80%94-%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA/nehapofakghljopfegjogpgpeljkhjjn?from=popup_main_Chrome_sethome_macos&utm_campaign=sethome_L&utm_medium=popup&utm_source=main&yclid=3932121594700813314">Установить расширение</a>
                            </p>
                            <p className="main__description">
                                Устанавливая программу, вы&nbsp;принимаете условия <span><a href="http://legal.yandex.ru/desktop_software_agreement/?from=popup_main_Chrome_sethome_macos&utm_campaign=sethome_L&utm_medium=popup&utm_source=main&yclid=3932121594700813314">Лицензионного соглашения</a></span>
                            </p>

                            <section className="cards">
                                <div className="cards__container">
                                    <div className='cards__block'>
                                        <div className="cards__item">
                                            <img className="cards__item-img" src="https://avatars.mds.yandex.net/get-lpc/1531919/6a1c901a-ee13-46af-9bb6-08d8e6360e0a/width_360_q70" srcset="https://avatars.mds.yandex.net/get-lpc/1531919/6a1c901a-ee13-46af-9bb6-08d8e6360e0a/width_360x2_q70 2x" loading="lazy" alt='install button'></img>
                                            <p className="cards__item-text">Установите расширение из&nbsp;Google Chrome Store</p>
                                        </div>

                                        <div className="cards__item">
                                            <img className="cards__item-img" src="https://avatars.mds.yandex.net/get-lpc/1531919/f4b4d03e-934b-4b11-b9de-e2d4e649578f/width_360_q70" srcset="https://avatars.mds.yandex.net/get-lpc/1531919/f4b4d03e-934b-4b11-b9de-e2d4e649578f/width_360x2_q70 2x" loading="lazy" alt='activate instruction'></img>
                                            <p className="cards__item-text">Активируйте его, нажав на&nbsp;иконку у&nbsp;адресной строки</p>
                                        </div>

                                        <div className="cards__item">
                                            <img className="cards__item-img" src="https://avatars.mds.yandex.net/get-lpc/1520633/3ed38931-24c1-49ed-931e-912985601262/width_360_q70" srcset="https://avatars.mds.yandex.net/get-lpc/1520633/3ed38931-24c1-49ed-931e-912985601262/width_360x2_q70 2x" alt='ask Yandex for help'></img>
                                            <p className="cards__item-text">Спрашивайте у&nbsp;Яндекса на&nbsp;стартовой и&nbsp;в&nbsp;адресной строке</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>

                <footer className="footer">
                    <div className="footer__container">
                        <p className="footer__content">&copy; 2020 Яндекс</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Lesson1;