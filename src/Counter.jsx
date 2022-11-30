import { useState } from "react";

const Counter = ({initialValue}) => {

    const [count,setCount] = useState(initialValue)

    
  return (
    <div>
        <Button
            onClick={()=>{
                setCount(count+1)
            }}
        >+</Button>
        <h1>
            {count}
        </h1>
        <Button
            onClick={()=>{
                setCount(count-1) 
            }}
        >-</Button>
    </div>
  )
}

const Button = ({children,onClick})=>
    <button
        onClick={onClick}
        style={{
        width: "100px",
        height: "45px",
        fontSize: "35px"
        }}   
    >{children}</button>

export default Counter