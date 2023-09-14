// callback
// 1. Phải là 1 hàm
// 2. Phải truyền vào hàm khác qua agrument
// 3. Phải được thực thi

// function callback(n1, n2){
//     console.log(n1 + n2);
// }
// function callback_2(n1, n2){
//     console.log(n1 * n2);
// }

function useCallback(parameter) {
    parameter(10, 20)
}

// useCallback(callback)
// useCallback(callback_2)

useCallback(function (n1, n2) {
    console.log(n1 + n2);
})

useCallback(function (n1, n2) {
    console.log(n1 * n2);
})

// function callback(n1, n2){
//     console.log(n1 + n2);
// }

// function useCallback(){
//     callback(10, 20)
// }

// useCallback()
// function callback_1(n1, n2){
//     console.log(n1 * n2);
// }

// function useCallback_1(){
//     callback_1(10, 20)
// }

// useCallback_1()