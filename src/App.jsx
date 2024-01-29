import { useEffect } from 'react'
import './App.css'
import ListCharacterMarvel from './components/ListCharacterMarvel'
import { obtenerAll, obtenerLocal } from './reducer/personajesReducer'
import { useDispatch, useSelector } from 'react-redux'
import Nav from './components/Nav'
import { constantes } from './assets/custom/Strings.js'
import Loader from './components/Loader.jsx'
import Pagination from './components/Pagination.jsx'
// import DropdownComponent from './components/DropComponents'
// import NavBar from './components/NavBar'

function App () {
  const dispatch = useDispatch()
  const personajes = useSelector((state) => state.personajes)
  useEffect(() => {
    const Storage = window.localStorage.getItem(constantes.TEXT_DATA_LOCAL)
    if (Storage) {
      const dataLocal = JSON.parse(Storage)
      return dispatch(obtenerLocal(dataLocal))
    }
    if ('limit' in personajes === false) {
      dispatch(obtenerAll())
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen w-full px-2 pb-3 bg-red-600 flex flex-col  relative lg:block overflow-hidden ">
      {/* <DropdownComponent/> */}
      {/* <NavBar/> */}
      <Nav />
      <main className='bg-neutral-100 dark:bg-slate-600'>
      {personajes.count >= 1 ? <ListCharacterMarvel /> : <Loader />}
      <Pagination count={personajes.total} />
      </main>
    </div>
  )
}

export default App
