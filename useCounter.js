import { useState } from "react";


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);


    const increment = (value = 1) => {
        setCounter((current)=> current + value );
    }

    const decrement = (value = 1) => {
        if ( counter === 0 || counter === 1) return; 
        //ESTA CONDICION SOLO LA COLOQUE POR NUESTRO MULTIPLE CUSTOMHOOK.
        //PARA QUE NO BAJE DE 1 EL CONTADOR
        setCounter((current) => current - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }


    return {
        counter,
        increment,
        decrement,
        reset,
    }
}