// top collectors images
import alicai from '../assets/5.jpg'
import alex from '../assets/15.jpg'
import emiley from '../assets/4.jpg'
import jessica from '../assets/3.jpg'
import json from '../assets/11.jpg'
import kiara from '../assets/2.jpg'
import agire from '../assets/14.jpg'

// statistics image
import chart from '../assets/graph.png'

import { FaEthereum } from "react-icons/fa";

const Statisitcs = () => {
  return (
    <div className='flex items-center text-[1rem] px-5 bg-gray-100'>

      {/* top collectors */}

      <div className='flex-1 bg-white p-5 rounded-[8px]'>
        <div className='flex items-center justify-between py-3 border-b border-gray-200'>
          <div className='flex items-center gap-2'>
            <div className='h-[15px] bg-cyan-200 w-[3px] rounded-[5px]'>
              <div className='h-[40%] w-full bg-gray-300'></div>
            </div>
            <p className='font-medium'>Top Collectors</p>
          </div>
          <div className='text-[0.89rem] text-gray-500'>View All</div>
        </div>

        <div>
          {/* Alicia */}
          <div className='flex items-center justify-between  py-3 border-b border-gray-200'>
            <div className='flex items-center gap-3'>
              <img className='w-[30px] rounded-full object-contain' src={alicai} alt="alicia" />
              <p className='text-[0.9rem] font-medium'>Alicia Smith</p>
            </div>
            <div className='w-[50px] h-[5px] bg-gray-200 rounded-[5px]'>
              <div className='w-[75%] h-full bg-purple-950'></div>
            </div>
            <div className='text-[0.89rem] text-gray-500'>75%</div>
            <div>
              <p className='font-medium text-[0.95rem]'>$9,223.46</p>
              <p className='text-[0.8rem] text-green-400'>0.214ETH</p>
            </div>
          </div>
          {/* Alex */}
          <div className='flex items-center justify-between  py-3 border-b border-gray-200'>
            <div className='flex items-center gap-3'>
              <img className='w-[30px] rounded-full object-contain' src={alex} alt="alicia" />
              <p className='text-[0.9rem] font-medium'>Alex Carey</p>
            </div>
            <div className='w-[50px] h-[5px] bg-gray-200 rounded-[5px]'>
              <div className='w-[60%] h-full bg-purple-950'></div>
            </div>
            <div className='text-[0.89rem] text-gray-500'>60%</div>
            <div>
              <p className='font-medium text-[0.95rem]'>$17,223.09</p>
              <p className='text-[0.8rem] text-green-400'>1.890ETH</p>
            </div>
          </div>
          {/* Emiley */}
          <div className='flex items-center justify-between py-3 border-b border-gray-200'>
            <div className='flex items-center gap-3'>
              <img className='w-[30px] rounded-full object-contain' src={emiley} alt="alicia" />
              <p className='text-[0.9rem] font-medium'>Emiley Jack</p>
            </div>
            <div className='w-[50px] h-[5px] bg-gray-200 rounded-[5px]'>
              <div className='w-[35%] h-full bg-purple-950'></div>
            </div>
            <div className='text-[0.89rem] text-gray-500'>35%</div>
            <div>
              <p className='font-medium text-[0.95rem]'>$5,923.09</p>
              <p className='text-[0.8rem] text-green-400'>1.903ETH</p>
            </div>
          </div>
          {/* JESSICA */}
          <div className='flex items-center justify-between py-3 border-b border-gray-200'>
            <div className='flex items-center gap-3'>
              <img className='w-[30px] rounded-full object-contain' src={jessica} alt="alicia" />
              <p className='text-[0.9rem] font-medium'>Jessica</p>
            </div>
            <div className='w-[50px] h-[5px] bg-gray-200 rounded-[5px]'>
              <div className='w-[70%] h-full bg-purple-950'></div>
            </div>
            <div className='text-[0.89rem] text-gray-500'>70%</div>
            <div>
              <p className='font-medium text-[0.95rem]'>$3,993.09</p>
              <p className='text-[0.8rem] text-green-400'>0.689ETH</p>
            </div>
          </div>
          {/* Json  */}
          <div className='flex items-center justify-between py-3 border-b border-gray-200'>
            <div className='flex items-center gap-3'>
              <img className='w-[30px] rounded-full object-contain' src={json} alt="alicia" />
              <p className='text-[0.9rem] font-medium'>Json Taylor</p>
            </div>
            <div className='w-[50px] h-[5px] bg-gray-200 rounded-[5px]'>
              <div className='w-[90%] h-full bg-purple-950'></div>
            </div>
            <div className='text-[0.89rem] text-gray-500'>90%</div>
            <div>
              <p className='font-medium text-[0.95rem]'>$12,124.34</p>
              <p className='text-[0.8rem] text-green-400'>2.577ETH</p>
            </div>
          </div>
          {/* Kiara */}
          <div className='flex items-center justify-between py-3 border-b border-gray-200'>
            <div className='flex items-center gap-3'>
              <img className='w-[30px] rounded-full object-contain' src={kiara} alt="alicia" />
              <p className='text-[0.9rem] font-medium'>Kiara May</p>
            </div>
            <div className='w-[50px] h-[5px] bg-gray-200 rounded-[5px]'>
              <div className='w-[62%] h-full bg-purple-950'></div>
            </div>
            <div className='text-[0.89rem] text-gray-500'>62%%</div>
            <div>
              <p className='font-medium text-[0.95rem]'>$2,534.56</p>
              <p className='text-[0.8rem] text-green-400'>0.737ETH</p>
            </div>
          </div>
          {/* agire */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <img className='w-[30px] rounded-full object-contain' src={agire} alt="alicia" />
              <p className='text-[0.9rem] font-medium'>Agire Khan</p>
            </div>
            <div className='w-[50px] h-[5px] bg-gray-200 rounded-[5px]'>
              <div className='w-[62%] h-full bg-purple-950'></div>
            </div>
            <div className='text-[0.89rem] text-gray-500'>85%%</div>
            <div>
              <p className='font-medium text-[0.95rem]'>$15,236.00</p>
              <p className='text-[0.8rem] text-green-400'>6.345ETH</p>
            </div>
          </div>
        </div>
      </div>

      {/* NFT STATISTICS */}
      <div className='flex-[3]'>
      <div className='flex items-center justify-between py-3 border-b border-gray-200 p-5'>
          <div className='flex items-center gap-2'>
            <div className='h-[15px] bg-cyan-200 w-[3px] rounded-[5px]'>
              <div className='h-[40%] w-full bg-gray-300'></div>
            </div>
            <p className='font-medium'>NFTs Statistics</p>
          </div>
          <div className='flex'>
            <div className='text-white bg-purple-700 rounded-[2px] px-3 py-2 text-[0.9rem] font-medium border border-gray-500'>1D</div>
            <div className='text-purple-600 bg-purple-200 rounded-[2px] px-3 py-2 text-[0.9rem] font-medium border border-gray-200 hover:bg-purple-700 hover:text-white cursor-pointer'>1W</div>
            <div className='text-purple-600 bg-purple-200 rounded-[2px] px-3 py-2 text-[0.9rem] font-medium border border-gray-200 hover:bg-purple-700 hover:text-white cursor-pointer'>1M</div>
            <div className='text-purple-600 bg-purple-200 rounded-[2px] px-3 py-2 text-[0.9rem] font-medium border border-gray-200 hover:bg-purple-700 hover:text-white cursor-pointer'>3M</div>
            <div className='text-purple-600 bg-purple-200 rounded-[2px] px-3 py-2 text-[0.9rem] font-medium border border-gray-200 hover:bg-purple-700 hover:text-white cursor-pointer'>6M</div>
            <div className='text-purple-600 bg-purple-200 rounded-[2px] px-3 py-2 text-[0.9rem] font-medium border border-gray-200 hover:bg-purple-700 hover:text-white cursor-pointer'>1Y</div>
          </div>
        </div>

        {/* content */}
        <div>
          <div>
            <FaEthereum/>
          </div>
          <div>
            <p>Symbol</p>
            <p>ETH</p>
          </div>
          <div>
            <p>Price Benchmark</p>
            <p>-0.39%</p>
          </div>
          <div>
            <p>Price (USD)</p>
            <p>$1,212.67</p>
          </div>
          <div>
            <p>Symbol</p>
            <p>ETH</p>
          </div>
          <div>
            <p>Symbol</p>
            <p>ETH</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Statisitcs
