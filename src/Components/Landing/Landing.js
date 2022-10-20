import React from 'react';
import "./Landing.css";
// import IMG from "../images/logo.jpg";

export default function Landing() {
  return (
    <div className='landing-page'>
      <h1>DMLS ONLINE LOAN APPLICATION</h1>

       {/* <img alt="logo" src={IMG}></img> */}

      <div className="content-on-page">
        <article className="about-us">
          <h1>ABOUT US</h1>
          <p>THE DANIELS MONEY MEGA SERVICES massively known as DMLS is a registered
          financial company (a money master company) in a long lane established to
          cater miliarense, efficient and serviceable solutions to the society needs at
          large. It is profound and lignified within the fundamental ideas of sustainable
          development which is an essential vehicle for the economic development
          of Malawi. DMLS aims at promoting the economic structure of the society by
          mounting ideas that provide efficient scalable solutions to solve, adjust and
          stellify its organization. <span>Our objective is to promote the world society.</span></p>
        </article>

        <div className="articles">
            <article className="mission-statement">
                <h2>Our Mission</h2>
                
                <p>Our mission is to be the aptitude of the world society
                economic and social needs and to make
                sure that every individual has achieved
                his/her true <span>freedom (financial freedom)</span></p>
          </article>

          <article className="goals">
            <h2>Our Goals</h2>

            <p>To ensure that there is economic
            mindset change in most societies
            across Africa and the entire world.</p>
            <p></p>

            <p>To ensure that 80% of the world society
            has developed faculties that will enable
            them to achieve  their financial freedom
            before 2067.</p>
          </article>

          <article className="services">
              <h2>Our Services</h2>
              
              <p>To be of competence with our objectives, DMLS through its management fortifies on branding the company by working on 
              new ideas needed to serve the society at large. Among others <span> DMLS has already mantled its structure which
              has assembled on providing macro and micro loans</span>, Different Types of Investments, Student’s coverage, Insurance
              Coverage and other services aimed at promoting the eco-System of the society.</p>
          </article>
        </div>

        <div className="macro">
          <h2>MACRO AND MICRO LOANS</h2>

          <p>This is one of the services that DMLS has established to weaken the Gap that has always existed 
          between people and different financing companies acting as a barrier
          to quick and accessible instants loans. DMLS provide standardized MACRO and MICRO
          loans to everyone who has qualified for our service.<br/> We offer loans to satisfy both the
          immediate and the long needs of our customers. Please Note that, our loan services
          require a full responsibility of a customer to apply, confirm the process, and to make
          the payment within the contempt duration. We have devised our loan service based
          on customer immediate and long needs and service availability and equitability.</p>

          <br/>
          <p>We have five different loan categories in the charter of our financial base. Please choose a
          loan category you would like to apply for. </p>

        </div>
        
        <div className="buttons">
          <button type="button">GP Loan</button>
          <button type="button">Capital Startup</button>
          <button type="button">Farmers Onight</button>
          <button type="button">Coorpolate Loan</button>
        </div>

        <small> Dmls capital startup loans and Dmls farmers onight loans are coming soon</small>
        
      </div>
    </div>
  )
}
