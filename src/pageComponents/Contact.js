import React from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
  const { username } = useParams();

  return (
    <h2>Hello Naveen {username}</h2>
  );
};

export default Contact;
