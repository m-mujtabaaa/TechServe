import React from 'react'

function About() {
  return (
        <section className="online-learning" id='about'>
        <div className="text-content">
            <h4 className="chead">About Us</h4>
          <h2 className="abhead">Develop Your Skills, Learn Something New, and Grow Your Skills From Anywhere in the World!</h2>
          <p className="abp">
            We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!
          </p>
          <ul className="features">
            <li className="feature">Expert Trainers</li>
            <li className="feature">Lifetime Access</li>
            <li className="feature">Remote Learning</li>
            <li className="feature">Self Development</li>
          </ul>
          <button className="view-courses">View All Courses</button>
        </div>
        <div className="image-gallery">
          <img  src="about-img3-(1).png" alt="Team working" className="aimage"/>
          <img  src="about-img4-(1).png" alt="Woman studying" className="aimage"/>
          <img  src="about-img1.png" alt="Discussion" className="aimage"/>
          <img  src="about-img2(1).png" alt="Group meeting" className="aimage"/>
        </div>
      </section>

  )
}

export default About