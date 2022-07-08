// write a program to sort the array?

let arr = [2,5,3,10,9,4];
console.log(arr)
for(let r=1;r<arr.length;r++){
    for(let i=0;i<arr.length-r;i++){
        if(arr[i]>arr[i+1]){
        let t=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=t;}
    }
}
console.log(arr)