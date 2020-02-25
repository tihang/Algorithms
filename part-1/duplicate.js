function removeDuplicate(arr) {
  let outArray = [];
  let element;
  let exists = {};

  for (let i = 0; i < arr.length; i++) {
    element = arr[i];
    if (!exists[element]) {
      outArray.push(element);
      exists[element] = true;
      console.log(exists);
    }
  }
  return outArray;
}

console.log(removeDuplicate([1, 1, 2, 3, 3, 4, 55, 55, 55]));
