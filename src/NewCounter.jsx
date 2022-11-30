import { useState } from "react"

const NewCounter = ({initialValue}) => {
    const [count,setCount] = useState(initialValue);

    const increment = ()=>{
        setCount(count+1)
    }

    const decrement = ()=>{
        setCount(count-1)
    }

  return (
    <div>
        <Button onClick={increment}>+</Button>
        <h1>{count}</h1>
        <Button onClick={decrement}>-</Button>
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


export default NewCounter