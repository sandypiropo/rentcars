import './App.css'
import InputContainer from './components/inputs/InputConteiner'
import Navbar from './components/navbar/NavBar'
import BackgroundContainer from './components/infos/BackgroundContainer'
import InfoContainer from './components/infos/InfoContainer'

function App() {

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
      <InfoContainer>
      </InfoContainer>
      </div>
      <div style={{ display: 'flex', paddingTop: '540px' }}>
        <InputContainer/>
      </div>
    </div>
  )
}

export default App
