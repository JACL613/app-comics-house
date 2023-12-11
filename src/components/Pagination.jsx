import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handelNext, handelPreview, handelSetPuntero } from '../assets/animations/animations'

export default function Pagination ({ count }) {
  const [puntero, setPuntero] = useState(1)
  const [indice, setIndice] = useState(4)
  const dispatch = useDispatch()

  // define la cantidad de item como un arreglo
  const x = Number.parseInt(count / 20)
  const elementos = Array.from({ length: x }, (_, i) => i + 1)
  // fin

  return (
<div className="flex justify-between sm:justify-center">
    <button onClick={ () => handelPreview(puntero, indice, e => setPuntero(e), e => setIndice(e), dispatch)} id="prev" className="px-4 py-2 mx-1 text-gray-500 capitalize cursor-not-allowed bg-white rounded-md  dark:bg-gray-800 dark:text-gray-200 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-gray-200">
        <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
        </div>
    </button>

    {/* componente items version movil */}
    <a href="#" className="inline px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:hidden dark:bg-gray-800 dark:text-gray-200 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-gray-200">
        {puntero}/{elementos.length}
    </a>
    {/* fin */}

    {/* Mapeo items */}
    {
        elementos.map((el, i) => {
          if (i <= indice && i >= puntero - 1) {
            return (
    <a onClick={() => handelSetPuntero(el, indice, e => setPuntero(e), e => setIndice(e), dispatch, elementos)} id={`item-nav-${el}`} href="#" key={el} className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline  dark:bg-gray-800 dark:text-gray-200 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-gray-200">
        {el}
    </a>
            )
          }
          return null
        })
    }
    {/* fin */}

    <button onClick={() => handelNext(puntero, indice, e => setPuntero(e), e => setIndice(e), dispatch, elementos)} id="next" className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md  dark:bg-gray-800 dark:text-gray-200 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-gray-200">
        <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </div>
    </button>
</div>
  )
}
