
import { useEffect } from 'react'
import './App.css'
import ListCharacterMarvel from './components/listCharacterMarvel'
import { obtenerAll } from './reducer/personajesReducer'
import { useDispatch, useSelector } from 'react-redux'
// import DropdownComponent from './components/DropComponents'
import NavBar from './components/NavBar'

function App() {
 
  const dispatch = useDispatch()
  const personajes = useSelector(state => state.personajes)
  useEffect(() => {
    dispatch(obtenerAll())
    console.log(personajes)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!personajes]);
  
  return (
   <div 
   className='min-h-screen w-full px-2 pb-3 bg-red-600 flex flex-col  relative lg:block overflow-hidden '>
   {/* <DropdownComponent/> */}
   <NavBar/>
   {
    personajes.count >= 1
    ? <ListCharacterMarvel/>
    :<h1>No hay personajes</h1>
   }
   </div>
  )
}

export default App
