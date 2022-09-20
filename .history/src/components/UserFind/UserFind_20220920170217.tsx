import React,{useState} from 'react'
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
        const findUser=userList?.length>0 &&userList?.
    }
    return (
        
        <div>
            <div className="input_wrapper">
           <input 
           type="text"
           placeholder='search User'
           value={text}
           onChange={(e)=>setText(e.target.value)}
           />
           <button disabled={!text} onClick={handleOnClick}>Search</button>
            </div>

            <div className="body">
                 {userList?.length>0 && userList?.map(user=>{
                    return(
                        <div className='body__item'>
                       <h3>Name:{user?.name}</h3>
                       <p>Age:{user?.age}</p>
                       <p>Designation:{user?.designation}</p>


                        </div>

                    )
                 })}
            </div>
            

        </div>
    )
}
export default UserFind;

