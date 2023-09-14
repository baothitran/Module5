function useState() {
    let state = 0;
    let name = "Khoa";
    const setState = function () {
        console.log('Hello World');
    }
    return [
        state,
        name,
        setState
    ]
}

// const result = useState();
// const number = result[0];
// const sayHi = result[1];

// const [age, , sayHello] = useState()

// console.log(age);
// sayHello()

const student = {
    name: "Nhân",
    age: 18,
    email: "nhan@gmail.com",
    language: {
        name: "English",
        level: "A1"
    }
}

const {
    name,
    age,
    email,
    language: { name: language_name }
} = student
// const {name, level} = language

console.log(language_name);