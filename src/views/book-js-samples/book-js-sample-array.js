




//---- Работа с массивом
function sample1 () {

    //------------------------------------------------------------------------------------------------
    //---- тело функции
    //------------------------------------------------------------------------------------------------
    let result = "";
    const fruits = ["Яблоко", "Апельсин", "Груша"]; 
    fruits.pop();
    
    result = result + fruits.toString() + "<br/>";
    fruits.push("Арбуз");
    result = result + fruits.toString() + "<br/>";
    //------------------------------------------------------------------------------------------------

    return (result);

}

//--- Деструктуризация массива
function sample2 () {

    //------------------------------------------------------------------------------------------------
    //---- тело функции
    //------------------------------------------------------------------------------------------------
    let result = "";
    const [firstName, lastName] = ["Илья", "Кантор"]; 
    result = "firstName=" + firstName + " <br/>lastName=" + lastName;
    //------------------------------------------------------------------------------------------------

    return (result);

}

//---------------------------------
//---- Данные для отображения
//---------------------------------
const js_samples = [
    
    {
        js_sample_title: "Работа с массивом",
        js_sample_body: `
            const result = "";<br/>
            const fruits = ["Яблоко", "Апельсин", "Груша"]; <br/>
            fruits.pop();<br/>
            
            result = result + result.toString();<br/>
            fruits.push("Арбуз");<br/>
            result = result + result.toString();<br/>
        `,
        js_sample_result: sample1()
    },

    {
        js_sample_title: "Деструктуризация массива",
        js_sample_body: `
            const result = "";<br/>
            const [firstName, lastName] = ["Илья", "Кантор"]; <br/>
            result = "firstName=" + firstName + " lastName=" + lastName;<br/>
        `,
        js_sample_result: sample2()
    }




];


export {js_samples};