const quick = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr[Math.round(arr.length / 2)];
  const lessThanPivot = [];
  arr.forEach((element) => element < pivot && lessThanPivot.push(element));
  const moreThanPivot = [];
  arr.forEach((element) => element > pivot && moreThanPivot.push(element));
  console.log(pivot, " - ", ...lessThanPivot, " - ", ...moreThanPivot);
  return [...quick(lessThanPivot), pivot, ...quick(moreThanPivot)];
};
const arr = [
  4189, 419, 784, 981, 89, 498, 189, 4, 81, 98, 489, 189, 4, 984, 9, 494,
  498489, 49, 94,
];
console.log(quick(arr));
