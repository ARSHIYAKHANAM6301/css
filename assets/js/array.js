let arr1 = ['']
let arr2 = [1,2,3,4,5]
let arr3 = ['HTML','CSS','JS','NODE JS','REACT JS']
let arr4 = [2,6, "Arshiya", true, false, 0.5, 1/2, null, undefined]
let arr5 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let str1 = 'Facebook'
let str2 = 'Google'
let str3 = 'Microsoft'
let str4 = 'Apple'
let str5 = 'IBM'
let str6 = 'Oracle'
let str7 = 'Amazon'
let arr6 = ['Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon', ' are big IT companies']
let arr7 = ['Google', 'Amazon']
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.splice(3,3, 'Green Tea', 'Sugar')
let countries = ["Usa, China"]
countries.push('INDIA')
let frontendlang = ['HTML', 'CSS', 'JS']
let backendlang = ['NODE', 'EXPRESS', 'MONGODB']
let fullstack = frontendlang.concat(backendlang)
let studentsages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
studentsages.sort()
// countries.push('US')
// shoppingCart.splice(4,4, 'Sugar')
// shoppingCart.splice(3,3, 'Green Tea')
// shoppingCart.push('Sugar')
// shoppingCart.pop('Honey')
console.log(arr1)
console.log(arr2)
console.log(arr2.length)
console.log(arr3[0])
console.log(arr3[2])
console.log(arr3[4])
console.log(arr4)
console.log(arr4.length)
console.log(arr5)
console.log(arr5.length)
console.log(arr5[0])
console.log(arr5[3])
console.log(arr5[6])
console.log(str1.toUpperCase())
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())
console.log(str4.toUpperCase())
console.log(str5.toUpperCase())
console.log(str6.toUpperCase())
console.log(str7.toUpperCase())
console.log(arr6.join())
console.log(arr7.includes('Google'))
console.log(arr7.includes('Facebook'))
console.log(shoppingCart)
console.log(shoppingCart)
// console.log(shoppingCart)
console.log(countries.includes('India'))
// console.log(countries.toUpperCase())
console.log(countries)
console.log(fullstack)
console.log(studentsages)
console.log(studentsages[0])
console.log(studentsages[9])
console.log(studentsages[4]/2 + studentsages[5]/2)
let sum = studentsages[0] + studentsages[1] + studentsages[2] + studentsages[3] + studentsages[4] + studentsages[5] + studentsages[6] + studentsages[7] + studentsages[8] + studentsages[9]
// let avg = sum/10
console.log(sum/10)
console.log(studentsages[9] - studentsages[0])

var minval = 19
var maxval = 26
var avg = 22
var mindiff = Math.abs(minval - avg)
var maxdiff = Math.abs(maxval - avg)
console.log('min ' + mindiff)
console.log('max ' + maxdiff)

var array = ['INDIA', 'FINLAND', 'ENGLAND', 'GOA', 'AUS']
var newarray = array.filter((elem)=> {
    return elem.length > 3
})

console.log(newarray)
var shopcarts = ['LAPTOP', 'MOBILE', 'TAB', 'DESKTOP']
shopcarts.pop('DESKTOP')
console.log('DESKTOP')
// console.log(studentsages[0]/10 + studentsages[1]/10 + studentsages[2]/10 + studentsages[3]/10 + studentsages[4]/10 + studentsages[5]/10 + studentsages[6]/10 + studentsages[7]/10 + studentsages[8]/10 + studentsages[9]/10)
// console.log(countries.includes('India'.toUpperCase()))
// console.log(countries)
// console.log(countries.indexOf('India'))

