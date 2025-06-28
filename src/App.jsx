import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Explore from './pages/Explore.jsx';
import Pricing from './pages/Pricing.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Cookies from './pages/Cookies.jsx';
import './utils/colors.css';
import './i18n';
import TermsAndConditions from './pages/Terms.jsx';
import EggDonors from './pages/Functionalities/EggDonors.jsx';
import Surrogates from './pages/Functionalities/Surrogacy.jsx';
import IntendedParents from './pages/Functionalities/Intended.jsx';
import PricingBasic from './pages/PricingBasic.jsx'
import PrcingEnterprice from './pages/PricingEnterprice.jsx';
import PricingPro from './pages/PricingPro.jsx';

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