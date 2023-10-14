
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from "./components/common/Header";
import Footer from './components/common/Footer';
import './root.css'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Career from './pages/Career/Career';
import Projects from './pages/Projects/Projects';
import Services from './pages/Services/Services';
import EventRequest from './pages/EventRequest/EventRequest';
import EventList from './pages/EventList/EventList';
import EventFormDevelope from './pages/EventFormDevelope/EventFormDevelope';
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import DashboardLayout from "./dashboardLayout/DashboardLayout";

function App() {

  const location = useLocation();

  // Define an array of route paths where you want to hide the header and footer
  const routesToHideHeaderFooter = ['/login', '/register', '/eventrequest/:id', '/dashboard' ];

  // Check if the current route is in the array of routes to hide header and footer
  const shouldHideHeaderFooter = routesToHideHeaderFooter.includes(location.pathname);

  
  return (
    <>
     {!shouldHideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/> } />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/eventlist" element={<EventList/>} />
        <Route path="/eventrequest/:id" element={<EventRequest/>} />
        <Route path="/eventformdevelope" element={<EventFormDevelope/>} />
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>     
      {!shouldHideHeaderFooter && <Footer />}
    </>
  )
}

export default App
