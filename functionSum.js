function sum(num1,num2,num3){
    return num1+ num2+ num3
}
console.log(sum(14,9,6))

function allnumberssum (...params){
return params[2]

}
console.log(allnumberssum(3,7,5))
function lol(...params){
    let num =5
    for(i of params) {
num = i + num

    }
    return num
}
console.log(lol(4,3,3,4,65,7,8,6,5,3,4,56,87,3,))