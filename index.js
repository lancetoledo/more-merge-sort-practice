// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let array1 = [34, 56, 12, 1, 0, 100];

// Function that divides an arary in half recursively untill there's one element left
function mergeSort(arr) {
  //base case for when there's only one element in the array
  if(arr.length<=1) {
    return arr
  }
  //Declare the mid and we will use this to cut the array in half
  let mid = Math.floor(arr.length/2);

  //Let left call the function recursively with the left side of the array
  let left = mergeSort(arr.slice(0,mid))
  //right calls the function recursively with the right side of the array
  let right = mergeSort(arr.slice(mid))

  return merge(left,right)

}

// subroutine or helper function that handles the merging of arrays after the array is reduced to 1 element
function merge(left,right) {
  //Declare an empty array where the variables will go
  let sorted = []
  // Loop that continues while there are items in BOTH arrays
  while(left.length && right.length) {
    if(left[0]>right[0]) {
      //push the value that's the lowest into the sorted array
      sorted.push(right.shift())
    }
    else {
      sorted.push(left.shift())
    }
  }
  //return sorted and if there's anything left over concat it
  return sorted.concat(left.slice().concat(right.slice()))
}

console.log(mergeSort(array1))