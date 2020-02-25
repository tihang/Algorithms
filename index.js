function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

const result = multiply(4)(5)(1);

var arr = [1, 2, 3, 4, 5];

const avg = arr => {
  let total;
  arr.reduce((acc, current) => {
    return (total = acc + current);
  });

  return total / arr.length;
};
