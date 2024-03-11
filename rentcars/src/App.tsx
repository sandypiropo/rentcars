import './App.css'
import InputContainer from './components/Inputs/InputConteiner'
import Navbar from './components/NavBar/NavBar'

function App() {

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
          <h1>Olá projeto</h1>
      </div>
      <div style={{ paddingTop: '70px' }}>
      <InputContainer/>
      </div>
      <div style={{ height: '1000px' }}>
          Mais conteúdo...
      </div>
    </div>
  )
}

export default App
