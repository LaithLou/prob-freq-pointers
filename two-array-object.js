"use strict";

/** two arrays of two lengths keys values return an obj form key and obj if theres's
 * no value for the key asign it null, then return object.
 */

function twoArrayObject(keys, values) {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i] || null;
  }
  return obj;
}
