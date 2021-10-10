
import './App.css';
import Header from './Header/Header';
import Awardwinning from './Awardwinning/Awardwinning';
import ProjectCard from './ProjectCard/ProjectCard';
import Comments from './Comments/Comments';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Awardwinning></Awardwinning>
      <ProjectCard></ProjectCard>
      <Comments></Comments>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
