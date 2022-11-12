import './lesson-2.css';
import './addLesson-2.js';

function Lesson2() {
    return (
        <div className="root">
            <nav class="navbar">
                <div class="toggle-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="https://youtube.com" title="link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/1cf2b43c5f8ff2eb0dc271927579c84067cd2e5d/img/youTube_logo.svg" className="logo" alt="" /></a>
                <div class="search-box">
                    <div class="searchbar__position">
                        <input type="text" class="search-bar" placeholder="Search" />
                        <button class="search-btn" type="button" title="button"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/1cf2b43c5f8ff2eb0dc271927579c84067cd2e5d/img/search_ico.svg" alt="" /></button>
                    </div>
                </div>
                <div class="user-options">
                    <img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/video-add.svg" class="icon" alt="" />
                    <img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/grid.svg" class="icon" alt="" />
                    <img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/bell.svg" class="icon" alt="" />

                    <div class="user-dp">
                        <img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/user.svg" alt="" />
                    </div>
                </div>
            </nav>

            {/* sidebar */}
            <nav class="sidebar">
                <ul class="sidebar">
                    <li class="sedibar__item"><a href="home" class="item-link active"><img src="https://github.com/solidados/youtube_clone/blob/main/img/home_ico.png?raw=true"
                        alt="" />Главная</a></li>
                    <li class="sedibar__item"><a href="home" class="item-link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/shorts-ico.svg" alt="" />Shorts</a>
                    </li>
                    <li class="sedibar__item"><a href="home" class="item-link"><img src="https://github.com/solidados/youtube_clone/blob/main/img/subscribe_ico.png?raw=true"
                        alt="" />Подписки</a></li>
                    <li class="sidebar__item">
                        <hr class="seperator" />
                    </li>
                    <li class="sedibar__item"><a href="home" class="item-link"><img src="https://github.com/solidados/youtube_clone/blob/main/img/library_ico.png?raw=true"
                        alt="" />Библиотека</a></li>
                    <li class="sedibar__item"><a href="home" class="item-link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/history.svg" alt="" />История</a>
                    </li>
                    <li class="sedibar__item"><a href="home" class="item-link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/your-videos.svg" alt="" />Ваши
                        видео</a></li>
                    <li class="sedibar__item"><a href="home" class="item-link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/watch-later.svg" alt="" />Смотреть
                        позже</a></li>
                    <li class="sedibar__item"><a href="home" class="item-link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/downloaded.svg"
                        alt="" />Скачанные</a></li>
                    <li class="sedibar__item"><a href="home" class="item-link"><img src="https://raw.githubusercontent.com/solidados/youtube_clone/ee7fee345e24b31cc945e5f0e1b7cdf2323aa119/img/liked(1).svg"
                        alt="" />Понравившиеся</a></li>
                    <li class="sedibar__item"><a href="home" class="item-link"><img src="https://github.com/solidados/youtube_clone/blob/main/img/show%20more.PNG?raw=true"
                        alt="" />Развернуть</a></li>
                </ul>
            </nav>

            {/* filters */}
            <ul class="filters-">
                <li class="filters-items"><button class="filter-options">Все</button></li>
                <li class="filters-items"><button class="filter-options">Музыка</button></li>
                <li class="filters-items"><button class="filter-options">Сейчас в эфире</button></li>
                <li class="filters-items"><button class="filter-options"></button>Джемы</li>
                <li class="filters-items"><button class="filter-options"></button>JavaScript</li>
                <li class="filters-items"><button class="filter-options"></button>Природа</li>
                <li class="filters-items"><button class="filter-options"></button>Последние опубликованные</li>
                <li class="filters-items"><button class="filter-options"></button>Просмотрено</li>
                <li class="filters-items"><button class="filter-options"></button>Новое для вас</li>
            </ul>
            <div class="filters">
                <button class="filter-options active">Все</button>
                <button class="filter-options">Музыка</button>
                <button class="filter-options">Сейчас в эфире</button>
                <button class="filter-options">Джемы</button>
                <button class="filter-options">Скетч-шоу</button>
                <button class="filter-options">Природа</button>
                <button class="filter-options">Последние опубликованные</button>
                <button class="filter-options">Просмотрено</button>
                <button class="filter-options">Новое для вас</button>
            </div>

            {/* videos */}
            <div class="video-container">
                <div class="video">
                    <img src="img/youTube_logo.png" class="thumbnail" alt="" />
                    <div class="content">
                        <img src="img/user.svg" class="channel-icon" alt="" />
                        <div class="info">
                            <h4 class="title">Lorem ipsum dolor sit</h4>
                            <p class="channel-name">Lorem, ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lesson2;