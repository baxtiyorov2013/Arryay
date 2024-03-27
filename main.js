const array = ["Olma", "banan", "gilos", "Shoftoli"];
let long = array.length;
console.log(array);
alert("Boshlanishida Arrayning uzunligi: " + long)

let result = confirm("Sizning arrayingizdan ma'lumotlarni olib tashlamoqchimiz")

if (result) {
    array.pop()
    const information = ["Olma", "banan", "gilos"] 
    let remove = array.length;
    alert("Arrayning uzunligi: " + remove)
    console.log(information);
}else {
    let remove = array.length;
    alert("Arrayning uzunligi: " + remove)
    console.log(array);
}