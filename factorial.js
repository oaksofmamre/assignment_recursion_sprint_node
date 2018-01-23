"use strict";
const assert = require("assert");

const factorialResursive = n => {
	if (n === 0 || n === 1) {
		return 1;
	}
	return n * factorialResursive(n - 1);
};

assert(factorialResursive(0) === 1);
assert.equal(factorialResursive(5) === 120, true);
assert.notEqual(factorialResursive(6) === 120, true);

const factorialIterative = n => {
	if (n === 0 || n === 1) {
		return 1;
	}
	let result = 1;
	while (n > 1) {
		result = result * n;
		n--;
	}
	return result;
};

assert(factorialIterative(0) === 1);
assert.equal(factorialIterative(5) === 120, true);
assert.notEqual(factorialIterative(6) === 120, true);
