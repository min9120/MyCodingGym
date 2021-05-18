function solution(answers) {
    var answer = [];
 
    let num1 = [1, 2, 3, 4, 5]
    let num2 = [2, 1, 2, 2, 2, 3, 2,4, 2 ,5]
    let num3 = [3, 3, 1, 1, 2, 2, 4,4, 5, 5];
    const calc=(num, ans)=>{
        let val = 1;
        while(true){
            if((val%num==0)&&(val%ans)){
                break;
            }
            val++;
        }
        return val;
    }
    console.log(calc(3, 4));
    
    if(num1.length!== answers.length){
        let rotate = Math.ceil(answers.length/num1.length)
        rotate--;
        while(rotate>0){
        num1= num1.concat(num1)
           rotate--;
        }
    }
    console.log(num1)
    return answer;
}
solution([1, 2, 3, 4, 5, 5])


function test (){

    //js 의 변수 호이스팅 
    console.log(num);
    num = 80;
    var num ;
    console.log(num);

}
