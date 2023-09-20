import React from 'react'
import Banner from '../components/Banner'
import ProfileCard from '../components/ProfileCard'
import Details from '../components/Details'
import  Layout  from '../Layout'

const Services = () => {
  return (
   <>
   <Layout>
    <Banner heading="Services Page Heading"/>
    <ProfileCard/>
    <Details heading="Service Page Details Heading"/>
    </Layout>
   </>
  )
}

export default Services
