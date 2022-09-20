import {useState,useEffect} from 'react'
function usePersistedState(key:string,initialState:any){
const [state,setState]=useState(init);
useEffect(() => {
    localStorage.setItem(key,JSON.stringify(state))
}, [key,state]);
return [key]
}
export default usePersistedState;