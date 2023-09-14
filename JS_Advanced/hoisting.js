//scope/hoisting
// scope (phạm vi)
// + Global (toàn cục)
// + Local (cục bộ)
// + Block code

// hoisting 
// + Khai báo biến bằng từ khóa var
// + định nghĩa hàm (Declaration function)
// let number;
let number = 1;
console.log(number);
{
    {
        {
            // var number = 10;
            // number = 2;
            console.log(number);
            {
                // let number = 3;
                console.log(number);
            }
            console.log(number);
        }

    }
}

const age = 18;
age = 19;