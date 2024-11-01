// let n=5;

// for(i=0; i<n-1; i++){
//     let row="";
     
//     for(j=0; j<n-1; j++){
//         let space="";
//         row=row+"*"

//         for(k=0; k<n-2; k++){
//             space=row+" "
//         }
//         console.log(space)
//     }
// }


//square
// let limit=5
// let a;
// for(i=1; i<=limit; i++){
//     a="";
//     for(j=1; j<=limit; j++){
//         a+="* "
//     }
//     console.log(a)
// }





// parallellogram
// for(i=1; i<=5; i++){
//     let row="";

//     for(j=0; j<5; j++){
//         row+="* "
        
//     }

//     for(k=5; k>i; k--){
//         row=" "+row
    
//     }
//     console.log(row)
//  }


//revers pallin

// for(i=1; i<=5; i++){
//     let row="";

//     for(j=0; j<5; j++){
//         row+="* "
        
//     }

//     for(k=1; k<=i; k++){
//         row=" "+row
    
//     }
//     console.log(row)
//  }


// for(i=1; i<=5; i++){
//     let row=""

//     for(j=0; j<i; j++){
//         if(i%2!=0){
//             row+="*"
//         }
//         else{
//             row+="$"
//         }
//     }console.log(row)
// } 


// for(i=1; i<=3; i++){
//     let row=""

//     for(j=1; j<=4; j++){
//         if(j==1 || j==4){
//             row+="*"
//         }
//         else if(j==2 || j==3){
//             row+=" "
//         }
       
//     }
//     console.log(row)
// }





// triangle 
// let n=5;
// for(i=1; i<=n; i++){
//     let row="";
// for(j=n; j>i; j--){
//     row= " "+row
// }

//     for(k=1; k<n; k++){
//         if(k==1 || i==n || i==2 && k==2 || i==3 && k==3 || i==4 && k==4 || k==n){
//             row+=" * "
//         }
//         else{
//             row+="  "
//         }
//     }
//     console.log(row)
// }


//reverse triangle
// let n=5;
// for(i=n; i>=1; i--){
//     let row="";
// for(j=n; j<=i; j++){
//     row= " "+row
// }

//     for(k=1; k<n; k++){
//         if(k==1 || i==1 || i==2 && k==2 || i==3 && k==3 || i==4 && k==4){
//             row+=" * "
//         }
//         else{
//             row+="  "
//         }
//     }
//     console.log(row)
// }



// let pattern = ""

// let n = 4

// for (i =1 ;i<=n*2-1;i++){
//     let star = i>n? 2*n-i: i;
//     let space = n-star;
//     for (j=1;j<=space;j++){
//         pattern+=" "
//     }
//     for (k=1; k<=star;k++){
//         pattern+="* ";
//     } 
//     pattern+="\n";
// }
// console.log(pattern);




// let pattern = ""

// let n = 5

// for (i =1 ;i<=n*2-1;i++){
//     let star = i>n? 2*n-i: i;
//     for (k=1; k<=star;k++){
//         pattern+="* ";
//     } 
//     pattern+="\n";
// }
// console.log(pattern);



//H
// let n=3;
// for(i=1; i<=n; i++){
//   let pattern=""
//   for(j=1; j<=n; j++){
//     if(j==1 || j==n || i==n-1 ){
//       pattern+="* "
//     }
//     else{
//       pattern+=" "
//     }
     
//   }
//   console.log(pattern)
// }


//C
// let n=5;
// for(i=1; i<=n; i++){
//   let pattern=""
//   for(j=1; j<=n; j++){
//     if(i==1 || i==n || j==1){
//       pattern+="* "
//     } 
//     else{
//       pattern+=" "
//     }
//   }
//   console.log(pattern)
// }


//I
// let n=5;
// for(i=1; i<=n; i++){
//   let row=""
//   for(j=1; j<=n; j++){
//     if(i==1 || i==n || j==n){
//       row+="* "
//     }
//     else{
//       row+=" "
//     }
//   }
//   console.log(row)
// }


//L
// let n=5;
// for(i=1; i<=n; i++){
//   let row=""
//   for(j=1; j<=n; j++){
//     if(j==1 || i==n){
//       row+="* "
//     }
//   }
//   console.log(row)
// }




// let n=5;
// for(i=1; i<=n; i++){
//     let row="";
// for(j=n; j>i; j--){
//     row= " "+row
// }

//     for(k=1; k<n; k++){
//         if(k==1 || i==n ||  i==2 && k==2 || i==3 && k==3 || i==4 && k==4 ){
//             row+=" * "
//         }
//         else{
//             row+="  "
//         }
//     }
//     console.log(row)
// }

//s
// let n=5;
// for(i=1;i<=n;i++){
//    let row=""
//    for(j=1;j<=n;j++){
//       if(i==1||i==3||i==n||i==2 &&j==1||i==n-1 &&j==n){
//          row+=" *"
//       }else{
//          row+="  "
//       }
//    }
//    console.log(row)
// }

// let n=4;
// for(i=1; i<=n; i++){
//   let row=""
//   for(j=n; j>=i; j--){

//     row+="* "
//   }
//   console.log(row)
// }






//T 
// let n=5;
// for(i=1; i<=n; i++){
//     let row=""
//     for(j=1; j<=n; j++){
//       if(i==1 || j==n ){
//         row+="* "
//       }
//       else{
//         row+=" "
//       }
//     }
//     console.log(row)
//   }

   


// let n=5;
// let pattern=""
// for(i=1; i<=n*2-1; i++){
//    let star= i>n? 2*n-i:i;
//    for(j=1; j<=star; j++){
//       pattern+="* "
//    }
//   pattern+="\n"
// } 
// console.log(pattern)






// square
let n=5
for(i=1; i<=n; i++){
    let row="";
     
    for(j=1; j<=n; j++){
        if(i==1 || i==n || j==1 || j==n){
            row+="* "
        }
        else{
            row+="  "
        }
    }
    console.log(row)
}

let name="shahana"
let greeting=`Hello,${name}!`
console.log(greeting)

let text="lerns javascript"
console.log(text.split(" "))