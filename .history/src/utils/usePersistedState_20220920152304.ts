import {useState,useEffect} from 'react'
function usePersistedState(key:string,initialState:any){
const [state,setState]=useState();
useEffect(() => {
    localStorage.setItem(key,JSON.stringify(state))
}, [])
}
export default usePersistedState;