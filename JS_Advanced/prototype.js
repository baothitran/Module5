// class MyArray{
//     constructor(){
//         this.length = 0
//     }
//     concat(){

//     }
//     filter(){

//     }
// }

// let array = new MyArray();
// array.length;
// array.concat();
// array.filter();


// this ~ context

if (Array.prototype.sum == undefined) {
    Array.prototype.sum = function () {
        // console.log(this);
        let total = 0;
        for (let i = 0; i < this.length; i++) {
            total += this[i]
        }
        return total;
    }
}

let numbers = [1, 4, 3, 2, 2]
let numbers_2 = [1, 4, 3, 2, 2, 3]
// numbers.sum()
// numbers_2.sum()
let result = numbers.sum()
let result_2 = numbers_2.sum()
console.log(result);
console.log(result_2);