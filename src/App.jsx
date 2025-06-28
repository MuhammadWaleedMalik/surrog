import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Explore from './pages/Explore';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import './utils/colors.css';
import './i18n';
import TermsAndConditions from './pages/Terms';
import EggDonors from './pages/Functionalities/EggDonors';
import Surrogates from './pages/Functionalities/Surrogacy';
import IntendedParents from './pages/Functionalities/Intended';
import PricingBasic from './pages/PricingBasic'
import PrcingEnterprice from './pages/PricingEnterprice';
import PricingPro from './pages/PricingPro';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/basic" element={<PricingBasic />} />
              <Route path="/pro" element={<PricingPro />} />
              <Route path="/enterprise" element={<PrcingEnterprice />} />
               
              <Route path="/eggdonors" element={<EggDonors />} />
              <Route path="/surrogates" element={<Surrogates />} />
              <Route path="/intendedparents" element={<IntendedParents />} />
             
             

            {/* <Route path="/explore" element={<ProtectedRouteWrapper Component={Explore} />} /> */}

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;