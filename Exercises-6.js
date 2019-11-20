function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var arr = [];
  var kecil = 100;
  for(var i = 0 ; i<=angka ; i++) {
    if(angka % i === 0) {
      arr.push(String(angka/i)+(i))
      console.log(arr)
    }
  }
  for(var j = 0 ;j<arr.length ;j++) {
    if(kecil>arr[j].length) {
      kecil=arr[j].length;
    }
  }
  return kecil
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2