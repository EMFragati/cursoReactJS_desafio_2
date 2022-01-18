import './App.css';
import NavBar from './components/NavBar';
import WelcomMessage from './components/WelcomMessage';

function App() {
  return (
    <>
      <header><NavBar></NavBar></header>
      <main><WelcomMessage></WelcomMessage></main>
    </>
  )
}
export default App;