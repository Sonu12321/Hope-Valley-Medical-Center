import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h2>Who We Are</h2>
          <p>
        Founded: 1985
        Location: Hope Valley, Kochi.Kerala

        <h2>Mission:</h2> 
        <p>To provide compassionate, high-quality healthcare to the Hope Valley community through innovation, excellence, and dedication to patient-centered care.
        </p>
        <h2>Overview:</h2>

          <p>Hope Valley Medical Center (HVMC) has been a cornerstone of healthcare in the Hope Valley region since its establishment in 1998. With a commitment to delivering outstanding medical services, HVMC has grown from a small community hospital into a leading medical institution, renowned for its advanced healthcare facilities and compassionate care.
          </p>
<h2>History:</h2>
<p>
HVMC was founded by Dr. Jane Mitchell and a group of visionary healthcare professionals who saw the need for a comprehensive medical facility in the growing Hope Valley community. Starting with just 50 beds, the hospital has expanded over the years to accommodate the increasing demand for medical services. Today, HVMC boasts over 300 beds and a state-of-the-art medical campus.
</p>
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;