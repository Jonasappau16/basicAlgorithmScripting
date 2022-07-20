    //   CHUNKY MONKEY
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let i = 0;
    while(i < arr.length){
      newArr.push(arr.slice(i,i + size))
      i += size;
    }
    return newArr;
  }
  chunkArrayInGroups(["j", "o", "n", "a","s"], 2);




//          Falsy Bouncer
//   Remove all falsy values from an array.
  
//   Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
  
//   Hint: Try converting each value to a Boolean.

  function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
      if(arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }
  bouncer([7, "ate", "", false, 9]);