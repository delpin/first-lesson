
const sample_name = "Работа с массивом";

//--- не стал выводить в отдельный JS, так как WEBPACK перекурочивает вызов
function add_string_to_result (result, new_string) {
    return result +  new_string + "\n";
}


function sample_function () {

    let result = "";
    const fruits = ["Яблоко", "Апельсин", "Груша"]; 
    fruits.pop();        
    result = add_string_to_result (result, fruits.toString());
    //
    fruits.push("Арбуз");   
    result = add_string_to_result (result, fruits.toString());
    //
    return (result);

}

export {sample_name, sample_function};