const GCD = (A, B) => {
  // A = B.Q + R
  if (A === 0) return B;
  if (B === 0) return A;
  if (A === B * Math.trunc(A / B) + (A % B)) return GCD(B, A % B);
  return NULL;
};
// GCD of 270 and 192
console.log(GCD(1680, 640));

const getGCD = (a, b) => (!b ? a : getGCD(b, a % b));

console.log(getGCD(1680, 640)); // 80

const gcdOfSet = (set) => {
  let result = set[0];
  let newArr = set.slice(1);

  newArr.map((el) => {
    result = getGCD(result, el);
  });

  return result;
};

const set = [1680, 640, 3360, 160, 240, 168000];

console.log(gcdOfSet(set)); // 80
