import React from 'react'
//hacemos una operacion de suma dentro del archivo para retornar las variables y que pueda sumar de igual forma se depliega el archivo en MainTypeScript.tsx
const FuncionSuma = () => {
    const suma =(a: any, b: any): any => {
        return a + b;
    }
    return (
        <div>
            <h2>Mi funcion de suma 2 + 2: <small>{ suma(2,2) } </small></h2>
        </div>
    );
}
export default FuncionSuma