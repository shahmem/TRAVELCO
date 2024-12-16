import React from 'react'
import Header from '../components/Header'
import Head from '../components/Head'
import ContactCmp from '../components/ContactCmp'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
     <Header/>
     <Head  id="Contact" name="" />
      <ContactCmp />
      <Footer/>
    </div>
  )
}

export default Contact