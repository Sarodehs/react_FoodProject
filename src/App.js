import './App.css';
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom"

import Home from './Components/Home';
import Menu from './Components/Menu';
import About from './Components/About';
import Reservation from './Components/Reservation';
import Stuff from './Components/Stuff';
import Gallery from './Components/Gallery';
import Blog from './Components/Blog';
import BlogSingle from './Components/BlogSingle';
import Contact from './Components/Contact';
import Democom from './Components/Democom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
    return (
         <>
        <Router>
        <Header/>

            {/* <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/BlogSingle">BlogSingle</Link>
            <Link to="/About">About</Link> */}

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='About/' element={<About/>} />
                <Route path='Blog/' element={<Blog/>} />
                <Route path='BlogSingle/' element={<BlogSingle/>} />
                <Route path='Contact/' element={<Contact/>} />
                <Route path='Gallery/' element={<Gallery/>} />
                <Route path='Menu/' element={<Menu/>} />
                <Route path='Reservation/' element={<Reservation/>} />
                <Route path='Stuff/' element={<Stuff/>} />
        
                <Route path="*" element={<Democom/>}/>
            </Routes>
        </Router>  
     <Footer/>
    </>
    );
}
export default App;
