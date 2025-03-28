import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Home/Hero'
import About from '../Components/Home/About'
import Expertise from '../Components/Home/Expertise'
import Section from '../Components/Home/Section'
import Work from '../Components/Home/Work'
import SayHello from '../Components/Home/SayHello'
import Form from '../Components/Home/Form'
import Footer from '../Components/Home/Footer'
import LoadingCounter from '../Components/LoadingCounter'
const Home = () => {
  return (
    <div>
      <LoadingCounter/>
        <Navbar/>
        <Hero/>
        <About/>
        <Expertise/>
        <Section/>
        <Work/>
        <SayHello/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Home