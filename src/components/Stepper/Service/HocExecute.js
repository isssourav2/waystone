export const HocExecute = (fn) => {
  let counter = 0;
  return (...args) => {
    console.log(`Counter is ${++counter}`);
    return fn(...args);
  };
};
