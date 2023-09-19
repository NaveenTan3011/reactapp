import React from 'react'
import Banner from '../components/Banner'
import ProfileCard from '../components/ProfileCard'
import Details from '../components/Details'
import { useParams } from 'react-router-dom'

const Services = () => {
  return (
   <>
    <Banner heading="Services Page Heading"/>
    <ProfileCard/>
    <Details heading="Service Page Details Heading"/>


   </>
  )
}

export default Services
