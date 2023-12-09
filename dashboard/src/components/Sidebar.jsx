import logo from '../assets/logo.png'
import { LuHome } from "react-icons/lu";
import { MdKeyboardArrowRight, MdOutlineCelebration, MdOutlineWidgets  } from "react-icons/md";
import { IoBookOutline , IoPieChartSharp} from "react-icons/io5";
import { BiTask, BiError } from "react-icons/bi";
import { FaBox , FaGifts} from "react-icons/fa6";
import { FaAward, FaWpforms, FaAppStore  } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { SiTableau, SiGooglemaps } from "react-icons/si";


const Sidebar = () => {
  return (
    <div className='sidebar bg-primary h-[100vh] sticky overflow-y-scroll'>
      <div className='flex items-center justify-center gap-1 border-b border-gray-600 py-4'>
        <img className='w-[2rem]' src={logo} alt="logo"/> <h2 className='text-[2rem] text-white font-medium'><span className='text-purple-400'>L</span>ily</h2>
      </div>

      <div className='p-5'>
        <div>
          <h3 className='text-gray-500 font-bold text-[0.9rem] px-3 tracking-widest'>Main</h3>
          <div className='text-white flex items-center justify-between p-3 text-[1.1rem] bg-secondary rounded-[10px] my-4'>
            <div className='flex items-center gap-2'>
              <LuHome /> <p className='font-medium'>Dashboards</p> <span className='px-2 text-[0.9rem] text-orange-300 bg-gray-600 rounded-[5px]'>12</span>
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-gray-500 font-bold text-[0.9rem] px-3 tracking-widest'>PAGES</h3>
          <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <IoBookOutline /> <p className='font-medium'>Pages</p> <span className='px-2 text-[0.9rem] text-cyan-300 bg-gray-600 rounded-[5px]'>New</span>
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
          </div>
        </div>

        <div>
          <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <BiTask /> <p className='font-medium'>Task</p> <span className='px-2 text-[0.9rem] text-cyan-300 bg-gray-600 rounded-[5px]'>New</span>
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
          </div>
        </div>

        <div>
          <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <BiTask /> <p className='font-medium'>Authentication</p> 
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
          </div>
        </div>

        <div>
          <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <BiError /> <p className='font-medium'>Error</p> 
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-gray-500 font-bold text-[0.9rem] px-3 tracking-widest'>GENERAL</h3>
          <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <FaBox /> <p className='font-medium'>Ui Elements</p>
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
          </div>
        </div>

        <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <FaAward  /> <p className='font-medium'>Utilities</p> 
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
        </div>
        <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <FaWpforms  /> <p className='font-medium'>Forms</p> 
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
        </div>

        <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <MdOutlineCelebration /> <p className='font-medium'>Advanced Ui</p> 
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
        </div>

        <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <MdOutlineWidgets /> <p className='font-medium'>Widgets</p> <span className='px-2 text-[0.9rem] text-red-600 bg-yellow-400 rounded-[5px]'>Hot</span>
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
        </div>

        <div>
          <h3 className='text-gray-500 font-bold text-[0.9rem] px-3 tracking-widest'>WEB APPS</h3>
          <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <FaAppStore /> <p className='font-medium'>Apps</p> <span className='px-2 text-[0.9rem] text-cyan-300 bg-gray-600 rounded-[5px]'>New</span>
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
          </div>
        </div>

        <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <GoStack /> <p className='font-medium'>Nested Menu</p> 
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
        </div>

        <div>
          <h3 className='text-gray-500 font-bold text-[0.9rem] px-3 tracking-widest'>TABLES & CHARTS</h3>
          <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <SiTableau /> <p className='font-medium'>Tables</p> <span className='px-2 text-[0.9rem] text-cyan-300 bg-gray-600 rounded-[5px]'>3</span>
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
          </div>
        </div>

        <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <IoPieChartSharp /> <p className='font-medium'>Charts</p>
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
        </div>

        <div>
          <h3 className='text-gray-500 font-bold text-[0.9rem] px-3 tracking-widest'>MAPS & ICONS</h3>
          <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <SiGooglemaps /> <p className='font-medium'>Maps</p>
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
          </div>
        </div>

        <div className='text-gray-400 flex items-center justify-between p-3 text-[1.1rem] hover:bg-secondary hover:text-white rounded-[10px] my-4'>
            <div className='flex items-center gap-3'>
              <FaGifts /> <p className='font-medium'>Icons</p>
            </div> 
            <div>
              <MdKeyboardArrowRight/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
