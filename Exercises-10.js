function changeMe(arr) {
  // you can only write your code here!
  for(var i = 0; i<arr.length; ++i) {
    console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}:`)
    var orang = {}
    orang["firstName"] = arr[i][0];
    orang["lastName"] = arr[i][1];
    orang["gender"] = arr[i][2];
    if(arr[i][3] === undefined) {
      orang["age"] = 'Invalid Birth Year'
    } else {
      orang["age"] = 2019 - arr[i][3];
    }
    console.log(orang)
  } 
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""