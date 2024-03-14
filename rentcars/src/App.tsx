import './App.css'
import Navbar from './components/navbar/NavBar'
import DoubleImg from './components/content/DoubleImg'
import Button from './components/button/Button'
import Inputs from './utils/Inputs'

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
                <Button/>
              </div>
            </div>
          
            <div className='div2'>
              <DoubleImg/>
            </div>
    
            <div className='div3'>
              <Inputs/>
            </div>

            <div className='div4'>
              
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default App