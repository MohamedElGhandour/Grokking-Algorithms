const GCD = (A, B) => {
  // A = B.Q + R
  while (true) {
    if (A === 0) return B;
    if (B === 0) return A;
    if (A === B * Math.trunc(A / B) + (A % B)) {
      const C = A;
      A = B;
      B = C % B;
    } else return null;
  }
};
// GCD of 270 and 192
console.log(GCD(1680, 640)); // 80
