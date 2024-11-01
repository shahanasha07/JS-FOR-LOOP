//pyramid
// let n=5;
// for(i=1; i<=n; i++){
//     let row=""
//     for(j=i; j<=n-1; j++){
//         row+=" "
//     }
//     for(k=1; k<=i; k++){
//         row+="* "
//     }
//     console.log(row)
// }

//reverse pyramid
var row=5;

for( var i=row; i>=1; i--){
   let str="";

   for(var j=1 ;j<= row-i; j++){
      str += " ";

   }

   for(var k=1; k<=i; k++){
    str +="* ";
   }
   console.log(str);
}
