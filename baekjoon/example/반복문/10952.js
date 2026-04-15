// A+B - 5
// 시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
// 1 초	256 MB	376660	200785	170427	52.971%

// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 입력의 마지막에는 0 두 개가 들어온다.

// 출력
// 각 테스트 케이스마다 A+B를 출력한다.

let input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const inputLength = input.length;

for (let i = 0; i < inputLength + 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  const sum = a + b;
  if (sum === 0) break;
  console.log(sum);
}
