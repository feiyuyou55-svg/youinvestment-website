import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import AdminModulePage, { AdminDashboard } from './AdminModulePage'

export default function AdminApp() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="strategies" element={<AdminModulePage moduleKey="strategies" />} />
        <Route path="indices" element={<AdminModulePage moduleKey="indices" />} />
        <Route path="documents" element={<AdminModulePage moduleKey="documents" />} />
        <Route path="site-content" element={<AdminModulePage moduleKey="siteContent" />} />
        <Route path="risk-assessment" element={<AdminModulePage moduleKey="riskAssessment" />} />
        <Route path="team" element={<AdminModulePage moduleKey="team" />} />
        <Route path="activities" element={<AdminModulePage moduleKey="activities" />} />
        <Route path="investor-letters" element={<AdminModulePage moduleKey="investorLetters" />} />
        <Route path="contact-forms" element={<AdminModulePage moduleKey="contactForms" />} />
        <Route path="seo" element={<AdminModulePage moduleKey="seo" />} />
        <Route path="settings" element={<AdminModulePage moduleKey="settings" />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  )
}
