function palindrome(str){
    let str1 = ""
    for(let i=str.length-1;i>=0;i--){
        str1+=str[i]
    }
    if(str==str1){
        return 'palindrome'
    }
    else{
        return 'Not palindrome'
    }
}
const res = palindrome("mada")
console.log(res)