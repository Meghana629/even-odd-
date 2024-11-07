// num=prompt("enter a number")
// evensum=0,
// oddsum=0
// for( i=0;i<=num.length;i++){
//     if(num[i]%2==0){
//         evensum=evensum+Number(num[i])
//     }
//     if(num[i]%2==1){
//         oddsum=oddsum+Number(num[i])
//     }
    
// }
//     if(evensum>oddsum){
//         console.log("even number is greater",evensum)
//     }
//     else{
//         console.log("odd number is greater",oddsum)
//     }
    
    num=prompt("enter a number")
evencount=0,
oddcount=0
for( i=0;i<=num.length;i++){
    if(num[i]%2==0){
        evencount++
    }
    if(num[i]%2==1){
        oddcount++
    }
    
}
    if(evencount>oddcount){
        console.log("even number is more",evencount)
    }
    else{
        console.log("odd number is more",oddcount)
    }
    