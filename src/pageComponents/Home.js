import React from 'react'
import Banner from '../components/Banner'
import ProfileCard from '../components/ProfileCard'
import Details from '../components/Details'

const Home = () => {
  return (
    <>
    <Banner heading="Home Page Heading"/>
    <ProfileCard/>
    <Details heading="Home Page Details Heading"/>
    </>
  )
}

export default Home
