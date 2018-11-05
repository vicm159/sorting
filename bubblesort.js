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

function bubbleSort(array) {
  if (array.length === 0) {
    return array;
  } else {
    let swap = function(array, position1, position2) {
      let temp = array[position1];
      array[position1] = array[position2];
      array[position2] = temp;
    };
    let compar = function(arr1, arr2) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    };

    let end_index = array.length;
    let old_array = [];
    while (
      compar(old_array, array) //for (let i = 0; i < array.length; i++)
    ) {
      console.log(old_array);
      for (let j = 0; j < end_index; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
      // if (compar(old_array, array)) {
      //   break;
      // }
      old_array = array.slice();
      end_index--;
    }
    return array;
  }
}
bubbleSort([1, 3, 5, 4, 2]);
