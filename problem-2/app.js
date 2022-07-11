// Remove duplicate from Array?

let arr=[2,5,5,7,10,12,12,15];
let array=[];
for(let i=0;i<arr.length;i++){
    if(!array.includes(arr[i])){
        array.push(arr[i]);
    }
}
console.log(array);