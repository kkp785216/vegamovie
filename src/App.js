import './styles/global.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Media';
import About from './pages/About';
import Filter from './components/Filter';
import SingleMedia from './pages/SingleMedia';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return <>{children}</>
}

function App() {
  return (
    <BrowserRouter basename='vegamovie'>
      <div className="App">
        <Routes>
          <Route exact path='/' element={
            <Layout>
              <Header />
              <Filter />
              <Home category='movies' key='movies' />
              <Footer />
            </Layout>
          } />
          <Route exact path='/trending' element={
            <Layout>
              <Header />
              <Home category='trending' key='trending' />
              <Footer />
            </Layout>
          } />
          <Route exact path='/popular' element={
            <Layout>
              <Header />
              <Home category='popular' key='popular' />
              <Footer />
            </Layout>
          } />
          <Route exact path='/upcomming' element={
            <Layout>
              <Header />
              <Home category='upcomming' key='upcomming' />
              <Footer />
            </Layout>
          } />
          <Route exact path='/search' element={
            <Layout>
              <Header />
              <Home category='search' key='search' />
              <Footer />
            </Layout>
          } />
          <Route exact path='/movie' element={
            <Layout>
              <Header />
              <SingleMedia />
              <Footer />
            </Layout>
          } />
          <Route exact path='/about' element={
            <Layout>
              <Header />
              <About />
              <Footer />
            </Layout>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;