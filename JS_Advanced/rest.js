// tham số = parameter
// đối số = argument

// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i]
//     }

//     console.log(`Tổng là: ${total}`);
// }
function sum(message, unit, ...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }

    console.log(`${message}: ${total} ${unit}`);
}
sum("Tổng là", "điểm", 34, 4, 2, 4, 6, 6, 4, 3, 3, 2, 2, 35, 3, 3, 5, 3, 3)
sum("Total is", "point", 34, 4, 2, 4, 6, 6, 4, 3, 3)
sum("Result", 'value', 34, 4, 2, 4, 6, 6, 4, 3, 3, 2, 2, 35)


let numbers = [4, 2, 4, 3, 2, 23, 4, 5, 56, 4]

sum("Total of array", '', ...numbers)