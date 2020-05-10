// var x = 1;
// if (true) { var x = 2 };
// console.log(x);
// let y = 1;
// if (true) { let y = 2 };
// console.log(y);

var x = 7, y = "7", z = "seven";
console.log(parseInt(x + y));
console.log(parseInt(z + y));
console.log(parseInt(x + z));

var animal = "dog" && "cat";
console.log(animal);

console.log(false == '0');
console.log(false === '0');

console.log(0.1 + 0.2 == 0.3);

var param;
console.log(param);

var a = 1, b = "1";
var c = a === b ? "a" : "b";
console.log(c);

var fullname = " the second";
var obj = {
    fullname: "the first",
    prop: {
        fullname: "the third",
        getFullname: function () {
            return this.fullname;
        }
    }
}
var test = obj.prop.getFullname;
console.log(obj.prop.getFullname());
console.log(test());

