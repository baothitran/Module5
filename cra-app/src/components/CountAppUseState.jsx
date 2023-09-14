import React, { useState } from "react";

// const [state, setState] = useState(initState)
// + initState: giá trị khởi tạo của state
//       - Các kiểu dữ liệu nguyên thủy: number, string, boolean,..
//       - Các kiểu dữ liệu array, object, function
// + setState: là một hàm, hàm này có nhiệm vụ, cập lại trạng mới cho state
//       - Cập nhật trực tiếp
//       - Cập nhật bằng sử dụng callback function
// Cơ chế hoạt đông:
// MỖI KHI CẬP NHẬT STATE THÌ COMPONENT SẼ ĐƯỢC RE-RENDER
function CountAppUseState() {

    const [count, setCount] = useState(0)
    const [salary, setSalary] = useState(1500000)
    const handleIncrementCount = () => setCount(count + 1)

    const handleIncrementSalary = () => setSalary(salary + 500000);
    return (
        <div>
            <div>
                <h1>Count: {count}</h1>
                <button className="btn btn-dark" onClick={handleIncrementCount}>Increment Count</button>
            </div>
            <div>
                <h1>Salary: {salary}</h1>
                <button className="btn btn-danger" onClick={handleIncrementSalary}>Increment Salary</button>
            </div>
        </div>
    )
}

console.log('outsite comp');
export default CountAppUseState;