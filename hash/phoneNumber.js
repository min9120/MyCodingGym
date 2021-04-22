//효율성 테스트에서 실패.
const failedSolution = (phone_book) => {
  let answer = true;

  for (var i = 0; i < phone_book.length; i++) {
    for (var j = i + 1; j < phone_book.length; j++) {
      if (phone_book[i].length < phone_book[j].length) {
        if (phone_book[j].startsWith(phone_book[i])) {
          answer = false;
          return answer;
        }
      } else {
        if (phone_book[i].startsWith(phone_book[j])) {
          answer = false;
          return answer;
        }
      }
    }
  }
  return answer;
};
console.log(solution(["1195524421", "97674223", "119"]));
