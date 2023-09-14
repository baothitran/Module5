import { useState } from "react";

function CountAgeUseState() {
    const [age, setAge] = useState(23);
    const increment = () => setAge(age + 1);
    const decrement = () => setAge(age - 1);

    return (
        <div>
            <h1>Age: {age}</h1>
            <button onClick={increment}>Tăng</button>
            <button onClick={decrement}>Giảm</button>
        </div>

    );
}
export default CountAgeUseState;