import './App.css'
import Navbar from './components/navbar/NavBar'
import DoubleBackground from './components/content/DoubleImg'
function App() {

  return (
    <div>
      <div className='body'>
        <div className='navbar'>
          <Navbar/> 
          <div className='content'>
            <div className='background'>
              <DoubleBackground/>
            </div>
            <div className='inputcontainer'>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default App
