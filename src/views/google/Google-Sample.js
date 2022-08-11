import './Google-Sample.css';
import './Font-Family-Roboto.css';


import google_logo from "./icons/google_logo.svg";
import google_mic from "./icons/google_mic.svg";
import google_search from "./icons/google_search.svg";
import google_add from "./icons/google_add.svg";
import google_menu_profile from "./icons/google_menu_profile.png";

import google_link1 from "./icons/google_link1.png";
import google_link2 from "./icons/google_link2.png";
import google_link3 from "./icons/google_link3.png";
import google_link4 from "./icons/google_link4.png";
import google_link5 from "./icons/google_link5.png";
import google_link6 from "./icons/google_link6.png";
import google_link7 from "./icons/google_link7.png";
import google_link8 from "./icons/google_link8.png";
import google_link9 from "./icons/google_link9.png";




function HTMLSamples() {
    return (        
        <div className="root">
            {
            <div className='main_box'>
                
                <div className='header_box'>

                    <div className='header_box__left'>
                    </div>

                    <div className='header_box__right'>
                        
                        <div className='menu_box'>

                            <div className='menu_box__left_wrapper'>                                                        
                                <div className='menu_box__textwrapper'>
                                    <span>Почта</span>
                                </div>

                                <div className='menu_box__textwrapper'>                                    
                                    <span>Картинки</span>
                                </div>
                            </div>

                            <div className='menu_box__left_image_wrapper'>
                                <svg className='menu_box__image1'>
                                    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                                </svg>
                            </div>

                            <div className='menu_box__right_image_wrapper'>
                                <img className='menu_box__image2' src={google_menu_profile} alt="" aria-hidden="true" data-noaft="">
                                </img>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='logo_box'>
                    <img alt="google_logo" src={google_logo} />                
                </div>

                <div className='input_box'>

                    <div className='input_box__left'> 
                        <img  alt="google_search" src={google_search} />                    
                    </div>

                    <input className='input_box__middle' type="search" autocomplete="off" spellcheck="false" role="combobox" placeholder="Введите поисковый запрос или URL" aria-live="polite" />                    

                    <div className='input_box__right'>
                        <img  alt="google_mic" src={google_mic} />        
                    </div>

                </div>

                <div className='links_array_box'>
                    
                    <div className='link_box'>
                        <div className='link_box__top'>
                            <img src={google_link1}/>
                        </div>
                        <div className='link_box__middle'>                            
                            <span>Новости дня в России и мире — РБК</span>                            
                        </div>
                        <div className='link_box__bottom'>
                        </div>
                    </div>

                    <div className='link_box'>
                        <div className='link_box__top'>
                            <img src={google_link2}/>
                        </div>
                        <div className='link_box__middle'>                            
                            <span>Mail.ru</span>                            
                        </div>
                        <div className='link_box__bottom'>
                        </div>
                    </div>

                    <div className='link_box'>
                        <div className='link_box__top'>
                            <img src={google_link3}/>
                        </div>
                        <div className='link_box__middle'>                            
                            <span>WhatsApp</span>                            
                        </div>
                        <div className='link_box__bottom'>
                        </div>
                    </div>

                    <div className='link_box'>
                        <div className='link_box__top'>
                            <img src={google_link4}/>
                        </div>
                        <div className='link_box__middle'>                            
                            <span>Главная</span>                            
                        </div>
                        <div className='link_box__bottom'>
                        </div>
                    </div>

                    <div className='link_box'>
                        <div className='link_box__top'>
                            <img src={google_link5}/>
                        </div>
                        <div className='link_box__middle'>                            
                            <span>Your Repositories</span>                            
                        </div>
                        <div className='link_box__bottom'>
                        </div>
                    </div>

                    <div className='link_box'>
                        <div className='link_box__top'>
                            <img src={google_link6}/>
                        </div>
                        <div className='link_box__middle'>                            
                            <span>React App</span>                            
                        </div>
                        <div className='link_box__bottom'>
                        </div>
                    </div>

                    <div className='link_box'>
                        <div className='link_box__top'>
                            <img src={google_link7}/>
                        </div>
                        <div className='link_box__middle'>                            
                            <span>кинотеатре Okko!</span>                            
                        </div>
                        <div className='link_box__bottom'>
                        </div>
                    </div>

                    <div className='link_box'>
                        <div className='link_box__top'>
                            <img src={google_link8}/>
                        </div>
                        <div className='link_box__middle'>                            
                            <span>Технологические решения</span>                            
                        </div>
                        <div className='link_box__bottom'>
                        </div>
                    </div>

                    <div className='link_box'>
                        <div className='link_box__top'>
                            <img src={google_link9}/>
                        </div>
                        <div className='link_box__middle'>                            
                            <span>Хитрые инструменты</span>                            
                        </div>
                        <div className='link_box__bottom'>
                        </div>
                    </div>

                    <div className='link_box'>
                        <div className='link_box__top'>
                            <img src={google_add}/>
                        </div>
                        <div className='link_box__middle'>                            
                            <span>Новый ярлык</span>                            
                        </div>
                        <div className='link_box__bottom'>
                        </div>
                    </div>

                </div>

            </div>

            }
        </div>
    );
}

export default HTMLSamples;