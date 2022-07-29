const total = (arr) => {
  let total = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    total = total + element;
  }
  return total;
};
console.log(total([1, 2, 3, 4]));

const max = (arr) => {
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > max) max = element;
  }
  return max;
};
console.log(max([1, 2, 3, 4, 85641, 48949849, 48484]));

const maxBook = (arr) => Math.max(...arr);
console.log(maxBook([1, 2, 3, 4, 85641, 48484]));
