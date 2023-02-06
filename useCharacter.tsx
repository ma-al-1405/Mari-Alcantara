import { useEffect, useState, useRef } from 'react'
import ReqRestApi from '../Api/ReqRestApi';
import { ICharacter, IReqRestApiCharacters } from '../interfaces/IReqRestApiCharacters';
//Declaramos unas constante que inicialice en 1
const DEFAULT_PAGE = 1;
export const useCharacter = () => {
    //Declaramos variable de estado llamada characters que almacenara los personajes del servicio
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    //Declaramoso una variable useRef y que utilice la constante DEFAULT_PAGE para inicia la referencia, ayudando con el mapeo
    const currentPage = useRef(DEFAULT_PAGE);
    //Creamos funcion getData para obtener los datos mediante Axios("ReqrestApi.tsx")
    const getData = async () => {
        const response = await ReqRestApi.get<IReqRestApiCharacters>(
            '/character', { params: { page: currentPage.current } }).then(
                ({ data }) => data
                //Revisamos si depliega en consola del navegador
            ).catch(console.log);
            //Si hay respuesta
            console.log(response);
        response ? setCharacters(response.results) : setCharacters([]);
    }
    //Creamos las constantes para el paginado del mapeado next y before
    const next = () => {
        currentPage.current++;
        getData();
    }
    const before = () => {
        currentPage.current--;
        getData();
    }
//Creamos Variables de tipo efecto (useEffect) para inicializar la funcion getData al crearse el componente
    useEffect(() => { getData(); }, []);
//Retornamos la variable y las constantes a importar a Personajes.tsx
    return {
        characters, next, before
    }
}
export default useCharacter