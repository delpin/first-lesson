import * as utils from "../../book-js-utils.js";

const sample_name = "Деструктуризация массива";

function sample_function () {

    let result = "";
    const [firstName, lastName] = ["Илья", "Кантор"]; 
    //
    result = utils.add_string_to_result (result, `firstName=${firstName}`);
    result = utils.add_string_to_result (result, `lastName=${lastName}`);
    

    return (result);

}


export {sample_name, sample_function};