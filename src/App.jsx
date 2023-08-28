import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Header from './Components/header'
import Main from './Components/main'

function App() {
  return (
    <div className='main--div col col-md-6'>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
