import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
/* Declaren una interfaz llamada “Props” que reciba dos argumentos.
    a. El primer argumento será la descripción del bóton.
    b. Una función que permita incrementar o decrementar el presupuesto. */
    interface Props{
      title: string,
      onPress: (value?: number) => void
    }
//Importamos estilos globales button y label
import globalStyles from '../styles/global'

const MyButton = ({title, onPress}: Props) => {
  return (
  //Cree el boton que utilice la funcion y muestre el titulo enviado
    <TouchableOpacity style = { globalStyles.button } onPress={() => onPress()}>
      <Text style = { globalStyles.label }> {title} </Text>
    </TouchableOpacity>
  )

  //Cree las funciones como a continuacion se describe
  /* const increase = (value: number=1) => {
    setBudget(budget + value);
  }
  const decrease = (value: number=1) => {
    setBudget(budget - value);
  } */
}

export default MyButton