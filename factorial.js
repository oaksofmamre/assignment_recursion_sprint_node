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

const factorialIterative1 = n => {
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
assert(factorialIterative1(0) === 1);
assert.equal(factorialIterative1(5) === 120, true);
assert.notEqual(factorialIterative1(6) === 120, true);

const factorialIterative2 = n => {
	if (n === 0 || n === 1) {
		return 1;
	}
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result = result * i;
	}
	return result;
};
assert(factorialIterative2(0) === 1);
assert.equal(factorialIterative2(5) === 120, true);
assert.notEqual(factorialIterative2(6) === 120, true);
