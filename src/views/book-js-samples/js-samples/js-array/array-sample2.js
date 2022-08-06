
const sample_name = "Деструктуризация массива";

//--- не стал выводить в отдельный JS, так как WEBPACK перекурочивает вызов
function add_string_to_result (result, new_string) {
    return result +  new_string + "\n";
}

function sample_function () {

    let result = "";
    const [firstName, lastName] = ["Илья", "Кантор"]; 
    //
    result = add_string_to_result (result, `firstName=${firstName}`);
    result = add_string_to_result (result, `lastName=${lastName}`);
    

    return (result);

}


export {sample_name, sample_function};