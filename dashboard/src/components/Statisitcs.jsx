// top collectors images
import alicai from '../assets/5.jpg'
import alex from '../assets/15.jpg'
import emiley from '../assets/4.jpg'
import jessica from '../assets/3.jpg'
import json from '../assets/11.jpg'
import kiara from '../assets/2.jpg'
import agire from '../assets/14.jpg'
import taylor from '../assets/10.jpg'
import simon from '../assets/15.jpg'

// statistics image
import chart from '../assets/graph.png'
// ethereumm
import { FaEthereum } from "react-icons/fa";

// dots
import { BsThreeDotsVertical } from "react-icons/bs";

// carousel images
import skull from '../assets/6.png'
import lights from '../assets/7.png'
import lighthouse from '../assets/8.png'
import orange from '../assets/9.png'
import tubes from '../assets/10.png'
import savana from '../assets/11.png'
import tree from '../assets/12.png'
import beach from '../assets/13.png'
import cloud from '../assets/14.png'
import shapes from '../assets/15.png'
import green from '../assets/16.png'
import pink from '../assets/17.png'

import { useState, useEffect } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

const Statisitcs = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the active slide index
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [activeSlideIndex]);

  const totalSlides = 3; // Replace with the total number of slides


  return (
    <div className='flex gap-5 items-center text-[1rem] px-5 bg-gray-100 '>

      {/* top collectors */}

      <div className='flex-[2] bg-white p-5 rounded-[8px]'>
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
      <div className='flex-[3] bg-white rounded-[5px]'>
      <div className='flex items-center justify-between py-5 border-b border-gray-200 p-5'>
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
        <div className='flex justify-between px-10 items-center py-5'>
          <div className='bg-gray-200 p-2 rounded-full'>
            <FaEthereum className='text-gray-500 text-[1.5rem]'/>
          </div>
          <div>
            <p className='text-[0.85rem] text-gray-400'>Symbol</p>
            <p className='text-[0.95rem] font-medium'>ETH</p>
          </div>
          <div>
            <p className='text-[0.85rem] text-gray-400'>Price Benchmark</p>
            <p className='text-[0.95rem] font-medium'>-0.39%</p>
          </div>
          <div>
            <p className='text-[0.85rem] text-gray-400'>Price (USD)</p>
            <p className='text-[0.95rem] font-medium text-green-400'>$1,212.67</p>
          </div>
          <div>
            <p className='text-[0.85rem] text-gray-400'>Change (24H)</p>
            <p className='text-[0.95rem] font-medium text-red-600'>-0.14$</p>
          </div>
          <div>
            <p className='text-[0.85rem] text-gray-400'>Market Cap</p>
            <p className='text-[0.95rem] font-medium'>$148.20B</p>
          </div>
        </div>


        <div className='py-3'>
          <img src={chart} alt="charts" />
        </div>
      </div>

      {/* FEATURED COLLECTION */}
      <div className='flex-[1]'>
        <div>
          <div className='flex items-center justify-between pb-3'>
            <p className='font-medium'>Featured Collections :</p>
            <button className=' px-2 text-[0.8rem] text-purple-700 bg-purple-200 rounded-[5px]'>View All</button>
          </div>
        </div>

        <div className=' bg-white p-5'>
          <div>
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={1}
              itemsToScroll={1}
              responsiveProps={[
                {
                  itemsToShow: 1,
                  itemsToScroll: 1,
                  minWidth: 768,
                },
              ]}
              speed={100}
              easing="linear"
            >
              {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
              <div className='w-[400px]'>
                <div className='flex flex-col gap-3 pb-7'>
                  <div className='flex gap-3'>
                    <img className='w-[200px] h-[150px] object-cover rounded-[10px]' src={skull} alt="skull" />
                    <img className='w-[200px] h-[150px] object-cover rounded-[10px]' src={lights} alt="orange" />
                  </div>
                  <div className='flex gap-3'>
                    <img className='w-[200px] h-[150px] object-cover rounded-[10px]' src={lighthouse} alt="lighthouse" />
                    <img className='w-[200px] h-[150px] object-cover rounded-[10px]' src={orange} alt="lighthouse" />
                  </div>
                </div>
                <hr />
                <div className='flex items-center justify-between py-3 '>
                  <div className='flex items-center gap-3'>
                    <p className='text-[0.8rem] text-gray-400'>Collection Rank :</p> <p className='text-green-400 font-bold'>#1</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='p-2 bg-gray-100 rounded-full'><FaEthereum className='text-gray-400'/></div>
                    <div className='text-[0.89rem] text-gray-500 font-bold'>1.0979ETH</div>
                  </div>
                </div>
                <hr />
                <div className='pt-5 flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <div>
                      <img className='w-[40px] rounded-full' src={simon} alt="jason" />
                    </div>
                    <div>
                      <p className='text-[0.8rem] font-bold text-gray-600'>Simon Cowell</p>
                      <span className='text-[0.75rem] text-gray-600'>@simon</span>
                    </div>
                  </div>
                  <div>
                    <BsThreeDotsVertical/>
                  </div>
                </div>
              </div>
              <div className='w-[400px]'>
                <div className='flex flex-col gap-3 pb-7'>
                    <div className='flex gap-3'>
                      <img className='w-[200px] h-[150px] object-cover rounded-[10px]' src={savana} alt="skull" />
                      <img className='w-[200px] h-[150px] object-cover rounded-[10px]' src={tree} alt="orange" />
                    </div>
                    <div className='flex gap-3'>
                      <img className='w-[200px] h-[150px] object-cover rounded-[10px]' src={beach} alt="lighthouse" />
                      <img className='w-[200px] h-[150px] object-cover rounded-[10px]' src={cloud} alt="lighthouse" />
                    </div>
                  </div>
                  <hr />
                  <div className='flex items-center justify-between py-3 '>
                    <div className='flex items-center gap-3'>
                      <p className='text-[0.8rem] text-gray-400'>Collection Rank :</p> <p className='text-green-400 font-bold'>#2</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='p-2 bg-gray-100 rounded-full'><FaEthereum className='text-gray-400'/></div>
                      <div className='text-[0.89rem] text-gray-500 font-bold'>1.0466ETH</div>
                    </div>
                  </div>
                  <hr />
                  <div className='pt-5 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <div>
                        <img className='w-[40px] rounded-full' src={alicai} alt="jason" />
                      </div>
                      <div>
                        <p className='text-[0.8rem] font-bold text-gray-600'>Melisa Smith</p>
                        <span className='text-[0.75rem] text-gray-600'>@melisa</span>
                      </div>
                    </div>
                    <div>
                      <BsThreeDotsVertical/>
                    </div>
                  </div>
              </div>
              <div className='w-[400px]'>
                <div className='flex flex-col gap-3 pb-7'>
                      <div className='flex gap-3'>
                        <img className='w-[200px] h-[150px] object-cover rounded-[10px]' src={tubes} alt="skull" />
                        <img className='w-[200px] h-[150px] object-cover rounded-[10px]' src={shapes} alt="orange" />
                      </div>
                      <div className='flex gap-3'>
                        <img className='w-[200px] h-[150px] object-cover rounded-[10px]' src={pink} alt="lighthouse" />
                        <img className='w-[200px] h-[150px] object-cover rounded-[10px]' src={green} alt="lighthouse" />
                      </div>
                    </div>
                    <hr />
                    <div className='flex items-center justify-between py-3 '>
                      <div className='flex items-center gap-3'>
                        <p className='text-[0.8rem] text-gray-400'>Collection Rank :</p> <p className='text-green-400 font-bold'>#3</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div className='p-2 bg-gray-100 rounded-full'><FaEthereum className='text-gray-400'/></div>
                        <div className='text-[0.89rem] text-gray-500 font-bold'>1.0156ETH</div>
                      </div>
                    </div>
                    <hr />
                    <div className='pt-5 flex items-center justify-between'>
                      <div className='flex items-center gap-3'>
                        <div>
                          <img className='w-[40px] rounded-full' src={taylor} alt="jason" />
                        </div>
                        <div>
                          <p className='text-[0.8rem] font-bold text-gray-600'>Json Taylor</p>
                          <span className='text-[0.75rem] text-gray-600'>@json</span>
                        </div>
                      </div>
                      <div>
                        <BsThreeDotsVertical/>
                      </div>
                  </div>
              </div>
            </ReactSimplyCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statisitcs
