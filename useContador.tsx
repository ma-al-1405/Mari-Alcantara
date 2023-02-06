import {useState} from 'react'
//importadon la funcion a ContadorConCustomHook para retornar las variables usadas y asi llamar el hook usando useState
export const useContador = () => {
    const [count, setCount] = useState(0);
    const updateCount = ( newValue: number) => {
        setCount((value) => value + newValue );
    }
        return {
        count,
        updateCount
        }
}