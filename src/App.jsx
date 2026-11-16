import NavBar from './components/NavBar'
import FloatingActions from './components/FloatingActions'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Menu from './sections/Menu'
import Reviews from './sections/Reviews'
import Visit from './sections/Visit'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Menu />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}