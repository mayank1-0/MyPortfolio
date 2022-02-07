import React, { Component } from 'react';
import resumeData from './resumeData';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
// import Portfolio from './components/portfolio/portfolio';
// import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Navigation from './components/navigation/navigation';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About />
        <Resume />
        <Navigation />
        <Main />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
