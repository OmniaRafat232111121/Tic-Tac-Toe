import React,{useState} from 'react'
const UserFind:React.FC = () => {
    const [text,setText]=useState('')
    const users=[
        {
            name:'omnia',
            age:22,
            designation:'frontenddeveloper'
        },
        {
            name:'ali',
            age:24,
            designation:'backenddeveloper'
        },
        {
            name:'menna',
            age:20,
            designation:'frontenddeveloper'
        },
        {
            name:'amira',
            age:22,
            designation:'softwareengineer'
        },
        {
            name:'ahmed',
            age:2,
            designation:'softwareengineer'
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

