import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faReadme } from '@fortawesome/free-brands-svg-icons'

export default function CardCharacter ({
  personaje,
  imgURL,
  name,
  description
}) {
  return (
    <div className="w-full max-w-md max-h-[90%] relative z-20  mx-auto bg-white rounded-3xl shadow-xl overflow-y-scroll md:no-scrollbar  ">
      <img className="max-h-[25%] w-full  " src={imgURL}></img>

      <div className="p-4 sm:p-6 h-3/4 relative">
        <div className='flex absolute right-6 top-5 gap-3 text-xl'>
          <a>
            <FontAwesomeIcon icon={faCircleInfo} />
          </a>
          <a>
            <FontAwesomeIcon icon={faReadme} />
          </a>
        </div>
        <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
          Name:{name}
        </p>
        <p className="text-[#7C7C80] font-[15px] mt-6">
          Description:{description || 'No description'}
        </p>
        <a className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
          See More
        </a>
        <a className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
          I Like
        </a>
      </div>
    </div>
  )
}
