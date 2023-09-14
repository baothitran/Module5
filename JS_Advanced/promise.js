// setTimeout(() => {
//     console.log(1);

//     setTimeout(() => {
//         console.log(2);
//     }, 2 * 1000)


// }, 3 * 1000);

const promise = new Promise(
    function executor(resolve, reject) {
        // logic
        let number = 4;
        if (number >= 5) {
            return resolve(5);
        }
        return reject('Error 500');
    }
)

// promise chain
promise
    .then(function (data) {
        console.log(data);
        return data + 1;
    })
    .then(function (data) {
        console.log(data);
        return data + 1;
    })
    .then(function (data) {
        console.log(data);
        return data + 1;
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log('Done')
    })