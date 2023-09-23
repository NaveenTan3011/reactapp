import React, { useContext, useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ProfileCard from '../components/ProfileCard'
import Details from '../components/Details'
import Layout from '../Layout'
import Cart from '../components/Cart'


const Home = () => {
  const numPairs = 2; // Number of input/button pairs
  return (
    <>
    <Layout >
    <Banner heading="Home Page Heading"/>
    <ProfileCard/>
    <Details heading="Home Page Details Heading"/>
    <div>
      {Array.from({ length: numPairs }, (_, index) => (
        <Cart key={index} index={index} />
      ))}
    </div>
    </Layout>
    </>
  )
}

export default Home
