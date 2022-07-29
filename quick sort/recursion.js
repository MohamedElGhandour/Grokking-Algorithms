const total = (arr) => {
  const firstElement = arr[0];
  if (arr.length === 0) return 0;
  arr.shift();
  return firstElement + total(arr);
};
console.log(total([6, 16, 61, 4848, 85]));

const count = (arr) => (arr.length === 0 ? 0 : 1 + count(arr.slice(1)));
console.log(count([6, 16, 61, 4848, 85]));

const total2 = (arr) => (arr.length === 0 ? 0 : arr[0] + total2(arr.slice(1)));
console.log(total2([6, 16, 61, 4848, 85]));
