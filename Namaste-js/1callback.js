// console.log(5)

// setTimeout(function (){
//     console.log(6)
// },5000)


// console.log(7)
// ------------JS is sync operation and to do async operation we can pass this function as callback inside settimeout >>>>
// for dependent operation we can do with callback

// cart example is when place order then proceed to-->>payment-->>>order summary
// so what we ca do is we can pass this as callback inisde oneOther api-->> callback is when u pass funciton as argumenty to other function


// const cart = ["shoe","asdg","sdh"]

// api.createOrder(cart,funciton(){
//     api.proceedToPayment(function (){
//         api.showOrderSummary()
//     })
// })

// here there is problem in code thats is when createOrder is dependent on proceed toPayment which further depends on show Order summary
// this leads to growing dependency and code become unmanagable --->> is called callbackHell
// In call BackHell code grows horizontally instead of vertically ->> so called PYRAMID OF DOOM

// 2nd problem is-->> inversion of control ->> it meqans that the callback function which u have written is paseed 
// as callback to another function, so now its is in hands of that function not you






// Q. write a promise when given time should return in console after that many miliseconds


function sleep(time){
    const pr = new Promise(function(resolve,reject){
        if(typeof time=="number"){
            setTimeout(function(){
               resolve( `i am here after ${time} milli seconds`)
            },time)
        }
        else{
            reject("promise rejected")
        }

    })

    return pr
}

sleep(3000)
.then(function(res){
    console.log(res)
})
.catch(function(err){
    console.log(err)
    
})
