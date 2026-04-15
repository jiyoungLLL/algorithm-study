// A+B - 8 성공
// 시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
// 1 초	256 MB	258249	174212	153796	67.928%

// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

let input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const testCount = Number(input[0]);

for (let i = 1; i < testCount + 1; i++) {
  if (input[i]) {
    const [a, b] = input[i].split(' ').map(Number);
    console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
  }
}
