// Simplify / Refactorize this function
const getDiscount = (amount, type, disc) => {
  if (type === 2 || type === 4) {
    const reduc = type === 2 ? 0.1 : 0.5;
    return amount - reduc * amount - disc * (amount - reduc * amount);
  }

  if (type === 3) {
    return 0.7 * amount - disc * (0.7 * amount);
  }

  throw new Error("Type provided is incorrect");
};

const calculateDiscount = (amount, type, years) => {
  const disc = years >= 5 ? 5 / 100 : years / 100;

  if (type === 1) {
    return amount;
  }

  return getDiscount(amount, type, disc);
};

const assert = (expected, actual) => {
  if (expected !== actual)
    console.warn(`${actual} is not equal to ${expected}`);
};

assert(99, calculateDiscount(100, 2, 1));
