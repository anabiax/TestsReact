import './App.css'
import Counter from './components/Counter'

function App() {

  //<> react fragment - elemento mãe fica invisível na estrutura e n influencia no CSS
  // em outras palavras, é uma div invisível
  return (
    <>
      <Counter />
    </>
  )
}

export default App
