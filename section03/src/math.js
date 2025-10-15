export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// import 할 때 중괄호 없이 함수를 불러올 수 있음 -> 이름도 변경 가능
export default function multiply(a, b) {
    return a * b;
}

// module.exports = {
//     add, 
//     sub
// }

// export { add, sub };