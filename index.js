function splitName(name) {
  if (typeof name === "string") {
    return name.split(" ");
  } else {
    return;
  }
}

module.exports = splitName;
