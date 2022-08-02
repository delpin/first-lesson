import './lesson-2.css';

function Lesson2() {
    return (
        <div className="roots">
            <header id="hreader">
                <div class="left_side">
                    <div class="hamburger">
                        <a href="#" class="logo"><img src="https://sun9-9.userapi.com/impf/NV0ZJodUQM8v2g3i6QY62AuNkDNqBx-CpyDd0w/q7aBSEO9Ywc.jpg?size=46x47&quality=96&sign=7538bd32087c3ae418b8fc917f93f21d&type=album" alt="YouTube"></img></a>
                    </div>
                    <div class="Button">
                        <a href="#" class="logo"><img src="https://sun9-20.userapi.com/impf/lLzqBaEVgwOGcQtbRv6f8BdHknyAOkqBXgalMA/YDHBZ8fb8X8.jpg?size=173x46&quality=96&sign=f1f688edbec9163ee0f83e3e7f0fb19f&type=album" alt="YouTube"></img></a>
                    </div>

                </div>

                <div class="centre">
                    <div class="field">
                        <input type="text" placeholder="Введите запрос" name="search"></input>
                        <button>
                            <img src="https://sun9-51.userapi.com/impf/VJiahYGdzdoY5hbfW83erYLyN3wrEtHrrqW6ZA/Q1dvNwX1-qw.jpg?size=79x47&quality=96&sign=c0d081ebeab65527fd2a7ca5372afdda&type=album" alt="Search" />
                        </button>
                    </div>
                </div>

                <div class="right_side">
                    <div class="load_video">
                        <img src="https://sun9-85.userapi.com/impf/JV9beNFly7SdJTcKhoX1CLaC9GyWX6V8W4GKlw/5rrBKvdxTVU.jpg?size=68x56&quality=96&sign=06bc15913aefe8427578c48a88e3509e&type=album" alt="Load"></img>
                    </div>
                    <div class="notification">
                        <img src="https://sun9-77.userapi.com/impf/Q-j2QweVL8mM7U9gsHehEgKInng5ToBSrJ6JIg/lksJU5rIT5o.jpg?size=57x56&quality=96&sign=7a8b04e7e7777ba46d4feec436c00a3e&type=album" alt="Notific"></img>
                    </div>
                    <div class="login">
                        <img src="https://sun9-24.userapi.com/impf/sEHeIp-5fesvUKbHuFODw3FaBsvl25UUkh3_Cw/LL_UZtZW1U0.jpg?size=67x56&quality=96&sign=15942dedb7afa1e839c78a2a48a7e577&type=album" alt="Login"></img>
                    </div>
                </div>
            </header>
            <div class="NavigationBlock">
                <ul class="nav">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Навигатор</a></li>
                    <li><a href="#">Shorts</a></li>
                    <li><a href="#">Подписки</a></li>
                    <li><a href="#">Originals</a></li>
                    <li><a href="#">YouTube Music</a></li>
                    <li><a href="#">Библиотека</a></li>
                    <li><a href="#">История</a></li>
                    <li><a href="#">Ваши видео</a></li>
                    <li><a href="#">Смотреть позже</a></li>
                    <li><a href="#">Скаченные</a></li>
                    <li><a href="#">Понравившиеся</a></li>
                </ul>
            </div>
            <div class="flex-container">
                <div class="flex-item item1"><a href="#">Video 1</a></div>
                <div class="flex-item item2"><a href="#">Video 2</a></div>
                <div class="flex-item item3"><a href="#">Video 3</a></div>
                <div class="flex-item item4"><a href="#">Video 4</a></div>
                <div class="flex-item item5"><a href="#">Video 5</a></div>
                <div class="flex-item item1"><a href="#">Video 6</a></div>
                <div class="flex-item item2"><a href="#">Video 7</a></div>
                <div class="flex-item item3"><a href="#">Video 8</a></div>
                <div class="flex-item item6"><a href="#">Video 9</a></div>

            </div>
        </div>
    );
}

export default Lesson2;