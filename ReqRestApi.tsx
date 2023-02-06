import axios from 'axios';
//Creamos el archivo para consultar la api de la web aplicando axios para despues importar en otros archivos.
//usando la carpeta Api
export const ReqRestApi = axios.create({
    baseURL: `https://rickandmortyapi.com/api`
});

export default ReqRestApi