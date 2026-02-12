import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme'; // Import your custom theme file
// Admin Context
import { AdminProvider } from './context/AdminContext';

// Layout Components
import Navbar from "./layout/Navbar";
import Footer from './layout/Footer';
import ScrollToTop from './layout/ScrollToTop';
import CookieBanner from './components/CookieBanner';

// Main Pages
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import CareerJobDetail from './pages/CareerJobDetail';
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import DiagnosticTest from './pages/admin/DiagnosticTest';

// Admin Pages
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import BlogList from './pages/admin/blogs/BlogList';
import BlogForm from './pages/admin/blogs/BlogForm';
import JobList from './pages/admin/jobs/JobList';
import JobForm from './pages/admin/jobs/JobForm';

function AppContent() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      <Routes>
        {/* Main Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerJobDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/admin/diagnostic" element={<DiagnosticTest />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/blogs" element={<BlogList />} />
        <Route path="/admin/blogs/create" element={<BlogForm />} />
        <Route path="/admin/blogs/edit/:id" element={<BlogForm />} />
        <Route path="/admin/jobs" element={<JobList />} />
        <Route path="/admin/jobs/create" element={<JobForm />} />
        <Route path="/admin/jobs/edit/:id" element={<JobForm />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <CookieBanner />
    </Box>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <AdminProvider>
      {/* Router at top-level for SPA */}
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </AdminProvider>
  );
}
