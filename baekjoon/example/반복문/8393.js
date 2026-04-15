// 합 다국어
// 시간 제한	메모리 제한
//   1 초	    128 MB

// 문제
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

// 출력
// 1부터 n까지 합을 출력한다.

let input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const n = input[0];

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);
