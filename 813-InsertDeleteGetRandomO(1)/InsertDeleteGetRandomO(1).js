// https://leetcode.com/explore/interview/card/top-interview-questions-medium/112/design/813/

const RandomizedSet = function() {
  this.map = new Map();
  this.array = [];

  this.swap = function(a, b) {
    const tmp = this.array[a];
    this.array[a] = this.array[b];
    this.array[b] = tmp;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) return false;

  this.map.set(val, this.array.length);
  this.array.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) return false;

  const index = this.map.get(val);

  this.swap(index, this.array.length - 1);
  this.array.pop();
  this.map.set(this.array[index], index);
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.array[Math.floor(Math.random() * this.array.length)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
