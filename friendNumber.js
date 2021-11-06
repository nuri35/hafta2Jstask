const friendNumber = (val,val2)=>{
let deg = 0;
let deg2= 0;
let arr = []
let arr2 = []

    for(let i = 1;i< val;i++){

        if(val%i==0){
            deg = deg+i
            arr.push(deg)
        }

    }

    for(let i = 1;i< val2;i++){

        if(val2%i==0){
            deg2 = deg2+i
            arr2.push(deg2)
        }

    }

   

     return arr[arr.length -1 ] === val2   &&  arr2[arr2.length -1 ] === val ? "Arkadaş sayılardır" : "Arkadaş sayı değiller" ;



}


console.log(friendNumber(17296,18416 ))