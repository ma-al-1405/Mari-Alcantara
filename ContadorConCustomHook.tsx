import { useContador } from './useContador';
const ContadorConCustomHook = () => {
//Se crea la carpeta Src donde contiene la carpeta hooks y el arhivo CondadorConCustomHook.tsx retornando las variables de
//useContador aplicando el useState
    const {count, updateCount} = useContador();
    return (
        <div>
            <h2>Contador Custom Hook: <small> {count} </small> </h2>
            <button className='btn btn-outline-primary text-dark m-2' onClick={() => updateCount(2)}>Incrementar </button>
            <button className='btn btn-outline-danger text-dark' onClick={() => updateCount(-2)}> Decremento </button>
        </div>
    );
}
export default ContadorConCustomHook