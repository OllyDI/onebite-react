// const moduleData = require("./math");
// const { add, sub } = require("./math");
/*
패키지에 "type": "module"을 붙이면 ES module 방식으로 작동 -> require가 아닌 import 방식으로 작동
*/

import mul, { add, sub } from "./math.js";
import randomColor from "randomcolor";

console.log("test");
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));

const color = randomColor();
console.log(color);