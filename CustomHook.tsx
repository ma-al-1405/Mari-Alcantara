import {useState} from 'react'
//Creacion del CustomHook para el uso de ingremento de los botones
const CustomHook = () => {
    const initialBudget:number = 1000;
    /* Declaren una constante de estado llamada “budget”, importe referencias e inicialícela con
    el valor de la constante “initialBudget”. */
    const [budget, setBudget] = useState(initialBudget);
    //Cree las funciones como a continuacion se describe
    const increase = (value: number=1) => {
        setBudget(budget + value);
    }
    const decrease = (value: number=1) => {
        setBudget(budget - value);
    }
        return {
            increase, decrease, initialBudget, budget
        }
}
export default CustomHook