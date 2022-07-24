const countdown = (i) => {
  console.log(i);
  // base case
  if (i <= 0) return;
  // recursive case
  countdown(i - 1);
};

countdown(5);
