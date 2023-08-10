import { useState } from "react";

export default function Pagination({count}) {
    const [puntero, setPuntero] = useState(0);
    const [indice, setIndice] = useState(4);
    // define la cantidad de item como un arreglo
    let x = Number.parseInt(count / 20)
    const elementos = Array.from({ length: x }, (_, i) => i + 1);
    // fin
    const handelNext = () => {
        // siguiente item
        if (indice < elementos.length) {
            setPuntero(puntero + 1)
            setIndice(indice + 1)
        }
    }
    const handelPreview = () => {
        // item anterior
       if (indice > 4) {
        setPuntero(puntero - 1)
        setIndice(indice - 1)
       }
        
    }
    const handelSetPuntero = (i) => {
        // cambia el item y puntero directamente
        console.log(i);
        if (indice >= 4 && indice <= elementos.length ) {
            setPuntero(i - 1)
            setIndice(i + 3)
        }
    } 
  return (
<div className="flex">
    <button onClick={handelPreview}  className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600">
        <div className="flex items-center -mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>

            <span className="mx-1">
                previous
            </span>
        </div>
    </button>

    {/* componente items version movil */}
    <a  href="#" className="inline px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:hidden dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        {puntero + 1}/{elementos.length}
    </a>
    {/* fin */}

    {/* Mapeo items */}
    {
        elementos.map((el,i) => {
        if(i <= indice && i >= puntero){
            return (           
    <a onClick={() => handelSetPuntero(el)} id={`item-nav-${el}`} href="#" key={el} className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        {el}
    </a>
            )
        }
        })
    }
    {/* fin */}

    <button onClick={handelNext} className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        <div className="flex items-center -mx-1">
            <span className="mx-1">
                Next
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </div>
    </button>
</div>
  )
}
