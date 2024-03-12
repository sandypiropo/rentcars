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
          <h1>Olá projeto</h1>
      </div>
      <div style={{ display: 'flex', paddingTop: '540px' }}>
      <BackgroundContainer>
        {/* Conteúdo do BackgroundContainer */}
      </BackgroundContainer>
      <InfoContainer>
        {/* Conteúdo do InfoContainer */}
      </InfoContainer>
      </div>
      <InputContainer/>
      <div>
      </div>
    </div>
  )
}

export default App
