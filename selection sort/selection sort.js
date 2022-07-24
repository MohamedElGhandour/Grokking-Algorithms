const findSmallest = (list) => {
  let smallest = list[0];
  let smallestIndex = 0;
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (smallest > element) {
      smallest = element;
      smallestIndex = index;
    }
  }
  return smallestIndex;
};
const selectionSort = (list) => {
  const newList = [];
  const length = list.length;
  for (let index = 0; index < length; index++) {
    const smallest = findSmallest(list);
    newList.push(list.splice(smallest, 1)[0]);
  }
  return newList;
};

const list = [
  16, 886, 1, 6, 861, 86, 1, 6, 861, 86, 48, 48, 68, 148, 41, 89, 4, 89,
];
console.log(selectionSort(list));
// console.log(selectionSort(list, 9));
// console.log(selectionSort(list, 991));
