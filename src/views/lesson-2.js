import './lesson-2.css';

function Lesson2() {
    return (
        <div className="root_lesson2">
            <div class='content'>
                <div class='header'>
                    <div class='shadow-header'></div>
                    <div class='header-content'>
                        <div class='header-logo-form'>
                            <div class = 'start'>
                                <div class = 'guide-button button_h'>
                                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" class="style-scope yt-icon"></path></g></svg></div>
                                <div class = 'you-logo button_h'>
                                    <svg viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000" class="style-scope yt-icon"></path><path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" class="style-scope yt-icon"></path></g><g class="style-scope yt-icon"><g id="youtube-paths" class="style-scope yt-icon"><path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z" class="style-scope yt-icon"></path><path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z" class="style-scope yt-icon"></path><path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z" class="style-scope yt-icon"></path><path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z" class="style-scope yt-icon"></path><path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z" class="style-scope yt-icon"></path><path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z" class="style-scope yt-icon"></path><path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"></path></g></g></g></svg>
                                </div>
                            </div>
                            <div class = 'center'>
                                <div class = 'search-panel'>
                                    <form>
                                        <input id="search" autocapitalize="none" autocomplete="off" autocorrect="off" name="search_query" tabindex="0" type="text" spellcheck="false" placeholder="Введите запрос" aria-label="Введите запрос" aria-haspopup="false" aria-autocomplete="list" class="gsfi ytd-searchbox"  dir="ltr"/>
                                    </form>
                                    <div class = 'search-button no-padd-marg-important'>
                                        <button aria-label="Введите запрос">
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></g></svg>
                                        </button>
                                    </div>
                                </div>
                                <div class = 'speak-button button_h'>
                                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z" class="style-scope yt-icon"></path></g></svg>
                                </div>
                            </div>
                            <div class = 'end'>
                                <div class = 'button-renderer button_h'>
                                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z" class="style-scope yt-icon"></path></g></svg>
                                </div>
                                <div class = 'button-remainder button_h'>
                                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope yt-icon"></path></g></svg>
                                </div>
                                <div class = 'button-account button_h'><img alt='account_foto'></img></div>
                            </div>
                        </div>
                        <div class = 'chips-header'>
                            <div class = 'chips'>
                                <div class = 'chips-item'><span>Все</span></div>
                                <div class = 'chips-item'><span>Сейчас в эфире</span></div>
                                <div class = 'chips-item'><span>Видеоигры</span></div>
                                <div class = 'chips-item'><span>Музыка</span></div>
                                <div class = 'chips-item'><span>Симуляторы</span></div>
                                <div class = 'chips-item'><span>Экшен</span></div>
                                <div class = 'chips-item'><span>Кулинария</span></div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div class = 'precontent'>
                    <div class='nav-panel'>
                        <div class='shadow-nav'></div>
                        <div class='nav-content'>
                            <div class = 'nav-items'>
                                <div class='nav-hover'>
                                    <div class = 'item-head'>
                                        <div class="button_h">
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="button_h" ><g><path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path></g></svg>
                                        </div>
                                        <div class='nav-text al-ctr'>Главная</div>
                                    </div>
                                </div>
                                <div class='nav-hover'>
                                    <div class = 'item-nav'>
                                        <div class="button_h">
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path></g></svg>
                                        </div>
                                        <div class='nav-text al-ctr'>Навигатор</div>
                                    </div>
                                </div>
                                <div class='nav-hover'>
                                    <div class = 'item-shorts'>
                                        <div class="button_h">
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g height="24" viewBox="0 0 24 24" width="24"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></g></svg>
                                        </div>
                                        <div class='nav-text al-ctr'>Shorts</div>
                                    </div>
                                </div>                            
                                <div class='nav-hover'>
                                    <div class = 'item-link'>
                                        <div class="button_h">
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path></g></svg>
                                        </div>
                                        <div class='nav-text al-ctr'>Подписки</div>
                                    </div>
                                </div>
                                <div class='nav-hover'>
                                    <div class = 'item-library'>
                                        <div class="button_h">
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path></g></svg>
                                        </div>
                                        <div class='nav-text al-ctr'>Библиотека</div>
                                    </div>
                                </div>
                                <div class='nav-hover'>
                                    <div class = 'item-history'>
                                        <div class="button_h">
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path></g></svg>
                                        </div>
                                        <div class='nav-text al-ctr'>История</div>
                                    </div>
                                </div>
                                <div class='nav-hover'>
                                    <div class = 'item-later'>
                                        <div class="button_h">
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path></g></svg>
                                        </div>
                                        <div class='nav-text al-ctr'>Смотреть позже</div>
                                    </div>
                                </div>
                                <div class='nav-hover'>
                                    <div class = 'item-like'>
                                        <div class="button_h">
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g class="style-scope yt-icon"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></g></svg>
                                        </div>
                                        <div class='nav-text al-ctr'>Понравившиеся</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='page'>
                        <div class = 'page-content'>
                            <div class = 'content-row'>
                                <div id='row_1' class = 'row'>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id='row_2' class = 'row'>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id='row_3' class = 'row'>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id='row_4' class = 'row'>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id='row_5' class = 'row'>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='content-container'>
                                        <div class = 'container-prewiew'></div>
                                        <div class = 'container-desc'>
                                            <div class = 'desc-owner'><div class ='owner-cycle'></div></div>
                                            <div class = 'desc-label'>
                                                <div class = 'label'><span><b>Label</b></span></div>
                                                <div class = 'label-info'><span>WHO * count-preveiw * n-hours left</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lesson2;
//<div class = ''></div>