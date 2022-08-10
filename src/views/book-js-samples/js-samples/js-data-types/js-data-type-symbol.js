
const sample_name = "Тип данных Symbol";

//--- не стал выводить в отдельный JS, так как WEBPACK перекурочивает вызов
function add_string_to_result (result, new_string) {
    return result +  new_string + "\n";
}


function sample_function () {
    /*
        https://learn.javascript.ru/symbol
        
        «Символ» представляет собой уникальный идентификатор.
        Создаются новые символы с помощью функции Symbol()
        Символы гарантированно уникальны. Даже если мы создадим множество символов с одинаковым описанием, 
        это всё равно будут разные символы. Описание – это просто метка, которая ни на что не влияет.

        Нужен для обогащения объектов дополнительной информацией 
        без вероятности сломать функциональность других фрагментов кода, 
        использующих данный объект
    */

    let result = "";
    
    
    let Id1 = Symbol();
    // Создаём новый символ - id


    let Id21 = Symbol("id");
    let Id22 = Symbol("id");
    // Создаём символы id с описанием (именем) "id"

    result = add_string_to_result (result, "Id21===Id22 = " + (Id21===Id22));   
    //

    let user = {
        name: "Misha",
        phone: 89034543322,
        [Id21]: 123
      };
    // Символы в объекте необходимо заключить в квадратные скобки

    result = add_string_to_result (result, "---------------------------"); 
    result = add_string_to_result (result, "user key:"); 
    for (let key in user) {
        result = add_string_to_result (result, key); 
    }
    // символы, не перебираются циклом for..in
    result = add_string_to_result (result, "---------------------------"); 
    result = add_string_to_result (result, "user[Id21]=" + user[Id21]); 
    

    
    let Id31 = Symbol.for("id"); 
    // читаем символ из глобального реестра и записываем его в переменную
    // если символа не существует, он будет создан
    
    let Id32= Symbol.for("id");
    // читаем его снова и записываем в другую переменную (возможно, из другого места кода)

    result = add_string_to_result (result, "---------------------------");
    result = add_string_to_result (result, "Id31===Id32 = " + (Id31===Id32));  
    
    return (result);

}

export {sample_name, sample_function};