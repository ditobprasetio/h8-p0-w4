// function checkAB(num) {
//   // you can only write your code here!
//   var jarakMaju = 0;
//   var jarakMundur = 0
// for(var i = 0 ; i < num.length ; i++){
//   if(num[i] === 'a'){
//     for(var j = i ; j < num.length ; j++){
//       if (num[j] === 'b'){
//         jarakMaju = (j-1) - i 
//       }
//     }
//     for(var k = i ; k >= 0 ; k--){
//       if (num[k] === 'b'){
//         jarakMundur = (i) - k 
//       }
//     }
//   } 
// }
// if(jarakMaju === 3 || jarakMundur === 3){
//   return true
// } else {
//   return false
// }
// }
// // TEST CASES


function checkAB(num) {
  for(var i = 0; i < num.length - 4;i++) {
    if(num[i] === 'a' && num[i + 4] === 'b' || num[i] === 'b' && num[i + 4] === 'a') {
      return true;
    }
  }
  return false
}
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false