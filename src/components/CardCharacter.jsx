export default function CardCharacter({personaje}) {
  return (
     <div className='w-full max-w-md max-h-[90%] relative z-20  mx-auto bg-white rounded-3xl shadow-xl overflow-y-scroll md:no-scrollbar  '>
        
           <img className="max-h-[25%] w-full  " src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}></img>
          <div className='p-4 sm:p-6 h-3/4'>
            <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{personaje.name}</p>
           
            <p className='text-[#7C7C80] font-[15px] mt-6'>Our shrimp sauce is made with mozarella, a creamy taste of shrimp with extra kick of spices.</p>


              <a className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                  View on foodies
              </a>
            <a className='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                  Download app
              </a>
          </div>
    </div>
  )
}
