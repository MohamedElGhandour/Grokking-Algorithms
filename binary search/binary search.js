const binarySearch = (list, goal) => {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const mid = Math.round((low + high) / 2);
    const guess = list[mid];
    if (guess === goal) return guess;
    if (guess < goal) low = mid + 1;
    else high = mid - 1;
  }
  return null;
};

const list = [1, 2, 3, 4, 5, 7, 9, 23, 58, 88, 99, 991];
console.log(binarySearch(list, 6));
console.log(binarySearch(list, 9));
console.log(binarySearch(list, 991));
