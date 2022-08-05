

//---
function add_string_to_result (result, new_string) {
    return result +  new_string + "\n";
}


//---- Работа с массивом
function sample1 () {

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

//--- Деструктуризация массива
function sample2 () {

    let result = "";
    const [firstName, lastName] = ["Илья", "Кантор"]; 
    //
    result = add_string_to_result (result, `firstName=${firstName}`);
    result = add_string_to_result (result, `lastName=${lastName}`);
    

    return (result);

}

//---------------------------------
//---- Данные для отображения
//---------------------------------
const js_samples = [
    
    {
        js_sample_title: "Работа с массивом",
        js_sample_body: sample1.toString(),
        js_sample_result: sample1()
    },

    {
        js_sample_title: "Деструктуризация массива",
        js_sample_body: sample2.toString(),
        js_sample_result: sample2()
    }

];


export {js_samples};