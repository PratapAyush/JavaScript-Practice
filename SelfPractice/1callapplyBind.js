// call apply and bind uses and differencess between these all

// binder function 
function myName(n,a,c){
  this.name = n,
  this.age = a,
  this.city=c
}

let person={}  // if you will not declarre this object then it will return undefined as js cant find any owner for
// tis keyword

myName.call(person,["A",3,"pune"])
// apply we have to give arguments in form of array
myName.apply(person,["A",3,"pune"])

// bind same as call but it will return a new function and we have to invoke this function to get our output
let mynameBind = myName.bind(person,"b",2,"gdghdfg")

mynameBind()
console.log(person)


// constructor function
// Q: create a function that returns an object
function objMaker(n,p){
    let obj = {}
    obj.name = n,
    obj.price = p
    return obj
}

let o1 = objMaker("A",12)
console.log(o1)
// similar to this constructor acts as a blueprint 

function nikeProduct(n,p){
    this.name = n,
    this.product =p
}

let p1 = new nikeProduct("jordan","shoes")
console.log(p1)