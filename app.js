let arr = ["Jazz" , "Blues"];
console.log(arr);
arr.push("Rock-n-roll");
console.log(arr);
if(!(arr.length%2 == 0)){
    arr.splice(Math.floor(arr.length/2),1,"Classic");
    console.log(arr);
}
arr.shift(0);
console.log(arr);
arr.unshift("Rap","Reggae");
console.log(arr);
