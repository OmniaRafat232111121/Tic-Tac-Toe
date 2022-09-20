import {useState,use} from 'react'
function usePersistedState(key:string,initialState:any){
const [state,setState]=useState();
useEffect(() => {
    return () => {
        effect
    };
}, [input])
}
export default usePersistedState;