import { Route, Routes } from "react-router-dom"
import { Header } from "./layouts/Header/Header.jsx"
import { Footer } from "./layouts/Footer/Footer.jsx"
import { Home } from "./pages/Home/home.jsx"
import { TechnicalSkills } from "./pages/TechnicalSkills/TecnicalSkills.jsx"
import { SocialSkills } from "./pages/SocialSkills/Social.Skills.jsx"
import { ProfessionalExperience } from "./pages/ProfessionalExperience/ProfessionalExperiencie.jsx"
import { Studies } from "./pages/Studies/Studies.jsx"

export function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/TechnicalSkills" element={<TechnicalSkills />} />
          <Route path="/SocialSkills" element={<SocialSkills />} />
          <Route path="/ProfessionalExperience" element={<ProfessionalExperience />} />
          <Route path="/Studies" element={<Studies />} />
        </Routes>
      <Footer />
    </>
  )
}

