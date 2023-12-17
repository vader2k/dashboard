import savana from '../assets/11.png'
import tree from '../assets/12.png'
import beach from '../assets/13.png'
import cloud from '../assets/14.png'
import shapes from '../assets/15.png'
import green from '../assets/16.png'
import pink from '../assets/17.png'
import skull from '../assets/6.png'
import lights from '../assets/7.png'
import lighthouse from '../assets/8.png'


// ethereumm
import { FaEthereum } from "react-icons/fa";
// arrow up and down
import { FaArrowTrendUp, FaArrowTrendDown , FaArrowRightLong } from "react-icons/fa6";

// arrow up and down for Listings
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Trending = () => {
  return (
    <div className='text-[1rem] bg-gray-100 p-5 flex items-center gap-5'>
      <div className='flex flex-[5.5] items-center justify-between gap-5 bg-white p-5 rounded-[8px]'>
        {/* TRENDING   NFTS */}
        <div>
          <div className='flex items-center justify-between pb-3 border-b border-gray-200'>
            <div className='flex items-center gap-3'>
              <div className='h-[15px] w-[4px] bg-cyan-400 rounded-[10px]'>
                <div className='h-[50%] bg-gray-400 w-[100%] rounded-[10px]'></div>
              </div>
              <h1 className='font-semibold text-gray-700'>Trending NFTs</h1>
            </div>
            <div>
              <div className='flex items-center gap-5'>
                <input type="text" placeholder='Search Here' className='px-3 py-1 text-[0.9rem] border border-gray-200 w-[250px]'/>
                <button className='bg-purple-600 text-white text-[0.8rem] font-bold px-3 py-1'>Sort By</button>
              </div>
            </div>
          </div>

          {/* tables */}
          
          <table className='w-full border border-gray-200 mt-5 pb-5'>
            <thead>
              <tr className='border border-gray-200 text-left text-[0.85rem] text-gray-600'>
                <th className='px-4 py-4 border border-gray-200 w-[500px]'>Collection</th>
                <th className='px-4 py-4 border border-gray-200 w-[100px]'>Rank</th>
                <th className='px-4 py-4 border border-gray-200 '>Volume</th>
                <th className='px-4 py-4 border border-gray-200 '>24h %</th>
                <th className='px-4 py-4 border border-gray-200 '>7d %</th>
                <th className='px-4 py-4 border border-gray-200 '>Floor Price</th>
                <th className='px-4 py-4 border border-gray-200 w-[120px] '>Items</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border border-gray-200 p-3 hover:bg-gray-100'>
                <td className='border border-gray-200 p-3 '>
                  <div className='flex items-center gap-3'>
                    <div><img className='w-[40px] rounded-full object-contain' src={savana} alt="savana" /></div>
                    <div>
                      <p className='text-[0.85rem] font-medium'>Starter Sense NFT</p>
                      <p className='text-[0.8rem] text-gray-500'>@irukasensei229</p>
                    </div>
                  </div>
                </td>
                <td className='border border-gray-200 p-3'> <p className='text-[0.85rem] text-purple-600 font-bold'>#1</p></td>
                <td className='border border-gray-200 p-3'><div className='flex items-center gap-3'> <FaEthereum className='text-gray-500 text-[1rem]'/> <p className='text-[0.85rem] font-semibold text-gray-500'>2.56ETH</p></div></td>
                <td className='border border-gray-200 p-3'><div className='text-green-400 flex items-center gap-2 text-[0.9rem]'> <FaArrowTrendUp /> <p>15.2%</p> </div></td>
                <td className='border border-gray-200 p-3'><div className='text-green-400 flex items-center gap-2 text-[0.9rem]'> <FaArrowTrendUp /> <p>3.1%</p> </div></td>
                <td className='border border-gray-200 p-3'><div className='flex items-center gap-3'> <FaEthereum className='text-gray-500 text-[1rem]'/> <p className='text-[0.85rem] font-semibold text-gray-500'>2.31ETH</p></div></td>
                <td className='border border-gray-200 p-3'><p className='text-[0.89rem]'>12.4k</p></td>
              </tr>

              <tr className='border border-gray-200 p-3 hover:bg-gray-100'>
                <td className='border border-gray-200 p-3 '>
                    <div className='flex items-center gap-3'>
                      <div><img className='w-[40px] rounded-full object-contain' src={cloud} alt="savana" /></div>
                      <div>
                        <p className='text-[0.85rem] font-medium'>Lorem Kekkei</p>
                        <p className='text-[0.8rem] text-gray-500'>@cloudsound209</p>
                      </div>
                    </div>
                  </td>
                  <td className='border border-gray-200 p-3'> <p className='text-[0.85rem] text-purple-600 font-bold'>#2</p></td>
                  <td className='border border-gray-200 p-3'><div className='flex items-center gap-3'> <FaEthereum className='text-gray-500 text-[1rem]'/> <p className='text-[0.85rem] font-semibold text-gray-500'>1.25ETH</p></div></td>
                  <td className='border border-gray-200 p-3'><div className='text-green-400 flex items-center gap-2 text-[0.9rem]'> <FaArrowTrendUp /> <p>3.7%</p> </div></td>
                  <td className='border border-gray-200 p-3'><div className='text-red-400 flex items-center gap-2 text-[0.9rem]'> <FaArrowTrendDown /> <p>0.75%</p> </div></td>
                  <td className='border border-gray-200 p-3'><div className='flex items-center gap-3'> <FaEthereum className='text-gray-500 text-[1rem]'/> <p className='text-[0.85rem] font-semibold text-gray-500'>0.25ETH</p></div></td>
                <td className='border border-gray-200 p-3'><p className='text-[0.89rem]'>10.1k</p></td>
              </tr>

              <tr className='border border-gray-200 p-3 hover:bg-gray-100'>
                <td className='border border-gray-200 p-3 '>
                      <div className='flex items-center gap-3'>
                        <div><img className='w-[40px] rounded-full object-contain' src={shapes} alt="savana" /></div>
                        <div>
                          <p className='text-[0.85rem] font-medium'>NFT Uchiha</p>
                          <p className='text-[0.8rem] text-gray-500'>@sasukeuhi209</p>
                        </div>
                      </div>
                  </td>
                    <td className='border border-gray-200 p-3'> <p className='text-[0.85rem] text-purple-600 font-bold'>#3</p></td>
                    <td className='border border-gray-200 p-3'><div className='flex items-center gap-3'> <FaEthereum className='text-gray-500 text-[1rem]'/> <p className='text-[0.85rem] font-semibold text-gray-500'>2.09ETH</p></div></td>
                    <td className='border border-gray-200 p-3'><div className='text-red-400 flex items-center gap-2 text-[0.9rem]'> <FaArrowTrendDown /> <p>23.1%</p> </div></td>
                    <td className='border border-gray-200 p-3'><div className='text-green-400 flex items-center gap-2 text-[0.9rem]'> <FaArrowTrendUp /> <p>9.12%</p> </div></td>
                    <td className='border border-gray-200 p-3'><div className='flex items-center gap-3'> <FaEthereum className='text-gray-500 text-[1rem]'/> <p className='text-[0.85rem] font-semibold text-gray-500'>2.0025ETH</p></div></td>
                <td className='border border-gray-200 p-3'><p className='text-[0.89rem]'>52.7k</p></td>
              </tr>

              <tr className='border border-gray-200 p-3 hover:bg-gray-100'>
                <td className='border border-gray-200 p-3 '>
                        <div className='flex items-center gap-3'>
                          <div><img className='w-[40px] rounded-full object-contain' src={tree} alt="savana" /></div>
                          <div>
                            <p className='text-[0.85rem] font-medium'>Lorem Ipsum Uch</p>
                            <p className='text-[0.8rem] text-gray-500'>@kakashi092</p>
                          </div>
                        </div>
                    </td>
                      <td className='border border-gray-200 p-3'> <p className='text-[0.85rem] text-purple-600 font-bold'>#4</p></td>
                      <td className='border border-gray-200 p-3'><div className='flex items-center gap-3'> <FaEthereum className='text-gray-500 text-[1rem]'/> <p className='text-[0.85rem] font-semibold text-gray-500'>36.25ETH</p></div></td>
                      <td className='border border-gray-200 p-3'><div className='text-red-400 flex items-center gap-2 text-[0.9rem]'> <FaArrowTrendDown /> <p>5.2%</p> </div></td>
                      <td className='border border-gray-200 p-3'><div className='text-red-400 flex items-center gap-2 text-[0.9rem]'> <FaArrowTrendDown /> <p>4.12%</p> </div></td>
                      <td className='border border-gray-200 p-3'><div className='flex items-center gap-3'> <FaEthereum className='text-gray-500 text-[1rem]'/> <p className='text-[0.85rem] font-semibold text-gray-500'>30.12ETH</p></div></td>
                <td className='border border-gray-200 p-3'><p className='text-[0.89rem]'>31.4k</p></td>
              </tr>

              <tr className='border border-gray-200 p-3 hover:bg-gray-100'>
                <td className='border border-gray-200 p-3 '>
                    <div className='flex items-center gap-3'>
                      <div><img className='w-[40px] rounded-full object-contain' src={beach} alt="savana" /></div>
                      <div>
                        <p className='text-[0.85rem] font-medium'>Ivan Shomer Ha</p>
                        <p className='text-[0.8rem] text-gray-500'>@narutoze025</p>
                      </div>
                    </div>
                  </td>
                  <td className='border border-gray-200 p-3'> <p className='text-[0.85rem] text-purple-600 font-bold'>#5</p></td>
                  <td className='border border-gray-200 p-3'><div className='flex items-center gap-3'> <FaEthereum className='text-gray-500 text-[1rem]'/> <p className='text-[0.85rem] font-semibold text-gray-500'>12.52ETH</p></div></td>
                  <td className='border border-gray-200 p-3'><div className='text-green-400 flex items-center gap-2 text-[0.9rem]'> <FaArrowTrendUp /> <p>7.0%</p> </div></td>
                  <td className='border border-gray-200 p-3'><div className='text-green-400 flex items-center gap-2 text-[0.9rem]'> <FaArrowTrendUp /> <p>12.5%</p> </div></td>
                  <td className='border border-gray-200 p-3'><div className='flex items-center gap-3'> <FaEthereum className='text-gray-500 text-[1rem]'/> <p className='text-[0.85rem] font-semibold text-gray-500'>12.50ETH</p></div></td>
                <td className='border border-gray-200 p-3'><p className='text-[0.89rem]'>121.5k</p></td>
              </tr>


            </tbody>
          </table>
        <div className='pt-2 border-t border-gray-200 mt-8'>
          <div className='flex items-center justify-between'>
            <div className='flex text-[0.85rem] items-center gap-6 text-gray-500'>
              <p>Showing 5 Entries</p> <FaArrowRightLong/>
            </div>

            <div>
              <div className='flex items-center gap-3 text-[0.89rem]'>
                <p className='text-purple-400'>prev</p>
                <button className='px-2 py-1 rounded-[5px] bg-purple-600 text-white'>1</button>
                <button className='text-purple-600'>2</button>
                <button className='text-purple-400'>next</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

       {/* PERSONAL LISTINGS */}
       <div className='flex-[2] p-5 bg-white rounded-[8px]'>
          <div className='flex items-center justify-between pb-3 border-b border-gray-200'>
              <div className='flex items-center gap-3'>
                <div className='h-[15px] w-[4px] bg-cyan-400 rounded-[10px]'>
                  <div className='h-[50%] bg-gray-400 w-[100%] rounded-[10px]'></div>
                </div>
                <h1 className='font-semibold text-gray-700'>Personal Listings</h1>
              </div>
              <div>
                <button className='text-gray-400 text-[0.8rem] font-bold '>View All</button>
              </div>
          </div>

          {/* listings */}
          <div className='py-4 border-b border-gray-200 cursor-pointer'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <img className='w-[50px] rounded-[10px] object-contain' src={lights} alt="" />
                <div>
                  <p className='text-[0.89rem] text-gray-600 font-semibold'>Kakashi Si</p>
                  <div className='flex items-center gap-3'>
                    <p className='text-[0.8rem] text-gray-400'>@sensei011</p> <p className='text-[0.75rem] text-green-400 flex items-center gap-1 font-bold'><span><IoIosArrowUp/></span> <span>0.45%</span></p>
                  </div>
                </div>
              </div>

              <div>
                <p className='text-[0.85rem] text-gray-400 ml-10'>price</p>
                <span className='flex items-center gap-2'><FaEthereum className='text-gray-500'/> <p className='font-semibold text-[0.89rem]'>1.75ETH</p></span>
              </div>
            </div>
          </div>

          <div className='py-4 border-b border-gray-200 cursor-pointer'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <img className='w-[50px] rounded-[10px] object-contain' src={lighthouse} alt="" />
                <div>
                  <p className='text-[0.89rem] text-gray-600 font-semibold'>Orochimaru Io</p>
                  <div className='flex items-center gap-3'>
                    <p className='text-[0.8rem] text-gray-400'>@ooro001</p> <p className='text-[0.75rem] text-green-400 flex items-center gap-1 font-bold'><span><IoIosArrowUp/></span> <span>0.24%</span></p>
                  </div>
                </div>
              </div>

              <div>
                <p className='text-[0.85rem] text-gray-400 ml-10'>price</p>
                <span className='flex items-center gap-2'><FaEthereum className='text-gray-500'/> <p className='font-semibold text-[0.89rem]'>1.15ETH</p></span>
              </div>
            </div>
          </div>

          <div className='py-4 border-b border-gray-200 cursor-pointer'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <img className='w-[50px] rounded-[10px] object-contain' src={pink} alt="" />
                <div>
                  <p className='text-[0.89rem] text-gray-600 font-semibold'>SakuraYM</p>
                  <div className='flex items-center gap-3'>
                    <p className='text-[0.8rem] text-gray-400'>@sakura903</p> <p className='text-[0.75rem] text-red-400 flex items-center gap-1 font-bold'><span><IoIosArrowDown/></span> <span>0.07%</span></p>
                  </div>
                </div>
              </div>

              <div>
                <p className='text-[0.85rem] text-gray-400 ml-10'>price</p>
                <span className='flex items-center gap-2'><FaEthereum className='text-gray-500'/> <p className='font-semibold text-[0.89rem]'>1.58ETH</p></span>
              </div>
            </div>
          </div>

          <div className='py-4 border-b border-gray-200 cursor-pointer'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <img className='w-[50px] rounded-[10px] object-contain' src={shapes} alt="" />
                <div>
                  <p className='text-[0.89rem] text-gray-600 font-semibold'>Sasuke Uchiha</p>
                  <div className='flex items-center gap-3'>
                    <p className='text-[0.8rem] text-gray-400'>@sasuke777</p> <p className='text-[0.75rem] text-green-400 flex items-center gap-1 font-bold'><span><IoIosArrowUp/></span> <span>1.34%</span></p>
                  </div>
                </div>
              </div>

              <div>
                <p className='text-[0.85rem] text-gray-400 ml-10'>price</p>
                <span className='flex items-center gap-2'><FaEthereum className='text-gray-500'/> <p className='font-semibold text-[0.89rem]'>1.19ETH</p></span>
              </div>
            </div>
          </div>

          <div className='py-4 border-b border-gray-200 cursor-pointer'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <img className='w-[50px] rounded-[10px] object-contain' src={green} alt="" />
                <div>
                  <p className='text-[0.89rem] text-gray-600 font-semibold'>Naruto Uzumaki</p>
                  <div className='flex items-center gap-3'>
                    <p className='text-[0.8rem] text-gray-400'>@naruto111</p> <p className='text-[0.75rem] text-green-400 flex items-center gap-1 font-bold'><span><IoIosArrowUp/></span> <span>1.70%</span></p>
                  </div>
                </div>
              </div>

              <div>
                <p className='text-[0.85rem] text-gray-400 ml-10'>price</p>
                <span className='flex items-center gap-2'><FaEthereum className='text-gray-500'/> <p className='font-semibold text-[0.89rem]'>2.45ETH</p></span>
              </div>
            </div>
          </div>

          <div className='pt-4 cursor-pointer'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <img className='w-[50px] rounded-[10px] object-contain' src={skull} alt="" />
                <div>
                  <p className='text-[0.89rem] text-gray-600 font-semibold'>Kazimo Akure</p>
                  <div className='flex items-center gap-3'>
                    <p className='text-[0.8rem] text-gray-400'>@kazimo900</p> <p className='text-[0.75rem] text-red-400 flex items-center gap-1 font-bold'><span><IoIosArrowDown/></span> <span>1.21%</span></p>
                  </div>
                </div>
              </div>

              <div>
                <p className='text-[0.85rem] text-gray-400 ml-10'>price</p>
                <span className='flex items-center gap-2'><FaEthereum className='text-gray-500'/> <p className='font-semibold text-[0.89rem]'>1.95ETH</p></span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
} 

export default Trending
