import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Project from './components/Project';
import Video from './components/Video';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Email from './components/Email';
import Documents from './components/Documents';
import BackHome from './components/BackHome';



function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/documents">
            <Header />
              <Documents />
            <Footer />
          </Route>
          <Route exact path="/benefits">
            <Header />
              <Project />
            <Footer />
          </Route>
          <Route exact path="/feedback">
            <Header />
              <Feedback />
            <Footer />
          </Route>
          <Route exact path="/contact">
            <Header />
              <Contact />
            <Footer />
          </Route>
          <Route exact path="/news">
            <Header />
              <Email />
            <Footer />
          </Route>
          <Route exact path="/">
            <Header />
              <Main />
                <BackHome />
                <Video />
                <Project />
                <Feedback />
              <Contact />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
