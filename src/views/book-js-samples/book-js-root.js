import React from 'react';
import * as all_style from "./book-js-style.js";
import {JS_Sample} from "./book-js-sample.js";
import * as data from "./book-js-sample-array.js";

//------------------------------------------------------
//-- компонент Root-Book
//------------------------------------------------------
function JS_Book()
{

    return (
            <div>
                <all_style.style_root>
                {
                    
                    //--- на основе массива с примерами JS через MAP генерим список React-компонент
                    
                    data.js_samples.map(js_sample => (
                        <JS_Sample
                            js_sample={js_sample}                            
                        />
                    ), null)
                    
                  
                }
                </all_style.style_root>
            </div>
    )

}

export default JS_Book;