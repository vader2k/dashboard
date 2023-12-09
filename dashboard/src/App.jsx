import { Sidebar } from './components'
import Layout from './Layout/Layout'
const App = () => {
  return (
    <div className='text-[5rem]'>
      <>
        <div className='flex'>
          <div className='flex-1'>
            <Sidebar/>
          </div>
         <div className='h-[100vh] overflow-y-scroll sticky sidebar'>
            <Layout/>
         </div>
        </div>
      </>
    </div>
  )
}

export default App
