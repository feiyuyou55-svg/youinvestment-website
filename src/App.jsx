import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import AdminApp from './admin/AdminApp'
import Home from './pages/Home'
import Accounts from './pages/Accounts'
import Strategies from './pages/Strategies'
import Founder from './pages/Founder'
import About from './pages/About'
import Contact from './pages/Contact'
import RiskAssessment from './pages/RiskAssessment'
import WealthDiagnosis from './pages/WealthDiagnosis'
import Team from './pages/Team'
import TeamMember from './pages/TeamMember'
import Indices from './pages/Indices'
import Documents from './pages/Documents'

export default function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminApp />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="strategies" element={<Strategies />} />
        <Route path="indices" element={<Indices />} />
        <Route path="documents" element={<Documents />} />
        <Route path="risk-assessment" element={<RiskAssessment />} />
        <Route path="wealth-diagnosis" element={<WealthDiagnosis />} />
        <Route path="founder" element={<Founder />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<Team />} />
        <Route path="team/:slug" element={<TeamMember />} />
        <Route path="academy" element={<Navigate to="/about#wealth-academy" replace />} />
      </Route>
    </Routes>
  )
}
