const superNumber = function(){


let mukemsy = []

for(let sayi = 1; sayi < 1000; sayi++)
{
    let toplam = 0;
  for (let bolum = 1; bolum < sayi; bolum++)
    {
        if (sayi%bolum==0)//pozitif bolenleri 6 için  1, 2, 3 ve 6  ornegın
        {
    
        toplam=toplam+bolum;	
     }
    
    }
	
    if(toplam==sayi){
        mukemsy.push(sayi)
    }

  
}

 
return mukemsy

}



console.log(superNumber())



const AsalSay = function(){


    let asalarr = []
    
    for(let sayi = 1; sayi < 1000; sayi++)
    {
        let asal=true;
      for (let bolum = 2; bolum < sayi; bolum++)
        {
            if (sayi%bolum==0)
            {
        
                asal = false    
         }
        
        }
        if(asal==true){
        console.log(sayi+" asaldır.")
        }
      
    }
    
     

    
    }
    
    AsalSay()
 