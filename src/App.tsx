import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, GlobalStyles } from '@mui/material';

// Admin Context
import { AdminProvider } from './context/AdminContext';

// Main Layout Components
import Navbar from "./layout/Navbar";
import Footer from './layout/Footer';
import ScrollToTop from './layout/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import PageTracker from './analytics/PageTracker';


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

export default function App() {
  return (
    <AdminProvider>
      <GlobalStyles
        styles={{
          '@keyframes floatBlue': {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '33%': { transform: 'translate(60px, 80px) scale(1.1)' },
            '66%': { transform: 'translate(-40px, 60px) scale(0.95)' },
          },
          '@keyframes floatYellow': {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '33%': { transform: 'translate(-50px, -70px) scale(1.08)' },
            '66%': { transform: 'translate(30px, -50px) scale(0.92)' },
          },
          '@keyframes floatAccent1': {
            '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
            '50%': { transform: 'translate(-80px, 60px) rotate(180deg)' },
          },
          '@keyframes floatAccent2': {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '50%': { transform: 'translate(40px, -40px) scale(1.15)' },
          },
        }}
      />

      <Router>
        <ScrollToTop />
        <PageTracker />
        <Box
          sx={{
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F8FAFC 100%)',
          }}
        >
          {/* --- PRIMARY BLUE GLOW --- */}
          <Box
            sx={{
              position: 'absolute',
              width: '800px',
              height: '800px',
              top: '-250px',
              left: '-300px',
              background:
                'radial-gradient(circle, rgba(0,87,255,0.3) 0%, rgba(77,140,255,0.15) 35%, transparent 70%)',
              filter: 'blur(120px)',
              animation: 'floatBlue 28s ease-in-out infinite',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* --- SECONDARY YELLOW GLOW --- */}
          <Box
            sx={{
              position: 'absolute',
              width: '700px',
              height: '700px',
              bottom: '-200px',
              right: '-250px',
              background:
                'radial-gradient(circle, rgba(255, 216, 61, 0.84) 0%, rgba(255, 230, 128, 0.89) 35%, transparent 70%)',
              filter: 'blur(110px)',
              animation: 'floatYellow 32s ease-in-out infinite',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* --- ACCENT BLUE GLOW --- */}
          <Box
            sx={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              top: '40%',
              right: '10%',
              background:
                'radial-gradient(circle, rgba(77,139,255,0.96) 0%, transparent 60%)',
              filter: 'blur(100px)',
              animation: 'floatAccent1 35s ease-in-out infinite',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* --- ACCENT YELLOW GLOW --- */}
          <Box
            sx={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              top: '15%',
              right: '20%',
              background:
                'radial-gradient(circle, rgba(255, 230, 128, 0.84) 0%, transparent 10%)',
              filter: 'blur(40px)',
              animation: 'floatAccent2 38s ease-in-out infinite',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* --- GRID LAYERS --- */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(176, 202, 236, 0.82) 1px, transparent 1px),
                linear-gradient(90deg, rgba(226, 232, 240, 0.89) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              opacity: 0.45,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(200,210,230,0.12) 2px, transparent 2px),
                linear-gradient(90deg, rgba(200,210,230,0.12) 2px, transparent 2px)
              `,
              backgroundSize: '200px 200px',
              opacity: 0.35,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: `
                linear-gradient(
                  135deg,
                  rgba(255,255,255,0.06) 0%,
                  transparent 40%,
                  transparent 60%,
                  rgba(255,255,255,0.05) 100%
                )
              `,
              opacity: 0.35,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* MAIN CONTENT */}
          <Box sx={{ position: 'relative', zIndex: 1 }}>
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

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
            <CookieBanner />
          </Box>
        </Box>
      </Router>
    </AdminProvider>
  );
}