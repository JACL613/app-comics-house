import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetFiltering } from '../reducer/personajesReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { buscarComic } from '../assets/Utils/functions'

export default function Nav () {
  const total = useSelector(state => state.personajes.total)
  const [menuDrop, setMenuDrop] = useState(false)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handlerBuscar = async (e) => {
    e.preventDefault()
    const resultado = await buscarComic(total, search)
    if (resultado != null) {
      dispatch(SetFiltering(resultado))
    }
  }

  return (
    <nav className="bg-white shadow dark:bg-gray-800 fixed w-full left-0 z-20">
    <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
                <a href="#">
                    <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                </a>

                {/* <!-- Mobile menu button --> */}
                <div className="flex lg:hidden">
                    <button onClick={() => setMenuDrop(!menuDrop)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${!menuDrop ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${menuDrop ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`${menuDrop ? '-translate-x-0 opacity-100 block ' : 'opacity-0 translate-x-full'} absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-end lg:gap-3 xl:justify-evelyn xl:gap-[0rem]`}>
                {/* menu */}
                <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                    <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">Historys</a>
                    <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">Charters</a>
                    <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">Comics</a>
                    <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">support</a>

                    <form onSubmit={handlerBuscar} className="relative mt-4 lg:mt-0 lg:mx-4">
                    <button type="submit">
                    <FontAwesomeIcon className="absolute top-2 left-1" icon={faMagnifyingGlass} />
                    </button>

                        <input type="text" onChange={(e) => setSearch(e.target.value)} className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600" placeholder="Search" />
                    </form>
                </div>
                {/* iconos */}
                <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Linkedin">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <FontAwesomeIcon className="w-5 h-5 fill-current" icon={faLinkedin}/>
                        </svg>
                    </a>

                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
                        <FontAwesomeIcon className="w-5 h-5 fill-current" icon={faFacebook} />
                    </a>

                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
                        <FontAwesomeIcon className="w-5 h-5 fill-current" icon={faGithub} />
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>
  )
}
