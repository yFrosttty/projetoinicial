
import './App.css'
import MyComponent from './components/MyComponent.jsx'
import NewComponent from './components/NewComponent.jsx'
import OtherComponent from './components/OtherComponent.jsx'
import ShowEvents from './components/ShowEvents.jsx'
import TestUseState from './components/TestUseState.jsx'
import UseList from './components/UseList.jsx'
import AulaQuatro from './components/AulaQuatro.jsx'

function App() {
  return (
    <>
    {/* Aula 1 */}
    <NewComponent />
      <h1>Gato Makonha</h1>
      <p>Amamos gatos Makonha</p>
      <MyComponent />
      <OtherComponent />

      {/* Aula 2 */}
      <ShowEvents />
      <TestUseState />

      {/* Aula 3 */}
      <UseList/>

      {/* Aula 4 */}
      <AulaQuatro />
    </>

    
  )
}

export default App
