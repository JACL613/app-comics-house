import imgLogo from '../assets/marvelComics.png';
import {efectDarkMode} from '../assets/animations/efects'
import { useEffect } from 'react';
import {PingComponent} from './Comp.Complementario';

export default function NavBar() {
const SelectedPing = (item) => {
  const pings = document.querySelectorAll('.ping')
  console.log(pings,`ping-${item}`)
  pings.forEach(ping => ping.id === `ping-${item}` ? ping.classList.remove('hidden'):ping.classList.add('hidden'))
}
  useEffect(() => {
    SelectedPing(1)
  }, []);
  return (
    <nav className='
    inline-flex 
    h-min
    bg-neutral-100 
    dark:bg-slate-600 
    p-3
    w-full 
    top-0 
    left-0 
    rounded-b-md 
    fixed
    justify-start
    gap-[20%] 
    lg:justify-center
    lg:z-10
    items-center
    overflow-hidden
    border-2
    border-gray-400
    
    '>
    <button className='relative w-14 h-14' onClick={efectDarkMode} >
        <svg xmlns="http://www.w3.org/2000/svg"  className='w-10 h-10  m-auto animate-once stroke-yellow-300 animate-jump-in transition-all ' id="Layer_Sun" data-name="Layer_Sun" width="512" height="512" viewBox="-2 -2 28 28"><path d="M19.584,15.001c-.789-1.809-2.589-3.001-4.584-3.001-2.757,0-5,2.243-5,5v.036c-1.694,.243-3,1.704-3,3.464,0,1.93,1.57,3.5,3.5,3.5h9c2.481,0,4.5-2.019,4.5-4.5,0-2.453-1.973-4.454-4.416-4.499Zm-.084,7.999H10.5c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.527-2.5h.557l-.06-.553c-.016-.146-.024-.296-.024-.447,0-2.206,1.794-4,4-4,1.692,0,3.209,1.072,3.772,2.667l.118,.333h.609c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5Zm-12.445-6.765c-.331-.311-.634-.655-.899-1.036l-4.336,2.524-.504-.864,4.334-2.523c-.355-.73-.569-1.521-.631-2.336H0v-1H5.019c.064-.831,.284-1.62,.633-2.335L1.316,6.142l.504-.864,4.337,2.525c.451-.65,1.018-1.214,1.67-1.662L5.309,1.808l.865-.503,2.519,4.333c.708-.34,1.486-.556,2.307-.619V0h1V5.02c.808,.063,1.589,.277,2.305,.62l2.521-4.335,.865,.503-2.519,4.333c.647,.443,1.216,1.003,1.672,1.66l4.336-2.524,.504,.864-4.334,2.523c.305,.629,.505,1.305,.595,1.999-.353-.164-.717-.305-1.096-.409-.122-.526-.312-1.035-.584-1.504-.981-1.697-2.807-2.75-4.765-2.75-3.032,0-5.5,2.467-5.5,5.5,0,1.087,.316,2.139,.916,3.041,.283,.425,.622,.798,.999,1.122-.305,.165-.593,.355-.86,.572Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg"  className='w-10 h-10 m-auto animate-once stroke-slate-50 animate-jump-in transition-all hidden' id="Layer_Moon" data-name="Layer_Moon" width="512" height="512" viewBox="-2 -2 30 30"><path d="M4.378,17.921C1.742,16.168,0,13.174,0,9.777,0,4.386,4.386,0,9.777,0c1.639,0,3.271,.425,4.717,1.229l.821,.456-.836,.427c-2.05,1.046-4.141,3.783-4.423,6.733-.372,.193-.723,.419-1.055,.669v-.013c0-3.3,2.045-6.293,4.21-7.791-1.088-.471-2.239-.709-3.434-.709C4.938,1,1,4.938,1,9.777c0,2.994,1.509,5.639,3.803,7.224-.169,.293-.307,.602-.425,.92Zm19.622,1.079c0-2.757-2.243-5-5-5-.069,0-.138,.003-.211,.009-.659-2.349-2.813-4.009-5.289-4.009-3.033,0-5.5,2.468-5.5,5.5,0,.316,.033,.635,.103,.982-1.29,.692-2.103,2.031-2.103,3.518,0,2.206,1.794,4,4,4h9c2.757,0,5-2.243,5-5Zm-6.086-4.347l.089,.465s.852-.118,.997-.118c2.206,0,4,1.794,4,4s-1.794,4-4,4H10c-1.654,0-3-1.346-3-3,0-1.223,.734-2.312,1.87-2.775l.406-.166-.112-.424c-.112-.427-.164-.787-.164-1.135,0-2.481,2.019-4.5,4.5-4.5,2.154,0,4.011,1.536,4.414,3.653Z"/></svg>

    </button>
  
    <h1 className='font-sans text-xl font-semibold lg:text-3xl dark:text-white whitespace-nowrap'>Marvel Comics</h1>
        <input type="checkbox" id="drawer-toggle" className=" sr-only peer md:hidden " />
    <label htmlFor="drawer-toggle" className="inline-block p-1  top-auto right-6 transition-all duration-500 bg-red-500 rounded-lg rotate-180 peer-checked: peer-checked:absolute peer-checked:-rotate-0 peer-checked:right-[75%] md:hidden">
      <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
    </label>
        <div className="
        fixed 
        top-0 
        right-0 
        w-64 
        h-full  
        z-20 
        shadow-lg 
        transition-transform 
        duration-500 
        transform 
        translate-x-full 
        bg-neutral-100 
        peer-checked:-translate-x-0 
        dark:bg-slate-600 
        [&>*]:dark:text-white 
        md:-translate-x-0 
        md:h-min md:relative 
        md:inline-flex 
        md:shadow-none 
        md:w-max">
      <label htmlFor="drawer-toggle" className="hidden p-1  top-auto right-6 transition-all duration-500 bg-red-500 rounded-lg rotate-180 peer-checked:inline-block peer-checked:absolute peer-checked:-rotate-0 peer-checked:right-[75%] md:hidden">
      <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
    </label>
          <img className='w-6/12 h-6/12 m-auto md:hidden ' src={imgLogo} />
            <ol className="
              px-6 
              py-4 
              divide-y 
              divide-gray-600 
              md:inline-flex 
              md:gap-4 
              md:divide-y-0 
              [&>li]:list-none 
              [&>li]:font-semibold 
              [&>li]:text-lg 
              [&>li]:py-3 
              [&>li]:px-4 
              [&>li]:inline-flex
              [&>li]:w-full
    
              [&>li]:justify-between
              
               ">
             <li onClick={() => SelectedPing(1)} >Personajes 
              <PingComponent ident='1' colorPrimary='bg-red-600' colorSegundary='bg-red-400' />
            </li>
             <li onClick={() => SelectedPing(2)}>Comics
              <PingComponent  ident='2' colorPrimary='bg-red-600' colorSegundary='bg-red-400' />
             </li>
             <li onClick={() => SelectedPing(3)}>Historias
              <PingComponent  ident='3' colorPrimary='bg-red-600' colorSegundary='bg-red-400'  />
             </li>
            </ol>
        </div>
    </nav>
  )
}
