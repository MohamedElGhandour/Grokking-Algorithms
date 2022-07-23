const recursiveBinarySearch = (list, goal, low = 0, high = list.length - 1) => {
  const mid = Math.round((low + high) / 2);
  const guess = list[mid];
  if (low > high) return null;
  if (guess === goal) return guess;
  if (guess < goal)
    recursiveBinarySearch(list, goal, mid + 1, high); //low = mid + 1;
  else recursiveBinarySearch(list, goal, low, mid - 1); //high = mid - 1;
};

const list = [1, 2, 3, 4, 5, 7, 9, 23, 58, 88, 99, 991];
console.log(recursiveBinarySearch(list, 6));
console.log(recursiveBinarySearch(list, 9));
console.log(recursiveBinarySearch(list, 991));
