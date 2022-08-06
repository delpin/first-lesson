import * as array_sample1 from "./js-samples/js-array/array-sample1.js";
import * as array_sample2 from "./js-samples/js-array/array-sample2.js";



//---------------------------------
//---- Данные для отображения
//---------------------------------
const js_samples = [
    
    {
        js_sample_title: array_sample1.sample_name,
        js_sample_body: array_sample1.sample_function.toString(),
        js_sample_result: array_sample1.sample_function()
    },

    {
        js_sample_title: array_sample2.sample_name,
        js_sample_body: array_sample2.sample_function.toString(),
        js_sample_result: array_sample2.sample_function()
    }

];


export {js_samples};