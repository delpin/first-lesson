import * as map_sample1 from "./js-samples/js-map-set/map-sample1.js";
import * as array_sample1 from "./js-samples/js-array/array-sample1.js";
import * as array_sample2 from "./js-samples/js-array/array-sample2.js";
import * as data_types_symbol_sample1 from "./js-samples/js-data-types/js-data-type-symbol.js";


//---------------------------------
//---- Данные для отображения
//---------------------------------
const js_samples = [
    
    {
        js_sample_window_state: 0,
        js_sample_title: map_sample1.sample_name,
        js_sample_body: map_sample1.sample_function.toString(),
        js_sample_result: map_sample1.sample_function()
    },
    {
        js_sample_window_state: 0,
        js_sample_title: array_sample1.sample_name,
        js_sample_body: array_sample1.sample_function.toString(),
        js_sample_result: array_sample1.sample_function()
    },

    {
        js_sample_window_state: 0,
        js_sample_title: array_sample2.sample_name,
        js_sample_body: array_sample2.sample_function.toString(),
        js_sample_result: array_sample2.sample_function()
    },

    {
        js_sample_window_state: 0,
        js_sample_title: data_types_symbol_sample1.sample_name,
        js_sample_body: data_types_symbol_sample1.sample_function.toString(),
        js_sample_result: data_types_symbol_sample1.sample_function()
    }

];


export {js_samples};