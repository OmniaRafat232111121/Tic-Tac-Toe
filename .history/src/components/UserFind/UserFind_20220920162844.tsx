import React,{useState} from 'react'
const UserFind:React.FC = () => {
    const [text,setText]=useState('')
    return (
        <div>
            <div className="input_wrapper">
           <input 
           type="text"
           placeholder='search User'
           value={text}
           onChange={(e)=>setText(e.target.value)}

           />
 
            </div>
        </div>
    )
}
export default UserFind;

