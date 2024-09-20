const calculateNumber = (type, a, b) => {
  const n1 = Math.round(a);
  const n2 = Math.round(b);

  if (type === 'SUM') {
    return (n1 + n2);
  }
  if (type === 'SUBTRACT') {
    return (n2 - n1);
  }
  if (type === 'DIVIDE') {
    if (n2 === 0) {
      return ('Error');
    }
    return (n1 / n2);
  }
};

module.exports = calculateNumber;
