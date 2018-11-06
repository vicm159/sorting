// my solution
// function bubbleSort(array) {
//   if (array.length === 0) {
//     return array;
//   } else {
//     let swap = function(array, pos, pos2) {
//       let temp = array[pos];
//       array[pos] = array[pos2];
//       array[pos2] = temp;
//     };
//     let end_index = array.length;
//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < end_index; j++) {
//         if (array[j] > array[j + 1]) {
//           swap(array, j, j + 1);
//         }
//       }
//       end_index--;
//     }
//     return array;
//   }
// }

// solution from hw
function bubbleSort(array) {
  let sorted = false;
  for (let end = array.length; end > 0 && !sorted; end--) {
    sorted = true;
    for (let j = 0; j < end; j++) {
      if (!inOrder(array, j)) {
        swap(array, j);
        sorted = false;
      }
    }
  }

  return array;
}

function inOrder(array, index) {
  // pure function
  if (index === array.length - 1) return true;
  return array[index] < array[index + 1];
}

function swap(array, index) {
  // inpure function
  let oldLeftValue = array[index];
  array[index] = array[index + 1];
  array[index + 1] = oldLeftValue;
}

// function bubbleSort(array) {
//   if (array.length === 0) {
//     return array;
//   } else {
//     let swap = function(array, position1, position2) {
//       let temp = array[position1];
//       array[position1] = array[position2];
//       array[position2] = temp;
//     };
//     let compar = function(arr1, arr2) {
//       for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
//           return false;
//         }
//       }
//       return true;
//     };

//     let end_index = array.length;
//     let start = true;
//     let old_array = array.slice();
//     while (
//       !compar(old_array, array) ||
//       start //for (let i = 0; i < array.length; i++)
//     ) {
//       start = false;
//       let old_array = array.slice();
//       for (let j = 0; j < end_index; j++) {
//         if (array[j] > array[j + 1]) {
//           swap(array, j, j + 1);
//         }
//       }
//       // if (compar(old_array, array)) {
//       //   break;
//       // }

//       end_index--;
//     }
//     return array;
//   }
// }
// console.log(bubbleSort([1, 3, 5, 4, 2]));
