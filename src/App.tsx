import Layout from './components/Layout/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatIconButton from './components/Chat/ChatIconButton'
import ThemeToggle from './components/ThemeToggle'
import AnimatedSection from './components/AnimatedSection';


function App() {
  return (
    <>
    <Layout>
      
      <AnimatedSection><Hero /></AnimatedSection>
  <AnimatedSection><About /></AnimatedSection>
  <AnimatedSection><Projects /></AnimatedSection>
  <AnimatedSection><Experience /></AnimatedSection>
  <AnimatedSection><Skills /></AnimatedSection>
  <AnimatedSection><Contact /></AnimatedSection>
    </Layout>
    <ChatIconButton />
    <ThemeToggle />

    </>
  );
}

export default App;
