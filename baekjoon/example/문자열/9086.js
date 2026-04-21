// 문자열
// 시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
// 1 초	128 MB	130688	82660	73805	63.697%

// 문제
// 문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.

// 입력
// 입력의 첫 줄에는 테스트 케이스의 개수 T(1 ≤ T ≤ 10)가 주어진다. 각 테스트 케이스는 한 줄에 하나의 문자열이 주어진다. 문자열은 알파벳 A~Z 대문자로 이루어지며 알파벳 사이에 공백은 없으며 문자열의 길이는 1000보다 작다.

// 출력
// 각 테스트 케이스에 대해서 주어진 문자열의 첫 글자와 마지막 글자를 연속하여 출력한다.

let input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const test_case = Number(input[0]);

for (let i = 1; i <= test_case; i++) {
  let word = input[i];
  console.log(word[0] + word.at(-1));
}
