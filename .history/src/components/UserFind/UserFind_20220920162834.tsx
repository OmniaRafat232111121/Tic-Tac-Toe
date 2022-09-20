import React,{useState} from 'react'
import { setTextRange } from 'typescript';
const UserFind:React.FC = () => {
    const [ext,setText]=useState('')
    return (
        <div>
            <div className="input_wrapper">
           <input 
           type="text"
           placeholder='search User'
           value={text}
           onChange={(e)=>setTextR(e.target.value)}

           />
 
            </div>
        </div>
    )
}
export default UserFind;

