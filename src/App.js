import React, { Component } from 'react'
import About from './components/about/about'
import ContactUs from './components/contactus/contactus'
import Footer from './components/footer/footer'
import Main from './components/main/main'
import Navigation from './components/navigation/navigation'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section id="about"><About /></section>
        <section id="navigation"><Navigation /></section>
        <section id="main"><Main /></section>
        <section id="contact-us"><ContactUs /></section>
        <section id="footer"><Footer /></section>
      </div>
    )
  }
}

export default App
