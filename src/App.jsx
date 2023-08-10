
import { useEffect } from 'react'
import './App.css'
import ListCharacterMarvel from './components/listCharacterMarvel'
import { obtenerAll , obtenerLocal } from './reducer/personajesReducer'
import { useDispatch, useSelector } from 'react-redux'
import Nav from './components/Nav'
// import DropdownComponent from './components/DropComponents'
// import NavBar from './components/NavBar'

function App() {
 
  const dispatch = useDispatch()
  const personajes = useSelector(state => state.personajes)
  useEffect(() => {
    const Storage = window.localStorage.getItem('PersonajesMarvel')
    if (Storage) {
    const dataLocal = JSON.parse(Storage)
    console.log('de manera local');
    return dispatch(obtenerLocal(dataLocal))
    }
    if('limit' in personajes === false){
      console.log('enviando peticion');
     dispatch(obtenerAll())
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
   <div 
   className='min-h-screen w-full px-2 pb-3 bg-red-600 flex flex-col  relative lg:block overflow-hidden '>
   {/* <DropdownComponent/> */}
   {/* <NavBar/> */}
   <Nav />
   {
    personajes.count >= 1
    ? <ListCharacterMarvel/>
    :<h1>No hay personajes</h1>
   }
   </div>
  )
}

export default App
