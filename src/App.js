import './styles/global.scss'
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

const Layout = ({ children }) => {
  return <>{children}</>
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <Layout>
            <Header />
            <Home />
          </Layout>
        } />
        <Route exact path='/about' element={
          <Layout>
            <Header />
            <About />
          </Layout>
        } />
      </Routes>
    </div>
  );
}

export default App;