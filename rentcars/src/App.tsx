import './App.css'
import InputContainer from './components/inputs/InputConteiner'
import Navbar from './components/navbar/NavBar'
import InfoContainer from './components/infos/InfoContainer'
import BackgroundStyle from './components/infos/BackgroundStyle'
function App() {

  return (
    <div>
      <Navbar />
      <BackgroundStyle/>
      <div style={{ display: 'flex'}}>
        <InfoContainer/>
      </div>
      <div style={{ display: 'flex', paddingTop: '360px' }}>
        <InputContainer/>
      </div>
    </div>
  )
}

export default App
