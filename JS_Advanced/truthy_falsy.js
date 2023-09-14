// convert các KDL => boolean
// trường hợp convert về false
// false    ->  false
// 0        ->  false
// empty    ->  false
// null     ->  false
// undefined->  false
// NaN      ->  false
// let array = []

// if(array.length){
//     console.log('true');
// }
// else {
//     console.log('false');
// }

let obj = {

}

// console.log(Object.keys(obj));

if (Object.keys(obj).length) {
    console.log('true');
}
else {
    console.log('false');
}