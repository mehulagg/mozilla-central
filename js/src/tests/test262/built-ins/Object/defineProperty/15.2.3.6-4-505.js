// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-505
description: >
    ES5 Attributes - property ([[Get]] is a Function, [[Set]] is
    undefined, [[Enumerable]] is true, [[Configurable]] is false) is
    enumerable
---*/

var propertyFound = false;

var obj = {};

var getFunc = function() {
  return 1001;
};

Object.defineProperty(obj, "prop", {
  get: getFunc,
  set: undefined,
  enumerable: true,
  configurable: false
});

var propertyDefineCorrect = obj.hasOwnProperty("prop");
var desc = Object.getOwnPropertyDescriptor(obj, "prop");

for (var p in obj) {
  if (p === "prop") {
    propertyFound = true;
    break;
  }
}

assert(propertyFound, 'Property not found');
assert(propertyDefineCorrect, 'propertyDefineCorrect !== true');
assert.sameValue(desc.enumerable, true, 'desc.enumerable');

reportCompare(0, 0);