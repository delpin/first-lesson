import * as utils from "../../book-js-utils.js";


const sample_name = "Работа с массивом";


function sample_function () {

    let result = "";
    const fruits = ["Яблоко", "Апельсин", "Груша"]; 
    fruits.pop();        
    result = utils.add_string_to_result (result, fruits.toString());
    //
    fruits.push("Арбуз");   
    result = utils.add_string_to_result (result, fruits.toString());
    //
    return (result);

}

export {sample_name, sample_function};