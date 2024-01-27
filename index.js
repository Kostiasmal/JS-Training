/*    5.7 t1    */


function unique(arr){
    return Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log( unique(values) );


/*    5.7 t2    *//*


Не зрозумів



/*    5.8 t1    *//*


Не зрозумів


/*    5.8 t2    */


let messages = [
    {text: "Привіт", from: "Іван"},
    {text: "Як справи?", from: "Іван"},
    {text: "До зустрічі", from: "Аліса"}
  ];

let readMap = new WeakMap();
readMap.set(messages[0], new Date(2024, 1, 1))


/*    5.9 t1    */


function sumSalaries(salaries){
    let sum = 0;
    for (let salary of Obgect.values(salaries)){
        sum +=salary;

    }

    return sum;
}
let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
}
alert (sumSalaries(salaries));


/*    5.9 t2    */


function count(obj) {
    return Obgect. keys(obj).length;
}