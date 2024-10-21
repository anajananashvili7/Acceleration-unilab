import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo"
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";
import SectionFive from "./components/sectionFive/SectionFive";
import SectionSix from "./components/sectionSix/SectionSix";
import Timer from "./components/timer/Timer";
import ViewMorePage from "./pages/ViewMorePage";
import PetProfile from "./components/petProfile/PetProfile";
import JoinCommunity from "./components/join/Join"
import SignUp from "./components/signup/SignUp";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import { AuthProvider } from "../src/context/AuthContext"
import { LanguageProvider } from "../src/context/LanguageContext"




function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={
            <>
              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <SectionSix />
              <Timer />
            
            </>
          } />
          <Route path="/view-more" element={<ViewMorePage />} />
          <Route path="/pet-profile/:petId" element={<PetProfile />} />
          <Route path="/join-community" element={<JoinCommunity />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<ViewMorePage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
        <Footer /> 
      </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
