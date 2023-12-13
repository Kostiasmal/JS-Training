/*    2.6 t1    */

/*let yourName = prompt("Введіть ваше імʼя:");

alert(`Вас звати ${yourName} !`);


/*    2.8 t1   /*


- a = 2
- b = 2
- c = 2
- d = 1


/*    2.8 t2    /*

X = 5
A = 4

/*    2.8 t3   /*

1) "10"
2)  -1
3)  1 
4)  2
5)  6
6)  9px
7)  $45
8)  2
9)  NaN
10) " - 9 5 "
11) -14
12) 1
13) NaN
14) Не зрозумів що означає " \t \n "

/*    2/8 t4    /*

+ a ++ b

/*    2.9 t1    
1) True
2) False
3) True
4) True
5) False
6) False     (Не зрозумів що означає "\n0\n")
7) False     (Не зрозумів що означає "\n0\n")
/*
 

/*    2.10 t1    *//*


Так, буде показано.




/*    2.10 t2    *//*


let officialName = prompt("Яка офіційна назва Java script?");

if (officialName == "Ecmascript"){
    alert("Правильно!");
} else {
    alert("Не знаєте? Ecmascript!");
}


/*    2.10 t3    *//*


let numericalValue = prompt("Введіть число");
if (numericalValue > 0) {
    alert (1);
}   else if (numericalValue < 1) {
    alert (-1);
}   else {
    alert (0);
}


/*    2.10 t4    *//*


let result = (a + b < 4) ? "Нижче" : "Вище";


/*    2.10 t5    *//*


let message = (login == "Працівник") ? "Привіт" :
(login == "Директор") ? "Вітаю" :
(login == "") ? "Немає логіну" : "";







/*    2.11 t1    *//*


Код виведе значення 2          


/*    2.11 t2    *//*


Спочатку код виведе 1 потім 2  


/*    2.11 t3    *//*


Код виведе значення "null"     


/*    2.11 t4    *//*


Код виведе спочатку 1 потім Undefined    


/*    2.11 t5    *//*  


Відповідь: 3     


/*    2.11 t6    */


// if (age >= 14 && age <= 90);


/*    2.11 t7    *//*


1) if (!(age >=14 && age <=90))

2) if (age <14 || age >90)


/*    2.11 t8    *//*


---


/*    2.11 t9    */ /*


let login = prompt("Хто там?")

if (login === "Admin") {

    let password = prompt ("Введіть пароль:");
    
    if (password === "Господар") {
        alert( "Ласкаво просимо!" );
    } else if (password === null || password === '') {
     alert("Скасовано");
    } else {
        alert("Неправильний пароль!");
    }
     
    } else if (login === null || login === "") {
        alert("Скасовано");
    } else {
        alert("Неправильний логін!");
    }
        
    

    

/*    2.13 t1    *//*


Відповідь: 1


/*    2.13 t2    *//*


Префіксна форма виведе значення від 1 до 4

Постфіксна форма виведе значення від 1 до 5


/*    2.13 t3    *//*


Обидва цикли виведуть від 0 до 4


/*    2.13 t4    *//*


for (let i = 2;i <=10;i++) {
    if (i % 2 == 0) {
      alert(i);
    }
}


/*    2.13 t5    *//*


let i = 0;
while (i<3) {
  alert(`Число ${i}!`);
  i++;
}


/*    2.13 t6    *//*


while (true) {
    let num = prompt("Число яке Ви ввели більше за 100?");
    if(num>=100||!num) 
    break;
    }

    let num 
    do {
    
        num = prompt("Число яке Ви ввели більше за 100?");
    } while (num<=100 && num);

/*    2.13 t7    *//*


---


/*    2.14 t1    *//*


if (browser == "Edge") {
  alert( "You've got the Edge!" );
} else if (browser == "Chrome"
|| browser == "Firefox"
|| browser == "Safari"
|| browser == "Opera") {
    alert("Ми підтримуємо ці браузери");
} else {
    alert("Маємо надію що ця сторінка виглядатиме добре!")
}


/*    2.14 t2    */

/*
let a = +prompt("a?","");
switch (a) {
    
    case 0:
      alert(0);
      break;
      case 1:
        alert(1);
        break;

      case 2:
      case 3:
        alert( "2,3" );
        break;
    }
    */


/*    2.15 t1    *//*


Немає різниці


/*    2.15 t2    */ 

/*    З використанням тернарного оператора "?"    *//*


function checkAge(age){
    return (age > 18) ? true : confirm ("Батьки дозволили?");
}


/*    З використанням оператора "Або ||"    *//*


function checkAge(age){
    return (age > 18) || confirm ("Батьки дозволили?");
}


/*    2.15 t3    *//*


function min(a, b){
    if (a < b) {
    return a;
    } else {
    return b;
    }
}


/*    2.15 t4    *//*


function pow(x, n) {
    let result = x;
    for(let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}

let x = prompt ("Введіть перше число:","")
let n = prompt ("Введіть друше число:","")

if ( n < 1 ) {
    alert ("Степінь не підтримується!");

    }else{
     alert (pow (x, n));
    
}

/*    2.17 t1    */


let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}

ask(
    "Ви згодні?",
   () => alert("Ви погодидись."),
   () => alert("Ви скасували виконання.")
);

