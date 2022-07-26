
import './lesson-2.css';

function Lesson2() {
    return (
        <div className="root_lesson_2">
            <container className='menu_container'>
                <a href=''>
                   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' className='menu-icon'></img>
                </a>
                <a href='' className='link'>
                   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTls0GM9POm0TpWOWxlN4blywIlsD8at-4Pkg2_IsG4f5f27uqdxP3uujz-odriC7w2jgI&usqp=CAU' className='menu-icon'></img>   
                   Главная
                </a>
                <a href='' className='link'>
                   <img src='https://mywebicons.ru/i/png/2618f9758bd5016460a85922bbad35e7.png' className='menu-icon'></img>   
                   Навигатор
                </a>
                <a href='' className='link shorts'>
                   <img src='https://cdn-icons-png.flaticon.com/512/2111/2111839.png' className='menu-icon img-shorts' ></img>  
                   Shorts
                </a>
                <a href='' className='link'>
                   <img src='https://cdn-icons-png.flaticon.com/512/2111/2111839.png' className='menu-icon'></img>   
                   Подписки
                </a>
                <a href='' className='link'>
                   <img src='https://cdn-icons-png.flaticon.com/512/2111/2111839.png' className='menu-icon'></img>   
                   Библиотека
                </a>
            </container>
            <container className='main_container'>
            <header className='header'>
                <div className='logo-container'>
                 <a href="" className="logo"> 
                 <img src='https://blog.pioneers.com.ua/wp-content/uploads/2017/08/3232-1024x667.png' className='img-logo'></img>
                  </a>
                <div className="form-container">
                  <form action="/" className="header-form">
                  <input className='form-input' type='text'></input>
                </form>
                <button className='btn'>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="7.56126" height="1.89031" transform="matrix(0.713342 0.700816 -0.713342 0.700816 18.6062 17.3762)" fill="#333333"/>
                    <path d="M20.9303 10.7726C20.9303 16.1533 16.4855 20.5452 10.9652 20.5452C5.44478 20.5452 1 16.1533 1 10.7726C1 5.39198 5.44478 1 10.9652 1C16.4855 1 20.9303 5.39198 20.9303 10.7726Z" stroke="#333333" stroke-width="2"/>
                    </svg>
                </button>
                <button className='btn-voice'>
                    <a className='micro'>
                        <img src='https://cdn-icons-png.flaticon.com/512/25/25682.png' className='img-micro'></img>
                    </a>
                </button>
                    <a >
                        <img src='https://cdn-icons-png.flaticon.com/512/16/16270.png' className='camera'></img>
                    </a>
                    <a >
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D0%BB%D1%8C%D1%87%D0%B8%D0%BA%D0%B0_%28ei%29.svg/1024px-%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D0%BB%D1%8C%D1%87%D0%B8%D0%BA%D0%B0_%28ei%29.svg.png' className='ring'></img>
                    </a>
                </div>
                </div>
                <div className='header-menu'>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <a href="" className="nav-link">Все</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-link">Музыка</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-link">Сейчас в эфире</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-link">Видео игры</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-link">Туристические направления</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-link">Скетч-шоу</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-link">Кулинарные шоу</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-link">Фитнес</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-link">Анимация</a>
                        </li>
                        <li className="link-next">
                        <a href='' className='link'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAAD5+fnX19fp6enj4+P8/PxAQEDz8/Pw8PDs7Oz4+PgkJCTd3d3f398zMzM6OjpKSkoLCwu+vr5UVFQXFxcrKyvNzc1mZmZGRkY3NzcdHR3Q0NDGxsYpKSl8fHxdXV2lpaWGhoZtbW1PT0+3t7ednZ1qamqSkpJgfkkVAAAEnklEQVR4nOWdi1LiQBBFMwESwisxSpSwxI3i4/+/cHHdKleBZO5IVXtv7gdQfaofM0xmuqMoXKv2JS9dmd+1y2/8yo9V8lS4D9VtbG3QpbWr3Wc119YmXVYP7lj31kZdUMndCUDn9tZ2XU6PJwGdu0qsLbuQXs8AHryogTg6C+jcRgIx7SB0qQDirgvw4EX+hfF3NyF/oI57AA/7G3IvXvcSupQb8dRu5ihQ59ZWfkfnVvtPKpi92Fdo3pUTI954EbqUN1BPb7qVEH0qzXugsiK2voQun1rbGqalN6ErOBGTr8cXHao5A/XZn9BVlF7MAEJXUyIiTiTNxaIf7EOUFXVcIogLRsSuk5pj1Zm1vQHCECkDFVj3D1roe7HRR8xn1vYGaAUhVoxexHJxy4iIBWrFGKiYFykRJxDilhFxCW3g1pSIkBebsbW9AcIWjQWjF7FcLBm9iOXilhERDFRGxP5vivRenECB6hgRV2vIixNrewME7m4YEbFcdIyIk60+on4uYoG6pkSEvMgZqAuEsFxZ2xsgzItrRsQZtrthRBxDgToAxJLxqQb28Y0SMcN2N4yI40ofEcvFkbW9AcqwRYMSEQtURsRZro+ILf2MiFN9xAy45EeKCObiL2t7A5TpB+p0AF6ErvlxIup7cd7II04HEKidr06PdGttb4AGUFFjbHdD6cWNPiKWiztrewMUY7nI6MV4AIF6BSEyBupcPxcTbHfDiBgPIFD1EWP9XIywRYMRcb7XR8RykbJLGhaolIhYoDIixp7dNYgRkwHkoj5iMoBAxRCfrO0NkX6g+vYrIvZi4td0ihpRv9yAuxvGT6ie3dH+qWTsyYjlImevYigXGW+/Y4gP1saGybfL3UENZ3MtpNxQltMICdRna1ND5R2onNX0Tb6Id9aGhssT8cbazm9InlDeh/J5KF9L5ddD+T2N/L5U/r+F+v9D7D8+owvlz2nUz9rkz0v1z7zlv1uof3uS/34oX2T0Q1QdUP8+jfydKOyOKR+g/N1E/ful6neE5e95y9/VlweUfzMj/+5J/u2a/PvDufobUvl3wPJvueXf48v3VJDviyHf20S+P418jyH5PlH6VVS9X5t8zz35vonyvS/l+5eO1XvQyvcRlu8FLd/PW74nu3xffWygDuFsBPn5FvIzSuTnzMjPCsJmrxHOe5Kf2SU/d01+dp78/EP5GZbyc0jlZ8nKzwOWn+ksP5dbfrY6VkVLPkAsRJuZtb2wlhggnwexHFzzeRAL0S0fIBaiFR/gSB0Q8+A2s7YXFpaDFR8gFqI5X4higA2fB7EcXPABgiE6tbYXFgZY83kQGy2+4PNgBF3GIwzR6BkBLAgBMwSwJgSEXFgxAibAdbyCsm0VsNYz5uBBrTcgYxV904M3IGWIRv7d41JWQN++QLyAnt3H8tjaznA9+gAWxIBelWbDDBhd9wOm1IAe3wprbsD+UrMh7G34WTvlHHxX54vQlN6DUfcpDX+I/tXrWcC9BuD5Vf9KBTBKTm+/99Z2XVKndjas3dLP6PbrYUbF13WsR8nT/8emdSuwDB5r1b7kpSvzl/YnX9j+A6WNT27xVWgxAAAAAElFTkSuQmCC' className='next'></img> </a>
                        </li>
                    </ul>
                </nav>
                </div>
            </header>
            <main>
                <section>
                    <div className='container'>
                    <ul className="section-content-list upper">
                <li className="section-content-item content-image-1">
                    <a href='' className='link'>
                    <a>
                        <img src='https://timeweb.com/media/default/0001/12/74c0bc01b8a8dab8b2b73b649f9a1b9259282e4e.png'></img>
                    </a>
                    <p className="section-content-item-description"> <b>jazz/lofi hip hop radio🌱chill beats to relax/study to [LIVE 24/7]</b></p>
                    <p className="section-content-item-description"> 阿鲍Abao</p>
                    <p className="section-content-item-description"> Зрителей: 2 тыс.</p>   
                    <p className="section-content-item-description"> В ЭФИРЕ</p>  
                    </a>
                </li>
                <li className="section-content-item content-image-2">
                    <a href='' className='link'>
                    <a>
                        <img src='https://sun9-43.userapi.com/s/v1/if2/Fo9Rbaa6waNahLiRb0XPOtonTIBDghZaJj6EXjBoR9GbpPcjq7wXw22sKWG1mxf3YTqjoEDmeNP9wf0Ye96IUURP.jpg?size=604x604&quality=96&type=album'></img>
                    </a>
                    <p className="section-content-item-description"> <b>"Человек и война"//Скажи Гордеевой</b></p>
                    <p className="section-content-item-description"> Скажи Гордеевой</p>
                    <p className="section-content-item-description"> 2,1 млн. просмотров 8 дней назад</p>
                    </a>   
                </li>
                <li className="section-content-item content-image-3">
                     <a href='' className='link'>
                     <a>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yh5VPT0EvL9DCt-xQfmCbT_4zuW430ZRUQ&usqp=CAU'></img>
                    </a>
                    <p className="section-content-item-description"> <b>Джем - Осторожно:Собчак</b></p>
                    <p className="section-content-item-description"> Другие видео с этого канала</p> 
                    </a>    
                </li>
                <li className="section-content-item content-image-4">
                    <a href='' className='link'>
                    <a>
                        <img src='https://dev.by/storage/images/10/08/79/76/derived/f7d4db81fdbc633e0f4b929b37408938.jpg'></img>
                    </a>
                    <p className="section-content-item-description"><b>Как посчитать сложность алгоритма по BIG O | Самое....</b></p>  
                    <p className="section-content-item-description">Front-end Science із Сергієм Пузанко....</p>
                    <p className="section-content-item-description">58 тыс. просмотров 1 год назад</p>
                    </a>
                </li>
            </ul> 
            <ul className="section-content-list">
                <li className="section-content-item content-image-5">
                     <a href='' className='link'>
                     <a>
                        <img src='https://highload.today/wp-content/uploads/2022/02/mem-1.jpeg'></img>
                    </a>
                    <p className="section-content-item-description"><b>Music to put you in a better mood ~ Study music - lofi hip hop/chill beats</b></p>
                    <p className="section-content-item-description">Lofi Girl 16 млн просмотров</p> 
                    <p className="section-content-item-description"> 2 года назад</p> 
                    </a>
                </li>
                <li className="section-content-item content-image-6">
                     <a href='' className='link'>
                     <a>
                        <img src='https://habrastorage.org/getpro/habr/upload_files/219/6fb/64b/2196fb64be5dfbf02502d9eb378be66a.PNG'></img>
                    </a>
                    <p className="section-content-item-description"><b>Coldplay's Best Songs Playlist for the next 5 Years</b></p>  
                    <p className="section-content-item-description">Alex 33</p> 
                    <p className="section-content-item-description"> 1,2 млн просмотров</p> 
                    <p className="section-content-item-description"> 1 месяц назад </p> 
                    </a>
                </li>
                <li className="section-content-item content-image-7">
                    <a href='' className='link'>
                    <a>
                        <img src='https://sun9-78.userapi.com/impf/c845121/v845121788/1adbbf/Qg8TDQ2KHpU.jpg?size=557x604&quality=96&sign=7f61dfd861f09a2428f50c30af943629&type=album'></img>
                    </a>
                    <p className="section-content-item-description"><b>Ed Sheeran, Martin Garrix, Kygo, Dua Lipa, Avicii, Robin Schulz, The Chainsmokers Style - Feeling Me Haa Taa Deep</b></p>  
                    <p className="section-content-item-description"> Зрителей: 3 тыс. </p> 
                    </a>
                </li>
                <li className="section-content-item content-image-8">
                    <a href='' className='link'>
                    <a>
                        <img src='https://fun24.org/wp-content/uploads/2021/11/fun24.org-2021-11-01_23-40-09_393261.jpg'></img>
                    </a>
                    <p className="section-content-item-description"><b>Listening to Joji on my Paris Rooftop</b></p>  
                    <p className="section-content-item-description">Kiistroc Vinyls </p> 
                    <p className="section-content-item-description"> 1,4 млн просмотров</p> 
                    <p className="section-content-item-description"> 1 месяц назад </p> 
                    </a>
                </li>
            </ul>
                    </div>
                </section>
            </main>
            </container>
        </div>
    
    );
}

export default Lesson2;