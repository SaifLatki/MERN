import { useState } from "react"

function Message(props){
   const [message,setMessg]=useState(props.messg)

   const updateMessg = () => {
        setMessg(message+" welcome to the world of react")
   }


    return(
        <div>
            <h2>{message} hello how are you</h2>
            <button onClick={updateMessg}>click me</button>
        </div>
    )
}
export default Message