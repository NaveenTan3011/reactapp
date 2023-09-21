import React, { useContext, useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ProfileCard from '../components/ProfileCard'
import Details from '../components/Details'
import Layout from '../Layout'
import NoteContext from '../context/NoteContext'


const Home = () => {

  return (
    <>
    <Layout >
    <Banner heading="Home Page Heading"/>
    <ProfileCard/>
    <Details heading="Home Page Details Heading"/>
    </Layout>
    </>
  )
}

export default Home
