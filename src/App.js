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
            <Home category='movies'  key='movies'/>
          </Layout>
        } />
        <Route exact path='/trending' element={
          <Layout>
            <Header />
            <Home category='trending'  key='trending'/>
          </Layout>
        } />
        <Route exact path='/popular' element={
          <Layout>
            <Header />
            <Home category='popular' key='popular'/>
          </Layout>
        } />
        <Route exact path='/upcomming' element={
          <Layout>
            <Header />
            <Home category='upcomming' key='upcomming'/>
          </Layout>
        } />
        <Route exact path='/search' element={
          <Layout>
            <Header />
            <Home category='search' key='search'/>
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