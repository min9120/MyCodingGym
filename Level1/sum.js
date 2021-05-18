function solution(absolutes, signs) {
  var answer = 0;
  for (var i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }

  return answer;
}

solution([4, 7, 12], [true, false, true]);
