function mySolution(n, lost, reserve) {
    var answer = 0;
    let lostList = [...lost]
    let reserveList = [...reserve];
    let num = 0;
    let dupArr = lostList.concat(reserveList);
    const uniArr = dupArr.filter((ele, index)=>{

        return dupArr.indexOf(ele)===index;
    })
    for(var i =0; i< lost.length; i++){
        if(lostList.includes(reserveList[i])){
            const index = lostList.indexOf(reserveList[i]);
            lostList.splice(index, 1);
            reserveList.shift();
        }
    }
    while(reserveList.length>0){
        let reserveNum = reserveList.shift();
       if(lostList.indexOf(reserveNum-1)>-1){
            const index = lostList.indexOf(reserveNum-1);
            lostList.splice(index, 1);
            num++;
        }else if(lostList.indexOf(reserveNum+1)>-1){
            const index = lostList.indexOf(reserveNum+1);
            lostList.splice(index, 1);
            num++;
        }
    }
    answer= n-lost.length;
    answer +=num;
    
    console.log(answer)
    return answer;
} 

function solution(n, lost, reserve){
    let answer = 0; 
    var haveNum = n-lost.length;

    for(var i =0; i< lost.length; i++){
        if(reserve.indexOf(lost[i])!==-1){
            reserve.splice(reserve.indexOf(lost[i]), 1);
            lost.splice(i, 1);
            haveNum++;
            i--;
        }
    }
    for(let i of lost){
        let front = reserve.indexOf(i-1);
        let back = reserve.indexOf(i+1);

        if(front !==-1){
            reserve.splice(front, 1);
            haveNum++;
        }else if(back !==-1){
            reserve.splice(back, 1);
            haveNum++;
        }
    }
    answer = haveNum
   console.log(answer)
    return answer;
}

 solution(5, [2, 3, 4], [1, 2, 3]);