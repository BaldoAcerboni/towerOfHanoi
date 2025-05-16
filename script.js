let p1 = [4, 3, 2, 1];
let p2 = [];
let p3 = [];
let len = p1.length;

function towerOfHanoi(arr1, arr2, arr3, length) {
  let i = 1;
  logToConsole(arr1, arr2, arr3);

  while (!(arr2.length === length || arr3.length === length)) {
    if (i % 3 === 0) {
      if (arr2[arr2.length - 1] < arr3[arr3.length - 1] || arr3.length === 0) {
        arr3.push(arr2.pop());
      } else {
        arr2.push(arr3.pop());
      }
    } else if (i % 2 === 0) {
      if (arr1[arr1.length - 1] < arr3[arr3.length - 1] || arr3.length === 0) {
        arr3.push(arr1.pop());
      } else {
        arr1.push(arr3.pop());
      }
    } else {
      if (arr1[arr1.length - 1] < arr2[arr2.length - 1] || arr2.length === 0) {
        arr2.push(arr1.pop());
      } else {
        arr1.push(arr2.pop());
      }
    }
    logToConsole(arr1, arr2, arr3);
    i++;
  }
}

function logToConsole(arr1, arr2, arr3) {
  console.log("p1: ", arr1);
  console.log("p2: ", arr2);
  console.log("p3: ", arr3);
}

towerOfHanoi(p1, p2, p3, len);
