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
            <Home category='trending'/>
          </Layout>
        } />
        <Route exact path='/latest' element={
          <Layout>
            <Header />
            <Home category='latest'/>
          </Layout>
        } />
        <Route exact path='/popular' element={
          <Layout>
            <Header />
            <Home category='popular'/>
          </Layout>
        } />
        <Route exact path='/top-rated' element={
          <Layout>
            <Header />
            <Home category='top-rated'/>
          </Layout>
        } />
        <Route exact path='/upcomming' element={
          <Layout>
            <Header />
            <Home category='upcomming'/>
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