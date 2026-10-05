for(let i=0;i<=10;){
    console.log('=======================');
    console.log();
    console.log('========================')
}

for(let index in arr){
    console.log(arr.index);
}


//for each loop
arr.forEach(val,indexedDB,a)=>{
    console.log(val,"->")
}

console.log("============================================")
let prices=[500,102,456,7812,510,12,741,41,54841];
console.log(prices);


let discountedPrices=prices.map((x)=>{
    return x-x/10
})
console.log(disicountedprice);

console.log("==============FILTER fUNCTION===================");
let filteredPrices=discountedPrices.filter((x)=>{
    return x>=500 && x>=5000;
})
console.log(fixedprices)

console.log("=============Reduce Function===============");
const totalPrice=filteredPrices.reduce((ac1,val)=>{
    return ac1+val
},500)
console.log(totalPrice);