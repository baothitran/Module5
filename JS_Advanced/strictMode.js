// strict mode = chế độ nghiêm ngặt
// var i;
// 'use strict';
// for (i = 10; i < 20; i++) {
//     console.log(i);
// }

// console.log('i outsite for', i);

function showFrom10To20() {
    'use strict';
    for (let i = 10; i < 20; i++) {
        console.log(i);
    }
}

showFrom10To20();