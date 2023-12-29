import { useSelector } from 'react-redux'
import DropdownComponent from './DropComponents'
import CardCharacter from './Card'
import Pagination from './Pagination'
import { useEffect, useState } from 'react'

export default function ListCharacterMarvel () {
  const [personajes, setPersonajes] = useState([])
  const data = useSelector(state => state.personajes)
  useEffect(() => {
    setPersonajes(data.results)
  }, [data.results])
  const FunccionExtrer = (cadena, a, b) => cadena.substring(a, b)

  return (
    <ul
    className='bg-neutral-100 dark:bg-slate-600 divide-y px-2 py-1 mt-24 justify-center md:mt-32 divide-gray-400 grow overflow-auto w-full rounded-md lg:flex lg:justify-evenly lg:items-center lg:flex-wrap lg:divide-none'>
        {
            personajes.map((personaje) => {
              return (
                <li id={`seeMoreSection-${personaje.id}`} key={personaje.id}
                className={'grid grid-cols-4 grid-rows-2 p-2 m-1 lg:flex lg:flex-col lg:gap-8 lg:shadow-[0_0px_10px_5px_rgba(0,0,0,0.15)] lg:w-1/3 lg:h-72 lg:rounded-md lg:my-4 lg:p-0 overflow-hidden xl:h-96 xl:w-1/5'}>
                    <div className='flex gap-x-4 col-span-2 row-span-3 items-center gap-4 lg:block lg:h-3/4' >
                        <img
                        className='h-12 w-12 flex-none rounded-full bg-gray-50 lg:rounded-none lg:min-h-[100%] lg:w-full' src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}/>
                        <div
                        className='p-2 lg:h-min lg:flex lg:justify-between [&>h3]:text-sm [&>h3]:font-semibold [&>h3]:leading-6 [&>h3]:text-gray-900 [&>h3]:dark:text-white [&>date]:mt-1 [&>date]:truncate [&>date]:text-xs [&>date]:leading-5 [&>date]:text-gray-500 [&>date]:dark:text-neutral-200'>
                            <h3 >{personaje.name}</h3>
                            <h3 >Modified: {FunccionExtrer(personaje.modified, 0, 10)}</h3>
                        </div>
                    </div>
                    <div
                    className='p-2 col-span-2 row-span-2 flex flex-col items-end justify-between lg:inline-flex lg:flex-row'>
                        <p className='text-sm leading-6 text-gray-500 dark:text-neutral-200'>{`Comics:${personaje.comics.available}`}</p>

                        <DropdownComponent text='Ver' id={personaje.id}>
                            <CardCharacter
                            imgURL={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
                            name={personaje.name}
                            description={personaje.description}
                            >

                            </CardCharacter>

                        </DropdownComponent>
                    </div>
                </li>
              )
            })
        }
        {/* <NavListCharacters count={data.total}/> */}
        <Pagination count={data.total} />
    </ul>
  )
}
