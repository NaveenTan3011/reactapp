import React from 'react'
import Banner from '../components/Banner'
import ProfileCard from '../components/ProfileCard'
import Details from '../components/Details'
import  Layout  from '../Layout'
import Text from '../components/Text'
import { useState } from 'react'
import Try from './Try'

const Services = () => {

  return (
   <>
   <Layout>
    <Banner heading="Services Page Heading"/>
    <ProfileCard/>
    <Details heading="Service Page Details Heading"/>
    <Text/>
    <Try/>
    </Layout>
   </>
  )
}

export default Services
