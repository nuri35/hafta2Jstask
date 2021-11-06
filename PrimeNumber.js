

const findPrime = (...par) =>{
    
  const snc =   par.map((val)=>{
    let i = 2;
        if(val % i !== 0){
            return val
        
        }

    })

    return "Prime Number are " + snc;


}



console.log(findPrime(2,5,8,21, 13))
