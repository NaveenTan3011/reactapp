import React from "react";
import { useParams } from "react-router-dom";
import Practice from "./Practice";
import Layout from "../Layout";


const Contact = () => {
  const { username } = useParams();

  return (
    <>
      <Layout>
        <h2>Hello Naveen {username} </h2>
        <Practice />
      </Layout>
    </>
  );
};

export default Contact;



