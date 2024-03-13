import './App.css'
import InputContainer from './components/inputs/InputConteiner'
import Navbar from './components/navbar/NavBar'
import BackgroundStyle from './components/infos/BackgroundStyle'
function App() {

  return (
    <div>
      <div className='navbar'>
        <Navbar/>
        <div className='background-right'>
          <BackgroundStyle/>
        <div className='content'>
        </div>
        <div className='inputcontainer' style={{ display: 'flex', paddingTop: '360px' }}>
          <InputContainer/>
        </div>
        </div> 
      </div>
    </div>
  )
}

export default App
