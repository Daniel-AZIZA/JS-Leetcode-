/*let  list = function (val, next){
    
    val = val,
    next = next
};

 

console.log(list(2, 3))
*/

const proto = {
  drive () {
    console.log('Vroom!');
  }
};

const factoryCar = () => Object.create(proto);

const car3 = factoryCar();
console.log(car3.drive());


/*
function compare(x, y) {
    return (x - y)
}

const mergeTwoLists = (l1, l2) => l1.concat(l2).sort(compare)

console.log(mergeTwoLists([1,2,4], [1,3,4]))*/
