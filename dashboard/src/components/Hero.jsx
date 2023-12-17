import { MdKeyboardDoubleArrowRight, MdOutlineBook } from "react-icons/md"
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { IoReceiptOutline, IoWalletOutline } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import { CiDollar } from "react-icons/ci";
import splash from '../assets/1.png'
import wave from '../assets/wave.png'

const Hero = () => {
  return (
    <div className="text-[1rem] bg-gray-100 p-5">
      <div className=" flex items-center justify-between">
        <h1 className="font-bold text-[1.2rem]">NFT</h1>
        <div className="flex items-center gap-3"> <p className="text-purple-500">Dashboards</p> <MdKeyboardDoubleArrowRight className="text-gray-500"/> <p>NFT</p></div>
      </div>

      <div className="flex items-center gap-5">
        <div className="bg-white p-5 flex items-start mt-5 gap-6 rounded-[10px]">
          <div>
            <h1 className="text-[1.5rem] max-w-[500px] font-medium">Discover, collect and sell your <span className="text-purple-500">NFTs</span> at one place</h1>
            <p className="max-w-[450px] text-gray-400 my-4 text-[0.9rem]">NFT means non -fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies. It is a unique digital identifier that cannot be copied.</p>

            <div className="flex gap-5 mt-8 py-2">
              <button className="bg-purple-600 text-white py-2 px-3 rounded-[5px] border-none">Discover Now</button>
              <button className="text-purple-500 py-2 px-3 rounded-[5px] border border-purple-500">Create Yours</button>
            </div>
          </div>
          <div>
            <img className="w-[250px] h-[250px] rounded-[10px]" src={splash} alt="splash picture" />
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="flex items-start gap-4 bg-white p-5 rounded-[10px]">
                <div className="bg-purple-600 text-white text-[2.5rem] p-2 rounded-[10px]"><MdOutlineBook/></div>
                <div className="flex flex-col gap-1">
                  <p className="text-[0.9rem] text-gray-500">Total Assets</p>
                  <span className="text-[1.5rem] font-medium">596</span>
                  <div className="flex items-center gap-3 text-[0.8rem]"><span className="flex items-center gap-1 text-green-500"><p>0.25%</p> <IoMdArrowDropup/></span><p className="font-normal text-gray-500">This month</p></div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-[10px]">
                <div className="bg-cyan-400 text-white text-[2.5rem] p-2 rounded-[10px]"><IoReceiptOutline/></div>
                <div className="flex flex-col gap-1">
                  <p className="text-[0.9rem] text-gray-500">Total Value</p>
                  <span className="text-[1.5rem] font-medium">$1,298</span>
                  <div className="flex items-center gap-3 text-[0.8rem]"><span className="flex items-center gap-1 text-green-500"><p>0.74%</p> <IoMdArrowDropup/></span><p className="font-normal text-gray-500">This month</p></div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-5">
              <div className="flex items-start gap-4 bg-white p-5 rounded-[10px]">
                <div className="bg-green-500 text-white text-[2.5rem] p-2 rounded-[10px]"><GoTag/></div>
                <div className="flex flex-col gap-1">
                  <p className="text-[0.9rem] text-gray-500">Total Sales</p>
                  <span className="text-[1.5rem] font-medium">821</span>
                  <div className="flex items-center gap-3 text-[0.8rem]"><span className="flex items-center gap-1 text-green-500"><p>1.52%</p> <IoMdArrowDropup/></span><p className="font-normal text-gray-500">This month</p></div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-[10px]">
                <div className="bg-yellow-400 text-white text-[2.5rem] p-2 rounded-[10px]"><CiDollar/></div>
                <div className="flex flex-col gap-1">
                  <p className="text-[0.9rem] text-gray-500">Total Revenue</p>
                  <span className="text-[1.5rem] font-medium">$7,63,12.09</span>
                  <div className="flex items-center gap-2 text-[0.8rem]"><span className="flex items-center gap-1 text-red-500"><p>0.125%</p> <IoMdArrowDropdown/></span><p className="font-normal text-gray-500">This month</p></div>
                </div>
              </div>
            </div>
          </div>



          <div className="bg-white p-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-[0.95rem]">Your Balance</span>
                  <p className="text-[1.5rem] font-medium">$19,867.96</p>
                </div>
                <div className="text-[1.5rem] bg-purple-100 p-2 text-purple-500 rounded-[10px]">
                    <IoWalletOutline/>
                </div>
              </div>
              <p className="text-[0.8rem] text-gray-500">Top offers on USD-27,981 <span className="text-green-500">(+29.09%)</span></p>
              <div className="flex items-center justify-center ">
                <img className="" src={wave} alt="wavelength" />
              </div>
              <button className="text-green-500 bg-green-100 rounded-[5px] px-3 py-2 hover:bg-green-400 hover:text-white">Top Up Wallet</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
