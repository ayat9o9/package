function isNumber(num) {
  if (Number(num) !== null || Number(num) !== undefined) {
    return num;
  } else {
    return false;
  }
}

module.exports = isNumber;
