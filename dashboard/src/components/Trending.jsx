import savana from '../assets/11.png'
import tree from '../assets/12.png'
import beach from '../assets/13.png'
import cloud from '../assets/14.png'
import shapes from '../assets/15.png'
import green from '../assets/16.png'
import pink from '../assets/17.png'

// ethereumm
import { FaEthereum } from "react-icons/fa";
// arrow up and down
import { FaArrowTrendUp, FaArrowTrendDown  } from "react-icons/fa6";

const Trending = () => {
  return (
    <div className='text-[1rem] bg-gray-100 p-5'>
      <div className='flex items-center justify-between gap-5 bg-white p-5'>
        {/* TRENDING   NFTS */}
        <div className='flex-[4]'>
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
          
          <table className='w-full border border-gray-200'>
            <thead>
              <tr className='border border-gray-200 text-left text-[0.85rem] text-gray-600'>
                <th className='px-4 py-4 border border-gray-200 w-[500px]'>Collection</th>
                <th className='px-4 py-4 border border-gray-200 w-[150px]'>Rank</th>
                <th className='px-4 py-4 border border-gray-200 '>Volume</th>
                <th className='px-4 py-4 border border-gray-200 '>24h %</th>
                <th className='px-4 py-4 border border-gray-200 '>7d %</th>
                <th className='px-4 py-4 border border-gray-200 '>Floor Price</th>
                <th className='px-4 py-4 border border-gray-200 '>Items</th>
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

        </div>


        {/* PERSONAL LISTINGS */}
        <div></div>
      </div>
    </div>
  )
}

export default Trending
