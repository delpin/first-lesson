import React, {useState} from 'react';
import * as all_style from "./book-js-style.js";
import {JSSampleMinimize, JSSample} from "./book-js-sample.js";
import * as data from "./book-js-sample-array.js";

//------------------------------------------------------
//-- компонент Root-Book
//------------------------------------------------------
function JSBook()
{

    //-- пропускаем исходный массив,
    //-- через механизм получения статуса в хуке

    const [
        js_samples_hook_status, //--- объявляем через деструктуризацию переменную со статусом
        set_hook_status     //--- объявляем через деструктуризацию функцию через которую будет устанавливаться новое значение статуса
    ] = useState(data.js_samples);//-- useState это готовый Хук встроенный в React

    const refresh_all_model = function () {
        const js_samples_hook_status_new = [...js_samples_hook_status];//--- передавать нужно обязательно новый экземпляр!!!
        set_hook_status(js_samples_hook_status_new);
    };

    return (
            <div>
                <all_style.style_root>
                {
                    
                    //--- на основе массива с примерами JS через MAP генерим список React-компонент
                    
                    js_samples_hook_status.map(js_sample => (
                        
                            (js_sample.js_sample_window_state===0) ?
                            (
                                <div 
                                    onClick={() => {                                    
                                        js_sample.js_sample_window_state = 1;
                                        refresh_all_model()
                                    }
                                    }>
                                    <JSSampleMinimize
                                        js_sample={js_sample}                            
                                />
                                </div>

                                
                            ) :
                            (
                                <div 
                                    onClick={() => {                                   
                                        js_sample.js_sample_window_state = 0;
                                        refresh_all_model()
                                    }}>
                                    <JSSample
                                    js_sample={js_sample}                            
                                />
                                </div>
                                
                            )                        

                    ), null)
                    
                  
                }
                </all_style.style_root>
            </div>
    )

}

export default JSBook;