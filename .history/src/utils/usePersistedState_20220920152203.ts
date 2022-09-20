import {useState,useEffect} from 'react'
function usePersistedState(key:string,initialState:any){
const [state,setState]=useState();
useEffect(() => {
    return () => {
        
    };
}, [input])
}
export default usePersistedState;