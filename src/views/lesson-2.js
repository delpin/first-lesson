import './lesson-2.css';
import './addLesson-2.js';

function Lesson2() {
    return (
        <div className="root">
                <nav className="navbar">
            <div className='navbar-container'>
                    <div className="toggle-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="https://youtube.com" title="link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/1cf2b43c5f8ff2eb0dc271927579c84067cd2e5d/img/youTube_logo.svg" className="logo" alt="" /></a>
                    <div className="search-box">
                        <div className="searchbar__position">
                            <input type="text" className="search-bar" placeholder="Введите запрос" />
                            <button class="keyboard-btn" type="button" title="button"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/1ba7693b29bf9c66b6b09961e5cce440ff92bb70/img/keyboard.svg" alt="" /></button>
                            <button className="search-btn" type="button" title="button"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/1cf2b43c5f8ff2eb0dc271927579c84067cd2e5d/img/search_ico.svg" alt="" /></button>
                        </div>
                    </div>
                    <div className="user-options">
                        <img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/video-add.svg" className="icon" alt="" />
                        <img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/grid.svg" className="icon" alt="" />
                        <img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/bell.svg" className="icon" alt="" />

                        <div className="user-dp">
                            <img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/user.svg" alt="" />
                        </div>
                    </div>
            </div>
                </nav>

            {/* sidebar */}
            <nav className="sidebar">
                <ul className="sidebar">
                    <li className="sedibar__item"><a href="home" className="item-link active"><img src="https://github.com/solidados/youtube_clone/blob/main/img/home_ico.png?raw=true"
                        alt="" />Главная</a></li>
                    <li className="sedibar__item"><a href="home" className="item-link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/shorts-ico.svg" alt="" />Shorts</a>
                    </li>
                    <li className="sedibar__item"><a href="home" className="item-link"><img src="https://github.com/solidados/youtube_clone/blob/main/img/subscribe_ico.png?raw=true"
                        alt="" />Подписки</a></li>
                    <li className="sidebar__item">
                        <hr className="seperator" />
                    </li>
                    <li className="sedibar__item"><a href="home" className="item-link"><img src="https://github.com/solidados/youtube_clone/blob/main/img/library_ico.png?raw=true"
                        alt="" />Библиотека</a></li>
                    <li className="sedibar__item"><a href="home" className="item-link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/history.svg" alt="" />История</a>
                    </li>
                    <li className="sedibar__item"><a href="home" className="item-link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/your-videos.svg" alt="" />Ваши
                        видео</a></li>
                    <li className="sedibar__item"><a href="home" className="item-link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/watch-later.svg" alt="" />Смотреть
                        позже</a></li>
                    <li className="sedibar__item"><a href="home" className="item-link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/downloaded.svg"
                        alt="" />Скачанные</a></li>
                    <li className="sedibar__item"><a href="home" className="item-link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/liked(1).svg"
                        alt="" />Понравившиеся</a></li>
                    <li className="sedibar__item"><a href="home" className="item-link"><img src="https://github.com/solidados/youtube_clone/blob/main/img/show%20more.PNG?raw=true"
                        alt="" />Развернуть</a></li>
                </ul>
            </nav>

            {/* filters */}
            {/* <ul className="filters">
                <li className="filters-items"><button className="filter-options">Все</button></li>
                <li className="filters-items"><button className="filter-options">Музыка</button></li>
                <li className="filters-items"><button className="filter-options">Сейчас в эфире</button></li>
                <li className="filters-items"><button className="filter-options"></button>Джемы</li>
                <li className="filters-items"><button className="filter-options"></button>JavaScript</li>
                <li className="filters-items"><button className="filter-options"></button>Природа</li>
                <li className="filters-items"><button className="filter-options"></button>Последние опубликованные</li>
                <li className="filters-items"><button className="filter-options"></button>Просмотрено</li>
                <li className="filters-items"><button className="filter-options"></button>Новое для вас</li>
            </ul> */}
            <div className="filters">
                <button className="filter-options active">Все</button>
                <button className="filter-options">Музыка</button>
                <button className="filter-options">Сейчас в эфире</button>
                <button className="filter-options">Джемы</button>
                <button className="filter-options">Скетч-шоу</button>
                <button className="filter-options">Природа</button>
                <button className="filter-options">Последние опубликованные</button>
                <button className="filter-options">Просмотрено</button>
                <button className="filter-options">Новое для вас</button>
            </div>

            {/* videos */}
            <div className="video-container">
                <div classNameName="video">
                    <div className="video__wrapper">
                        <img src="https://raw.githubusercontent.com/solidados/youtube_clone/main/img/vid-1.webp" className="thumbnail" alt="" />
                    </div>
                    <div className="content">
                        <img src="https://github.com/solidados/youtube_clone/blob/main/img/vid-1_profile.jpeg?raw=true" className="channel-icon" alt="" />
                        <div className="info">
                            <h4 className="title">Музыка для работы - Ночной микс будущего в гараже</h4>
                            <p className="channel-name">Chill Music Lab</p>
                            <p className="channel-name">30 тыс. просмотров • 4 недели назад</p>
                        </div>
                    </div>
                </div>
                <div classNameName="video">
                    <div className="video__wrapper">
                        <img src="https://raw.githubusercontent.com/solidados/youtube_clone/main/img/vid-2.webp" className="thumbnail" alt="" />
                    </div>
                    <div className="content">
                        <img src="https://github.com/solidados/youtube_clone/blob/main/img/vid-2_profile.jpeg?raw=true" className="channel-icon" alt="" />
                        <div className="info">
                            <h4 className="title">Visual Studio Code 2022 | Web Dev Setup | Top Extensions, Themes,...</h4>
                            <p className="channel-name">codeSTACKr</p>
                            <p className="channel-name">776 тыс. просмотров • 10 месяцев назад</p>
                        </div>
                    </div>
                </div>
                <div classNameName="video">
                    <div className="video__wrapper">
                        <img src="https://raw.githubusercontent.com/solidados/youtube_clone/main/img/vid-3.webp" className="thumbnail" alt="" />
                    </div>
                    <div className="content">
                        <img src="https://github.com/solidados/youtube_clone/blob/main/img/vid-3_profile.jpeg?raw=true" className="channel-icon" alt="" />
                        <div className="info">
                            <h4 className="title">SEXY AFTERNOON Lounge Music to Work Concentration & Focus |...</h4>
                            <p className="channel-name">EVERLASTING ECHOES</p>
                            <p className="channel-name">249 просмотров • 2 дня назад</p>
                        </div>
                    </div>
                </div>
                <div classNameName="video">
                    <div className="video__wrapper">
                        <img src="https://raw.githubusercontent.com/solidados/youtube_clone/main/img/vid-4.webp" className="thumbnail" alt="" />
                    </div>
                    <div className="content">
                        <img src="https://github.com/solidados/youtube_clone/blob/main/img/vid-4_profile.jpeg?raw=true" className="channel-icon" alt="" />
                        <div className="info">
                            <h4 className="title">JavaScript/Front-end 2022Q3 HTML Builder Review</h4>
                            <p className="channel-name">Rolling Scopes School</p>
                            <p className="channel-name">Зрителей, ожидающих начала трансляции: 33</p>
                        </div>
                    </div>
                </div>
                <div classNameName="video">
                    <div className="video__wrapper">
                        <img src="https://raw.githubusercontent.com/solidados/youtube_clone/main/img/vid-5.webp" className="thumbnail" alt="" />
                    </div>
                    <div className="content">
                        <img src="https://github.com/solidados/youtube_clone/blob/main/img/vid-5_profile.jpeg?raw=true" className="channel-icon" alt="" />
                        <div className="info">
                            <h4 className="title">Подготовка к JavaScript собеседованию</h4>
                            <p className="channel-name">Владилен Минин</p>
                            <p className="channel-name">565 тыс просмотров • 3 года назад</p>
                        </div>
                    </div>
                </div>
                <div classNameName="video">
                    <div className="video__wrapper">
                        <img src="https://raw.githubusercontent.com/solidados/youtube_clone/main/img/vid-6.webp" className="thumbnail" alt="" />
                    </div>
                    <div className="content">
                        <img src="https://github.com/solidados/youtube_clone/blob/main/img/vid-6_profile.jpeg?raw=true" className="channel-icon" alt="" />
                        <div className="info">
                            <h4 className="title">Музыка, чтобы поставить вас в лучшее настроение ~ изучать...</h4>
                            <p className="channel-name">Lofi Zone</p>
                            <p className="channel-name">677 тыс просмотров • Трансляция закончилась 1 месяц</p>
                        </div>
                    </div>
                </div>
                <div classNameName="video">
                    <div className="video__wrapper">
                        <img src="https://raw.githubusercontent.com/solidados/youtube_clone/main/img/vid-7.webp" className="thumbnail" alt="" />
                    </div>
                    <div className="content">
                        <img src="https://github.com/solidados/youtube_clone/blob/main/img/vid-7_profile.jpeg?raw=true" className="channel-icon" alt="" />
                        <div className="info">
                            <h4 className="title">Структура файловой системы Linux!</h4>
                            <p className="channel-name">DorianDotSlash</p>
                            <p className="channel-name">3,1 млн просмотров • 4 года назад</p>
                        </div>
                    </div>
                </div>
                <div classNameName="video">
                    <div className="video__wrapper">
                        <img src="https://raw.githubusercontent.com/solidados/youtube_clone/main/img/vid-8.webp" className="thumbnail" alt="" />
                    </div>
                    <div className="content">
                        <img src="https://github.com/solidados/youtube_clone/blob/main/img/vid-8_profile.jpeg?raw=true" className="channel-icon" alt="" />
                        <div className="info">
                            <h4 className="title">Game Changers by Microsoft Surface // Nora En Pure - Lake Arne...</h4>
                            <p className="channel-name">Beatport • 3,6 млн просмотров • Трансляция закончилась 1 год назад</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lesson2;