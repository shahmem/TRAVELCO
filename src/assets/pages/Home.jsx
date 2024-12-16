import React from 'react'
import Header from '../components/Header'
import Head from '../components/Head'
import AboutCmp from '../components/AboutCmp'
import ServicesCmp from '../components/ServicesCmp'
import PackagesCmp from '../components/PackagesCmp'
import DestinationCmp from '../components/DestinationCmp'
import BookingCmp from '../components/BookingCmp'
import TravelGuideCmp from '../components/TravelGuideCmp'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
     <Header/>
     <Head showBox={true} id="Enjoy Your Vacation With Us" name="Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit" />
     <AboutCmp />
     <ServicesCmp/>
     <DestinationCmp/>
     <PackagesCmp/>
     <BookingCmp/>
     <TravelGuideCmp/>
     <Footer/>
     </>
  )
}

export default Home