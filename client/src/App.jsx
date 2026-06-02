import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ImmersiveBackground3D from "./components/ImmersiveBackground3D";

function App() {
  return (
    <main className="container-main">
      <ImmersiveBackground3D />
      <Navigation />
      <Main />
      <Aboutme />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
