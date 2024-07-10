import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    <>
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
        Welcome to Hope Valley Medical Center, your trusted partner in health and well-being. Established in 1998, we are a state-of-the-art multispeciality hospital dedicated to providing exceptional medical care to our community. Our commitment to excellence, compassion, and innovation has made us a leader in healthcare, offering comprehensive services across a wide range of specialties.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  </>
  )
}

export default Hero