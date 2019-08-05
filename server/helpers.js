const Helpers = {
  indexOf(collection, target) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === target) {
        return i;
      }
    }
    return -1;
  }
}

module.exports = Helpers;
