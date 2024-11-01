// let n=15
// for(i=1; i<=n; i++){
//     let row=""
//     for(j=1; j<=n-i; j++){
//         row+=" "
//     }
//     for(k=1; k<=i; k++){
//         if(i==3&&k==2){
//             row+="  "
//         }
//         else{
//             row+="* "
//         }
//     }
//     console.log(row)
// }
 
let n=4
for(i=1; i<=n*2-1; i++){
     let row=""
     let limit=i<n?i:n*2-i;
     for(j=1; j<=n-limit; j++){
        row+=" "
     }
    
    for(k=1; k<=limit; k++){
       if(i==n&&k==2|| i==n&&k==3){
        row+="  "
       }
       else{
         row+="* "
       }
    }
    
    console.log(row)
}
 
// let n=4
// for(i=1; i<=n*2-1; i++){
//      let row=""
//      let limit=i<n?i:n*2-i;
//      for(j=1; j<=n-limit; j++){
//         row+=" "
//      }
    
//     for(k=1; k<=limit; k++){
//       row+="* "
    
//     console.log(row)
// }
// }