import React from 'react'
//Importamos el archivo EverydayTypes.tsx de la carpeta typescript hacia el arhico MainTypeScrips.tsx para desplegarlas en pantalla
const EverydayTypes = () => {
    let username: string = 'Jorge';
    const age: number = 38;
    const average: number = 7;
    const myarr: string[] = [];
    let big1 = BigInt(9007199254099);
    myarr.push(username);
    myarr.push(age.toString());
    myarr.push(average.toString());
    return (
        <ul>
        <li>{username}</li>
        <li>{age}</li>
        <li>{average}</li>
        <li>{myarr}</li>
        </ul>

    );
}
export default EverydayTypes