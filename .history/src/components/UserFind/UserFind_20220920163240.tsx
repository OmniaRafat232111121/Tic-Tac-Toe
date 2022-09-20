import React,{useState} from 'react'
const UserFind:React.FC = () => {
    const [text,setText]=useState('')
    const users=[
        {
            name:'omnia',
            age:22,
            designation:'frontendeveloper'
        },
        {
            name:'salma',
            age:2,
            designation:'frontendeveloper'
        },
        {
            name:'omnia',
            age:22,
            designation:'frontendeveloper'
        },

    ]
    return (
        
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

            <div className="body">

            </div>
            

        </div>
    )
}
export default UserFind;

