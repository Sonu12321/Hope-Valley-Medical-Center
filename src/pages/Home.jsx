import React, { useContext } from "react";
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome toHope Valley Medical Center | Your Trusted Healthcare Provider"
        }
        imageUrl={"/tell.png"}
      />
      <Biography imageUrl={"/hospital.jpg"} />
      <Departments />
      <MessageForm />
    </>
  )
}

export default Home