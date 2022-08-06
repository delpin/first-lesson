
const sample_name = "Работа с Map";

//--- не стал выводить в отдельный JS, так как WEBPACK перекурочивает вызов
function add_string_to_result (result, new_string) {
    return result +  new_string + "\n";
}


function sample_function () {
    /*
        new Map() – создаёт коллекцию.
        map.set(key, value) – записывает по ключу key значение value.
        map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
        map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
        map.delete(key) – удаляет элемент по ключу key.
        map.clear() – очищает коллекцию от всех элементов.
        map.size – возвращает текущее количество элементов.
    */

    let result = "";
    
    let map = new Map();

    //--- разные варианты ключей
    map.set("1", "str1");
    map.set(1, "num1");
    map.set(true, 12345);
    //
    result = add_string_to_result (result, "map.get('1')=" + map.get("1"));   
    result = add_string_to_result (result, "map.get(1)=" + map.get(1));
    result = add_string_to_result (result, "true=" + map.get(true));    
    //
    //
    // PS: обычный объект Object приводит ключи к строкам
    // Map сохраняет тип ключей
    
    return (result);

}

export {sample_name, sample_function};