import React,{useState} from 'react'
const UserFind:React.FC = () => {
    const [text,setText]=useState('')
    return (
        const users=[

        ]
        <div>
            <div className="input_wrapper">
           <input 
           type="text"
           placeholder='search User'
           value={text}
           onChange={(e)=>setText(e.target.value)}
           />
           <button>Search</button>
            </div>

            <div className="">

            </div>
            

        </div>
    )
}
export default UserFind;

