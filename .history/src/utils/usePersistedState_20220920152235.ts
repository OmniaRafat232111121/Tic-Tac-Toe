import {useState,useEffect} from 'react'
function usePersistedState(key:string,initialState:any){
const [state,setState]=useState();
useEffect(() => {
    localStorage.setItem(key,JSON.s)
    return () => {
        
    };
}, [input])
}
export default usePersistedState;