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
                      <div className='flex justify-between px-5'>
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
                  <div className='flex flex-col  p-6 gap-2'>
                    <div className='flex items-center gap-4 '>
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
                      <div className='flex justify-between gap-10'>
                        <div className='font-bold text-[0.9rem] text-gray-600'>
                          Highest Bid
                        </div>
                        <div>{items.bid}</div>
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
        <div className='flex justify-between py-5 items-center border-b border-gray-200'>
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
        

        <div className='flex justify-between items-center text-[0.95rem] text-gray-600 font-medium py-5 border-b border-gray-200'>
            <div>Name</div>
            <div className='flex items-center gap-10'>
              <div>Items Sold</div>
              <div>Total Value</div>
              <div>Action</div>
            </div>
        </div>
        {/* card details */}
        {/* Amanda */}
        <div className='flex items-center justify-between py-3 border-b border-gray-200'>
          {/* contains only name and picture */}
            <div className='flex items-center gap-3'>
              <img className='w-[40px] rounded-full' src={amanda} alt="amanda"/>
              <div>
                <div className='flex items-center gap-3'>
                  <p className='text-[0.89rem] font-medium'>Amanda Nanes</p> <FaCheckCircle className='w-[10px] text-green-500'/>
                </div>
                <p className='text-[0.8rem] text-gray-600'>amandananes@</p>
              </div>
            </div>

            <div className='flex items-center justify-between gap-10'>
              <div>
                <p className='text-[0.89rem] text-gray-500'>Total Sold</p>
                <p className='text-[0.9rem]'>18</p>
              </div>

              <div>
                <p className='text-[0.89rem] text-gray-500'>Sale Value</p>
                <p className='text-[0.9rem]'>$1,982</p>
              </div>

              <div>
                <button className='p-2 text-[0.8rem] bg-purple-600 text-white font-medium rounded-[5px]'>Follow</button>
              </div>
            </div>
          </div>

          {/* Charles */}
          <div className='flex items-center justify-between py-3 border-b border-gray-200'>
          {/* contains only name and picture */}
            <div className='flex items-center gap-3'>
              <img className='w-[40px] rounded-full' src={charles} alt="amanda"/>
              <div>
                <div className='flex items-center gap-3'>
                  <p className='text-[0.89rem] font-medium'>Charles Achilles</p> <FaCheckCircle className='w-[10px] text-green-500'/>
                </div>
                <p className='text-[0.8rem] text-gray-600'>charlesachilles@</p>
              </div>
            </div>

            <div className='flex items-center justify-between gap-8'>
              <div>
                <p className='text-[0.89rem] text-gray-500'>Total Sold</p>
                <p className='text-[0.9rem]'>126</p>
              </div>

              <div>
                <p className='text-[0.89rem] text-gray-500'>Sale Value</p>
                <p className='text-[0.9rem]'>$16,982</p>
              </div>

              <div>
                <button className='p-2 text-[0.8rem] bg-purple-200 text-purple-600 font-medium rounded-[5px]'>Unfollow</button>
              </div>
            </div>
          </div>

          {/* JULIA */}
          <div className='flex items-center justify-between py-3 border-b border-gray-200'>
          {/* contains only name and picture */}
            <div className='flex items-center gap-3'>
              <img className='w-[40px] rounded-full' src={julia} alt="amanda"/>
              <div>
                <div className='flex items-center gap-3'>
                  <p className='text-[0.89rem] font-medium'>Julia Camo</p> <FaCheckCircle className='w-[10px] text-green-500'/>
                </div>
                <p className='text-[0.8rem] text-gray-600'>juliacamo@</p>
              </div>
            </div>

            <div className='flex items-center justify-between gap-10'>
              <div>
                <p className='text-[0.89rem] text-gray-500'>Total Sold</p>
                <p className='text-[0.9rem]'>42</p>
              </div>

              <div>
                <p className='text-[0.89rem] text-gray-500'>Sale Value</p>
                <p className='text-[0.9rem]'>$3,432</p>
              </div>

              <div>
                <button className='p-2 text-[0.8rem] bg-purple-600 text-white font-medium rounded-[5px]'>follow</button>
              </div>
            </div>
          </div>

          {/* Json */}
          <div className='flex items-center justify-between py-3 border-b border-gray-200'>
          {/* contains only name and picture */}
            <div className='flex items-center gap-3'>
              <img className='w-[40px] rounded-full' src={jason} alt="amanda"/>
              <div>
                <div className='flex items-center gap-3'>
                  <p className='text-[0.89rem] font-medium'>Json Taylor</p> <FaCheckCircle className='w-[10px] text-green-500'/>
                </div>
                <p className='text-[0.8rem] text-gray-600'>jsontaylor@</p>
              </div>
            </div>

            <div className='flex items-center justify-between gap-10'>
              <div>
                <p className='text-[0.89rem] text-gray-500'>Total Sold</p>
                <p className='text-[0.9rem]'>63</p>
              </div>

              <div>
                <p className='text-[0.89rem] text-gray-500'>Sale Value</p>
                <p className='text-[0.9rem]'>$9,236</p>
              </div>

              <div>
                <button className='p-2 text-[0.8rem] bg-purple-600 text-white font-medium rounded-[5px]'>follow</button>
              </div>
            </div>
          </div>

          {/* Elisha sean */}
          <div className='flex items-center justify-between py-3 border-b border-gray-200'>
          {/* contains only name and picture */}
            <div className='flex items-center gap-3'>
              <img className='w-[40px] rounded-full' src={elisha} alt="amanda"/>
              <div>
                <div className='flex items-center gap-3'>
                  <p className='text-[0.89rem] font-medium'>Elisha Sean</p> <FaCheckCircle className='w-[10px] text-green-500'/>
                </div>
                <p className='text-[0.8rem] text-gray-600'>elishasean@</p>
              </div>
            </div>

            <div className='flex items-center justify-between gap-10'>
              <div>
                <p className='text-[0.89rem] text-gray-500'>Total Sold</p>
                <p className='text-[0.9rem]'>59</p>
              </div>

              <div>
                <p className='text-[0.89rem] text-gray-500'>Sale Value</p>
                <p className='text-[0.9rem]'>$7,786</p>
              </div>

              <div>
                <button className='p-2 text-[0.8rem] bg-purple-600 text-white font-medium rounded-[5px]'>follow</button>
              </div>
            </div>
          </div>

          {/* joseph */}
          <div className='flex items-center justify-between py-3 border-b border-gray-200'>
          {/* contains only name and picture */}
            <div className='flex items-center gap-3'>
              <img className='w-[40px] rounded-full' src={joseph} alt="amanda"/>
              <div>
                <div className='flex items-center gap-3'>
                  <p className='text-[0.89rem] font-medium'>Joseph Smith</p> <FaCheckCircle className='w-[10px] text-green-500'/>
                </div>
                <p className='text-[0.8rem] text-gray-600'>josephsmith@</p>
              </div>
            </div>

            <div className='flex items-center justify-between gap-8'>
              <div>
                <p className='text-[0.89rem] text-gray-500'>Total Sold</p>
                <p className='text-[0.9rem]'>137</p>
              </div>

              <div>
                <p className='text-[0.89rem] text-gray-500'>Sale Value</p>
                <p className='text-[0.9rem]'>$3,562</p>
              </div>

              <div>
                <button className='p-2 text-[0.8rem] bg-purple-200 text-purple-600 font-medium rounded-[5px]'>Unfollow</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Aunction
