import './App.css'
import Navbar from './components/navbar/NavBar'
import DoubleBackground from './components/content/DoubleImg'
import BookButton from './components/button/Button'
import { HiBars4 } from 'react-icons/hi2'

function App() {
  return (
    <div>
      <div className='body'>
        <div>
          <Navbar/> 

          <div className='content'>
            <div className='div1'>
              <h3 className='h3'>Discover the world </h3>
              <div className="text-container">
                <h1 className='h1'>Save. Compare. Rent.</h1>
                <p className='p'>Compare the best prices from over 300 car rental companies <br/> 
                  When you rent with Rentcars, you're sure to get a great car at an affordable price.</p>
              </div>
              <div className='btn1'>
                <BookButton/>
              </div>
            </div>
          
            <div className='div2'>
              <DoubleBackground/>
            </div>

            <div className='div3'>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default App
