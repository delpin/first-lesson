import React from 'react';
import * as all_style from "./book-js-style.js";



//------------------------------------------------------
//-- компонент JS_Sample
//------------------------------------------------------
function JS_Sample_Minimize({js_sample})
{

    return (
            <div>
                <all_style.style_sample_el0>
                    <all_style.style_sample_el1>

                        <all_style.style_title>
                            {js_sample.js_sample_title}
                        </all_style.style_title>                        

                    </all_style.style_sample_el1>
                </all_style.style_sample_el0>                
            </div>
    )
    
}



//------------------------------------------------------
//-- компонент JS_Sample
//------------------------------------------------------
function JS_Sample({js_sample})
{

    return (
            <div>
                <all_style.style_sample_el0>
                    <all_style.style_sample_el1>

                        <all_style.style_title>
                            {js_sample.js_sample_title}
                        </all_style.style_title>

                        <all_style.style_body>
                        <div dangerouslySetInnerHTML={
                        {__html:  js_sample.js_sample_body}} />
                   
                        </all_style.style_body>

                        <all_style.style_result>
                        <div dangerouslySetInnerHTML={
                        {__html:  js_sample.js_sample_result}} />
                        </all_style.style_result>

                    </all_style.style_sample_el1>
                </all_style.style_sample_el0>                
            </div>
    )
    
}

export {JS_Sample_Minimize, JS_Sample};