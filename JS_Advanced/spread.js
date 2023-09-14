// pass by value: truyền tham trị => kiểu dữ liệu nguyên thủy: number, string, boolean,..
// pass by reference: truyền tham chiếu => KDL: array, object, function

// let name_1 = "Pháp"
// let name_2 = name_1;
// name_2 = "Kiều"
// console.log(name_1);
// console.log(name_2);

// let jobs_1 = ["java", "react", "Angular"]
// let jobs_2 = jobs_1;
// // let jobs_2 = [...jobs_1]
// jobs_2[2] = 'VueJS';
// console.log(jobs_1);
// console.log(jobs_2);

const long = {
    name: "Long",
    age: 18,
    gender: true,
    language: {
        name: "English",
        level: "B1"
    }
}

// const hau = long;
// const hau = {...long}
// hau.name = "Hậu"

// const hau = {
//     ...long,
//     name: "Hậu",
//     email: 'hau@gmail.com',
//     language: {
//         ...long.language,
//         level: "B2"
//     }
// }

let hau = JSON.parse(JSON.stringify(long))
hau.language.level = "B2"

console.log(long);
console.log(hau);