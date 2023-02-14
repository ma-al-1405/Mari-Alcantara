//Importar las referencias a usar
import React, { useState } from 'react'
import { Text, View } from 'react-native'

//Archivos importados
import MyButton from '../components/MyButton';
import CustomHook from '../hooks/CustomHook';
//importacion de estilos globales
import globalStyles from '../styles/global';

const BudgetScreen = () => {
    //Declaren una variable “initialBudget” de tipo numérico con un valor inicial de “1000”.
            //const initialBudget:number = 1000;
    /* Declaren una constante de estado llamada “budget”, importe referencias e inicialícela con
    el valor de la constante “initialBudget”. */
            //const [budget, setBudget] = useState(initialBudget);

    //Cree las funciones como a continuacion se describe
    /* const increase = (value: number=1) => {
        setBudget(budget + value);
    } */
    /* const decrease = (value: number=1) => {
        setBudget(budget - value);
    } */

    const {increase, decrease, initialBudget, budget} = CustomHook();

    return (
    //Declaramos el encabezado de la aplicacion
        <View style={globalStyles.container}>
            <View style={{ flex: 2 }}>
                <Text style={globalStyles.mainText} > Presupuesto: { initialBudget} </Text>
                <Text style={[globalStyles.secondaryText]} > Mi presupuesto actual { budget} </Text>
            </View>
            <View style= {globalStyles.SumRes}>
                <MyButton title='Sumar' onPress={() => increase(100)}/>
                <MyButton title='Restar' onPress={() => decrease(50)}/>
            </View>
        </View>
    )
}
export default BudgetScreen