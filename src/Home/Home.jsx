import React from 'react'
import Banner from '../page/Banner/Banner'
import OurLatest from '../page/OurLatest/OurLatest'
import Testimonials from '../page/Testimonials/Testimonials'
import Health from '../page/Health/Health'
import Donation from '../page/Donation/Donation'
import Hiring from '../page/Hiring/Hiring'

const Home = () => {
  return (
    <>
    <Banner />
    <Health />
    <OurLatest />
    <Donation />
    <Testimonials />
    <Hiring />
    </>
  )
}

export default Home