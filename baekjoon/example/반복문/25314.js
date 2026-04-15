// 코딩은 체육과목 입니다
//      시간 제한	                메모리 제한
// 0.5 초 (추가 시간 없음)	    1024 MB (추가 메모리 없음)

// 문제
// 혜아가 N바이트 정수까지 저장할 수 있다고 생각해서 칠판에 쓴 정수 자료형의 이름은 무엇일까?

// 입력
// 첫 번째 줄에는 문제의 정수
// $N$이 주어진다.
// $(4\le N\le 1\, 000$;
// $N$은
// $4$의 배수
// $)$

// 출력
// 혜아가
// $N$바이트 정수까지 저장할 수 있다고 생각하는 정수 자료형의 이름을 출력하여라.

let input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const byte = input[0];

console.log('long '.repeat(byte / 4) + 'int');
