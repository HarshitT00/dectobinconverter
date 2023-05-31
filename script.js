const calculate = () => {
    const valtocnvt = document.getElementById('digtinput').value;
    
    const decimaltobinary = (num1) => {
        let ans = "";
        if(num1==0){
            ans+='0';
            return ans ;
        }
        while(num1>0){
            let rem = num1%2;
            if(rem == 0) ans="0"+ans;
            else ans="1"+ans;
            num1=Math.floor(num1/2);
            console.log(num1);
        }
        return ans ;
    }

    let result ;

    result = decimaltobinary(valtocnvt);
    console.log(result);
    document.getElementById('myresult').innerHTML = `result in binary = ${result}`

}