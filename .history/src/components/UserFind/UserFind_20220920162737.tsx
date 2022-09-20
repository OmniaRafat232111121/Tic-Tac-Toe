import React from 'react'
import { setTextRange } from 'typescript';
const UserFind:React.FC = () => {
    return (
        <div>
            <div className="input_wrapper">
           <input 
           type="text"
           placeholder='search User'
           value={text}
           onChange={()=>setTextRange()}

           />
 
            </div>
        </div>
    )
}
export default UserFind;

