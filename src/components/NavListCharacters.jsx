import { useEffect} from "react";
import { obtenerNext } from "../reducer/personajesReducer";
import { useDispatch } from "react-redux";
import { efectToggableNav , efectToggableNavRemove, mover } from "../assets/animations/efects";

// eslint-disable-next-line react/prop-types
export default function NavListCharacters({count}) {
    const dispatch = useDispatch()

    useEffect(() => {
         const items = document.querySelectorAll('.item-Nav')
        
        efectToggableNav(items[0])
    }, []);
   let x = Number.parseInt(count / 20)
   const elementos = Array.from({ length: x }, (_, i) => i + 1);
   

const handelGetNext = (element) => {
    const items = document.querySelectorAll('.item-Nav')
    dispatch(obtenerNext(element))
    items.forEach(item => {
        if (item.id === `element-${element}`) {
          
          efectToggableNav(item)
        }else{
           efectToggableNavRemove(item)
        }
        
    } )
   }
  return(
        <ol className='
            inline-flex 
            space-x-2 
            w-full 
            py-1
            [&>li>button]:w-10 
            [&>li>button]:h-10
            [&>li>button]:text-red-600
            [&>li>button]:transition-colors 
            [&>li>button]:duration-150
            [&>li>button]:rounded-full 
            [&>li>button]:focus:shadow-outline 
            [&>li>button]:md:hover:bg-indigo-100
        '>
        <li><button className="flex items-center justify-center "
        onClick={() => mover(true , dispatch)}>
            <svg className="w-4 h-4 fill-current bg-" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
        </li>
        <ul  className='
            inline-flex  
            gap-2 
            overflow-x-auto 
            no-scrollbar
            [&>li]:w-10 
            [&>li]:h10
            [&>li]:text-red-600
            [&>li]:transition-colors 
            [&>li]:duration-150
            [&>li]:rounded-full 
            [&>li]:focus:shadow-outline 
            [&>li]:md:hover:bg-indigo-100'>
            {
             elementos.map(element => {
                return(<li id={`element-${element}`} className="item-Nav px-4 py-1.5 flex justify-center items-center" key={element}>
                    <button onClick={() => handelGetNext(element)}>{element}</button>
                </li>)
             }) 
            }
        </ul>
        <li><button className="flex items-center justify-center "
        onClick={() => mover(false, dispatch)}>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
        </li>
        </ol>
  )
}
