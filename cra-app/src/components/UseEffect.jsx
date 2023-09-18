import React, {useState} from "react";
import Content from "./Content";

const UseEffect = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="container ">
            <button className="btn btn-success" 
            onClick={() => setToggle(!toggle)}>
                 Toggle </button>

                 {toggle && <Content/> }

        </div>
    )
}
export default UseEffect;