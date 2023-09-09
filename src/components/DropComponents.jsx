import {  useState } from "react";

export default function DropdownComponent({children ,text, id}) {
    const [drop, setDrop] = useState(true);
    const handelOcultar = () => {
        if (drop === true) {
            document.querySelector(`#drop-${id}`).classList.remove('hidden')
            document.querySelector(`#drop-${id}`).classList.add('inline-flex')
            setDrop(!drop)
            
        } else {
            
            document.querySelector(`#drop-${id}`).classList.remove('inline-flex')
            document.querySelector(`#drop-${id}`).classList.add('hidden')
            setDrop(!drop)
        }
    
    }
    return (
        <div className="">
        

                <button
                    onClick={handelOcultar}
                    type="button"
                    className="inline-flex items-center justify-center h-full px-2 text-gray-600 p-1  rounded-r-md hover:bg-gray-700 hover:text-gray-50 dark:hover:bg-gray-200 dark:hover:text-gray-700  active:bg-gray-50 dark:text-white"
                >
                   {text} 
                </button>

                <div id={`drop-${id}`} className="hidden transition-[block] h-screen w-full bg-gray-500 bg-opacity-50 top-0 left-0 px-1 py-2 fixed z-20 items-center"
                >
                
                <button
                    onClick={handelOcultar}
                    type="button"
                    className=" px-2 text-gray-600 absolute top-0 hover:text-gray-700 rounded-r-md hover:bg-gray-50  z-10"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="close"><path d="M38 12.83 35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg> 
                </button>
                    {children}
                </div>
        </div>
    );
}