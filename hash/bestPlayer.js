function solution(genres, plays) {
  let answer = [];
  const ranking = {};
  const item = {};

  for (let i = 0; i < genres.length; i++) {
    if (ranking[genres[i]] == undefined) {
      ranking[genres[i]] = plays[i];
      item[genres[i]] = [];
      item[genres[i]].push([i, plays[i]]);
    } else {
      ranking[genres[i]] += plays[i];
      item[genres[i]].push([i, plays[i]]);
    }
  }
  let sortedRank = Object.entries(ranking).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < sortedRank.length; i++) {
    item[sortedRank[i][0]].sort((a, b) => b[1] - a[1]);
    answer.push(item[sortedRank[i][0]][0][0]);
    if (item[sortedRank[i][0]].length > 1) {
      answer.push(item[sortedRank[i][0]][1][0]);
    }
  }
  console.log(answer);
  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
