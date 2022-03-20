// let name = prompt('Какое «официальное» название JavaScript?');

// if (name == "ECMAScript"){
//     alert("Верно")
// } else {
//     alert("Не знаете? ECMAScript!")
// };

// let number = prompt("Number");

// if (number > 0) {
//     alert(1)
// } else if (number < 0){
//     alert (-1)
// } else if(number == 0){
//     alert(0)
// };

// let a = +prompt("a");
// let b = +prompt("b");

// let message = (a + b < 4) ? "Мало": 
//     "Много";

//  alert(message);

// let login = prompt('login');

// if(login === "admin") {
//     let password = prompt('parol')
//     if (password === "boy"){
//         alert('ok')
//     } else if ( password === "" || password === null){
//         alert ('otmena')
//     } else {
//         alert ('ne verni parol')
//     }
// } else if(login === "" || login === null){
//     alert("otmena")
// } else {
//     alert("ya vas ne znayu")
// };
// for (let i = 1; i <= 10; i++){
//     if (i % 2 === 0){
//         alert(i);
//     }
// }
// let i = 0;

// while(i < 3 ){
//     alert( `number ${i}!` )
//     i++;

// const number = +prompt('Введите число между 0 и 3', '');

// switch(number){
//     case 0:
//     alert('Вы ввели число 0');
//     break;
//     case 1:
//     alert('1');
//     break;
//     case 2:
//     case 3:
//     alert('2 or 3');
//     break;
// }

// let age = prompt('Year?',);

// function checkAge(age) {
//     // if (age > 18) {
//     //   return true;
//     // } else {
//     //   return confirm('Родители разрешили?');
//     // }
//     (age > 18) || confirm('Родители разрешили?');
// }

// checkAge(age);
// function number(a,b){
//     if (a < b){
//         alert(a)
//     } else {
//         alert(b)
//     }
// };
// number(3,1);
// let a = prompt ("a");
// let b = prompt ("b")
// function pow (a,b){
//     let ab = a ** b;
//     alert(ab);
// }
// pow(a,b);
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );
  let ask = (question, yes, no) => {
      confirm (question)?
      yes():
      no();
  }
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );
  

