let arr=[3,20,33,44,50,60,90,95];
let n=3;
function nthlargest(arr,n){
    var x = 0,
        y = 0,
        z = 0,
        temp = 0,
        tnum = arr.length, 
        flag = false, 
        result = false; 

    while(x < tnum){
        y = x + 1; 
        
        if(y < tnum){
            for(z = y; z < tnum; z++){
                
                if(arr[x] < arr[z]){
                    temp = arr[z];
                    arr[z] = arr[x];
                    arr[x] = temp;
                    flag = true; 
                }else{
                    continue;
                }	
            }					
        }
        
        if(flag){
            flag = false;
        }else{
            x++; 
            if(x === n){ 
              
                result = true;
            }	
        }
        if(result){
            break;
        }
    }

    return (arr[(n - 1)]);	
}

console.log(nthlargest(arr, n));



