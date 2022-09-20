import React,{useState} from 'react'
import './UserFind.css'
const UserFind:React.FC = () => {
    const users=[
        {
            name:'omnia',
            age:22,
            designation:'frontenddeveloper'
        },
        {
            name:'ali',
            age:26,
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
            age:28,
            designation:'softwareengineer'
        },

    ]
    const [text,setText]=useState('');
    const[userList,setUserList]=useState(users);
    const handleOnClick=()=>{
        //const findUser=userList?.length>0 &&userList?.filter()
    }
    return (
        
       
    )
}
export default UserFind;

