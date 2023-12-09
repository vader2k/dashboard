import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoSunnyOutline, IoLogoAppleAr , IoSettingsOutline } from "react-icons/io5";
import { FaRegMoon, FaRegBell  } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { PiBoundingBox } from "react-icons/pi";
import usa from '../assets/usa.png'
import profile from '../assets/9.jpg'
const Navbar = () => {
  return (
    <div>
      <nav className=" bg-white flex text-gray-500 justify-between items-center p-5 text-[2rem]">
        <div><HiOutlineBars3CenterLeft/></div>
        <div className="flex items-center gap-8 text-[1.3rem]">
          <IoIosSearch/>
          <img className="w-[1.5rem]" src={usa} alt="usa" />
          <FaRegMoon/>
          <div>
            <GiShoppingCart/>
          </div>
          <div>
            <FaRegBell/>
          </div>
          <IoLogoAppleAr/>
          <PiBoundingBox/>
          <div className="flex items-center gap-2">
            <img className="w-[2rem] rounded-full object-contain" src={profile} alt="profile photo" />
            <div className="flex flex-col">
              <p className="text-[0.9rem] font-medium">Jayson Taylor</p>
              <p className="text-[0.8rem] text-gray-400">Web Designer</p>
            </div>
          </div>
          <IoSettingsOutline/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
