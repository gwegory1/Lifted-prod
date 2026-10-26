import { lazy, Suspense, type ReactNode } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { MotionConfig, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import '@fontsource/montserrat/100-italic.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/400-italic.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import '@fontsource/montserrat/900.css'
import './App.css'
import theme, { ease } from './theme/theme'
import Home from './routes/home'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import Navbar from './components/navbar'
import Footer from './components/footer'

const About = lazy(() => import('./routes/aboutme'))
const Training = lazy(() => import('./routes/training'))
const Nutrition = lazy(() => import('./routes/nutrition'))

// Each page fades in on navigation, so route changes don't hard-cut.
const PageFade = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation()
  return (
    <motion.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, ease }}>
      {children}
    </motion.div>
  )
}

function App() {
  const { t } = useTranslation()

  return (
    <ThemeProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <Router>
          <ScrollToTop />
          <a className="skip-link" href="#main">{t('skipToContent')}</a>
          <Navbar />
          <main id="main" tabIndex={-1} style={{ outline: 'none' }}>
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <PageFade>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/nutrition" element={<Nutrition />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </PageFade>
            </Suspense>
          </main>
          <Footer />
          <ScrollToTopButton />
        </Router>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
