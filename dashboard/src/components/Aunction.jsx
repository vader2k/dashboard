// nft pictures
import nft1 from '../assets/2.png'
import nft2 from '../assets/3.png'
import nft3 from '../assets/4.png'
import nft4 from '../assets/5.png'
// icons froms react-icons
import { FaHeart } from "react-icons/fa6";
import { FaEthereum } from "react-icons/fa"
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";

// profile pictures
import pic1 from '../assets/10.jpg'
import pic2 from '../assets/5.jpg'
import pic3 from '../assets/3.jpg'
import pic4 from '../assets/11.jpg'

// creators profile pictures
import amanda from '../assets/4.jpg'
import charles from '../assets/15.jpg'
import julia from '../assets/5.jpg'
import jason from '../assets/12.jpg'
import elisha from '../assets/3.jpg'
import joseph from '../assets/13.jpg'

const Aunction = () => {

  const data = [
    {
      id: 1,
      img: nft1,
      time: '045hrs: 24m : 38s',
      heart: <FaHeart/>,
      likes : <FaHeart/>,
      profilePic: pic1,
      name: 'Bloom NFT',
      socials: '@bloom116',
      title: 'Color Abstract - NFT',
      bid: `- 0.19ETH`,
      text: 'Place Bid'
    },
    {
      id: 2,
      img: nft2,
      time: '045hrs: 24m : 38s',
      heart: <FaHeart/>,
      likes : <FaHeart/>,
      profilePic: pic2,
      name: 'Ergos NFT',
      socials: '@ergos900',
      title: 'Fluid Abstract - NFT',
      bid: `- 0.35ETH`,
      text: 'Place Bid'
    },
    {
      id: 3,
      img: nft3,
      time: '045hrs: 24m : 38s',
      heart: <FaHeart/>,
      likes : <FaHeart/>,
      profilePic: pic3,
      name: 'Caros NFT',
      socials: '@caros002',
      title: 'Space Abstract - NFT',
      bid: `- 0.13ETH`,
      text: 'Place Bid'
    },
    {
      id: 4,
      img: nft4,
      time: '045hrs: 24m : 38s',
      heart: <FaHeart/>,
      likes : <FaHeart/>,
      profilePic: pic4,
      name: 'Daron NFT',
      socials: '@daron789',
      title: 'Fluis Abstract - NFT',
      bid: `- 0.75ETH`,
      text: 'Place Bid'
    }
  ]

  return (
    <div className="bg-gray-100 p-5 flex items-start justify-between text-[1rem]">
      <div>
        <div className="flex items-center justify-between">
          <p className='text-gray-500 font-semibold'>Trending Aunctions :</p>
          <div className='text-purple-600 bg-purple-100 px-3 py-1 rounded-[5px] font-medium text-[0.9rem]'>View All</div>
        </div>

        <div className='flex items-center gap-5 py-6'>
            {
              data.map(items => (
                <div key={items.id} className='bg-white rounded-[10px] overflow-hidden'>
                  <div className='relative'>
                    {/* contains only the nft images and positon absolute items, such as likes and timers */}
                    <img className='w-[250px] object-contain' src={items.img} alt="nft images" />
                    <div className='flex flex-col gap-2 absolute top-5'>
                      <div className='flex items-center justify-between px-5'>
                        <div className='text-[0.9rem] p-2 rounded-full bg-green-500 text-white'>
                          {items.heart}
                        </div>
                        <div className='flex items-center gap-2 text-[0.7rem] py-1 px-3 bg-gray-900 rounded-[10px]'>
                          <div className='text-red-500'>
                            {items.likes}
                          </div>
                          <p className='text-white'>2.14k</p>
                        </div>
                      </div>
                      <div className='flex px-3 ml-[90px] text-[0.9rem] text-white bg-gray-900 w-fit'>
                        {items.time}
                      </div>
                    </div>
                  </div>
                  {/* contains items after the image div insdie the container */}
                  <div className='flex flex-col items-center py-6 gap-2'>
                    <div className='flex items-center gap-4  justify-center'>
                      <img className='w-[50px] rounded-full' src={items.profilePic} alt="profile pic" />
                      <div className='flex flex-col'>
                        <div className='font-medium text-[0.9rem]'>
                          {items.name}
                        </div>
                        <div className='text-[0.8rem] text-gray-500'>
                          {items.socials}
                        </div>                        
                      </div>
                    </div>
                    <div className='text-[0.98rem] text-gray-700 font-bold py-2'>
                      {items.title}
                    </div>
                    <div className='text-[0.8rem] flex items-center gap-1 py-1'>
                      <div className='flex gap-1'>
                        <div className='font-bold text-gray-600'>
                          Highest Bid
                        </div>
                        {items.bid}
                      </div>
                      <FaEthereum className='text-yellow-500'/>
                    </div>
                    <button className='px-10 mt-3 py-2 text-purple-500 bg-purple-100 text-[0.89rem] font-medium '>{items.text}</button>
                  </div>
                </div>
              ))
            }
        </div>
      </div>

{/* Top creeator section */}
      <div className='px-5 bg-white w-[520px] rounded-[10px]'>
        <div className='flex justify-between py-5 items-center border-b border-gray-300'>
          <div className='flex items-center gap-1'>
            <div className='h-[20px] w-[3px] bg-cyan-500 rounded-[5px]'>
              <div className='h-[10px] w-[3px] bg-gray-500 rounded-[5px]'></div>
            </div>
            <div className='text-[1rem] font-semibold'>
              Top Creators
            </div>
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>
        

        <div className='flex items-start justify-between'>
          <div>
            <h1 className='py-3 border-b border-gray-300 text-gray-500 font-medium'>Name</h1>
            <div className='flex items-center gap-3 py-3 border-b border-gray-300'>
              <img className='w-[40px] rounded-full object-contain' src={amanda} alt="amanda" />
              <div>
                <p className='text-[0.89rem] text-gray-700'>Amanda Nanes</p>
                <span className='text-[0.8rem] text-gray-500'>amandananes@</span>
              </div>
              <FaCheckCircle className='text-green-500'/>
            </div>
            <div className='flex items-center gap-3 py-3 border-b border-gray-300'>
              <img className='w-[40px] rounded-full object-contain' src={charles} alt="amanda" />
              <div>
                <p className='text-[0.89rem] text-gray-700'>Charles Achilles</p>
                <span className='text-[0.8rem] text-gray-500'>charlseachilles@</span>
              </div>
              <FaCheckCircle className='text-green-500'/>
            </div>
            <div className='flex items-center gap-3 py-3 border-b border-gray-300'>
              <img className='w-[40px] rounded-full object-contain' src={julia} alt="amanda" />
              <div>
                <p className='text-[0.89rem] text-gray-700'>Julia Camo</p>
                <span className='text-[0.8rem] text-gray-500'>juliacamo@</span>
              </div>
              <FaCheckCircle className='text-green-500'/>
            </div>
            <div className='flex items-center gap-3 py-3 border-b border-gray-300'>
              <img className='w-[40px] rounded-full object-contain' src={jason} alt="amanda" />
              <div>
                <p className='text-[0.89rem] text-gray-700'>Jason Taylor</p>
                <span className='text-[0.8rem] text-gray-500'>amandananes@</span>
              </div>
              <FaCheckCircle className='text-green-500'/>
            </div>
            <div className='flex items-center gap-3 py-3 border-b border-gray-300'>
              <img className='w-[40px] rounded-full object-contain' src={elisha} alt="amanda" />
              <div>
                <p className='text-[0.89rem] text-gray-700'>Elisha Sean</p>
                <span className='text-[0.8rem] text-gray-500'>elishasean@</span>
              </div>
              <FaCheckCircle className='text-green-500'/>
            </div>
            <div className='flex items-center gap-3 py-3 '>
              <img className='w-[40px] rounded-full object-contain' src={joseph} alt="amanda" />
              <div>
                <p className='text-[0.89rem] text-gray-700'>Joseph Smith</p>
                <span className='text-[0.8rem] text-gray-500'>josephsmith@</span>
              </div>
              <FaCheckCircle className='text-green-500'/>
            </div>
          </div>

          <div>
            <h1 className='py-3 border-b border-gray-300 text-gray-500 font-medium'>Items Sold</h1>
            <div>
            <div className='py-3 border-b border-gray-300'>
              <p className='text-gray-500 text-[0.89rem]'>Total Sold</p>
              <span>18</span>
            </div>
            <div className='py-3 border-b border-gray-300'>
              <p className='text-gray-500 text-[0.89rem]'>Total Sold</p>
              <span>126</span>
            </div>
            <div className='py-3 border-b border-gray-300'>
              <p className='text-gray-500 text-[0.89rem]'>Total Sold</p>
              <span>42</span>
            </div>
            <div className='py-3 border-b border-gray-300'>
              <p className='text-gray-500 text-[0.89rem]'>Total Sold</p>
              <span>63</span>
            </div>
            <div className='py-3 border-b border-gray-300'>
              <p className='text-gray-500 text-[0.89rem]'>Total Sold</p>
              <span>59</span>
            </div>
            <div className='py-3 '>
              <p className='text-gray-500 text-[0.89rem]'>Total Sold</p>
              <span>137</span>
            </div>
            </div>
          </div>

          <div>
            <h1 className='py-3 border-b border-gray-300 text-gray-500 font-medium'>Total Value</h1>
            <div className='py-3 border-b border-gray-300'>
                <p className='text-gray-500 text-[0.89rem]'>Sale Value</p>
                <span>$1,982</span>
            </div>

            <div className='py-3 border-b border-gray-300'>
                <p className='text-gray-500 text-[0.89rem]'>Sale Value</p>
                <span>$16,982</span>
            </div>

            <div className='py-3 border-b border-gray-300'>
                <p className='text-gray-500 text-[0.89rem]'>Sale Value</p>
                <span>$3,432</span>
            </div>

            <div className='py-3 border-b border-gray-300'>
                <p className='text-gray-500 text-[0.89rem]'>Sale Value</p>
                <span>$9,236</span>
            </div>

            <div className='py-3 border-b border-gray-300'>
                <p className='text-gray-500 text-[0.89rem]'>Sale Value</p>
                <span>$7,783</span>
            </div>

            <div className='py-3'>
                <p className='text-gray-500 text-[0.89rem]'>Sale Value</p>
                <span>$13,652</span>
            </div>
          </div>

          <div>
            <h1 className='py-3 border-b border-gray-300 text-gray-500 font-medium'>Action</h1>
            <div className='py-3'>
                <button className='text-white bg-purple-500 py-2 px-5 rounded-[5px] outline-none text-[0.8rem]'>Follow</button>
            </div>

            <div className='py-3 '>
                <button className='text-purple-600 bg-purple-100 py-2 px-5 rounded-[5px] outline-none text-[0.8rem] mt-4'>Unfollow</button>
            </div>

            <div className='py-3'>
                <button className='text-white bg-purple-500 p-3 py-2 rounded-[5px] outline-none text-[0.8rem] mt-4'>Follow</button>
            </div>

            <div className='py-3'>
                <button className='text-white bg-purple-500 p-3 py-2 rounded-[5px] outline-none text-[0.8rem] mt-3'>Follow</button>
            </div>

            <div className='py-3 '>
                <button className='text-white bg-purple-500 py-2 px-5 rounded-[5px] outline-none text-[0.8rem] mt-3'>Follow</button>
            </div>

            <div className='py-3'>
                <button className='text-purple-600 bg-purple-100 py-2 px-5 rounded-[5px] outline-none text-[0.8rem] mt-'>Unfollow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aunction
