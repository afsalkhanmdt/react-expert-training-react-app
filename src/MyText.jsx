import { useState } from 'react'

const MyText = () => {
  const [text,setText]  = useState("");
  return (
    <div>
        <input
            type="text"
            value={text}
            onChange={
                (e)=>setText(e.target.value)
            }
        />
        <button
        onClick={()=>setText("")}        
        >Clear</button>
        <h1>
            {text}
        </h1>
    </div>
  )
}

export default MyText