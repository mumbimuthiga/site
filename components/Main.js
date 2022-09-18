import React from 'react'
import mainStyles from '../styles/Main.module.css'

const Main = () => {
  return (
    <>
    <div className={mainStyles.header}>
        <h1>Why Zetech University</h1>
        <p>Interact with your trusted partner in higher education.</p>
    </div>
    <div className={mainStyles.row}>
        <div className={mainStyles.column}>
            <h3>Quality Guaranteed</h3>
            <p>
                Accredited by the Commission for University Education in Kenya,
                 Zetech University offers quality higher education to thousands of students from Kenya and beyond.
                  As an ISO 9001:2015 certified institution, 
                we employ the services of qualified and motivated staff to provide excellent training.
                </p>

        </div>
        <div className={mainStyles.column}>
        <h3>Financial Aid</h3>
        <p>
        Our financial services allow learners to access funding through available Government and County
         funding programmes. Degree applicants are eligible for HELB support to lessen the burden in accessing 
         quality education.
         We also admit government sponsored students and offer need-based scholarships.
        </p>

        </div>
        <div className={mainStyles.column}>
        <h3>Research and Extension</h3>
        <p>
        Research and collaboration plays a significant role in developing effective academic systems,
         driving the University’s commitment to invest in research engagements and facilities.
          This will enhance our students and faculty experience as well as 
        create a forum through which research findings can be used to influence policy and transform the world
        </p>

        </div>
        <div className={mainStyles.column}>
        <h3>Uninterrupted Learning</h3>
        <p>
As a private institution passionate about establishing a smooth and steady academic experience, 
we have structures in place to ensure there is no disruption of learning. 
All departments play their specific roles efficiently to ensure you finish your programme on time and graduate.
 The University also provides online 
learning as an effective platform for students to access and pursue their education.
        </p>

        </div>
        <div className={mainStyles.column}>
        <h3>Ideal Learning Environment </h3>
        <p>
        Join students at our serene and ideal university complex, conveniently located along 
        the Thika Super Highway, only 20 kilometers from Nairobi. Our spacious lecture halls, ultra-modern 
        Library, state of the art 
        auditorium and executive study areas will provide you with the environment you require to excel.
        </p>

        </div>
        <div className={mainStyles.column}>
        <h3>Partnerships and Community Outreach </h3>
        <p>
        At Zetech, we are committed to enhancing lives in the community with the objective
         of drawing the University fraternity towards the spirit of community service and servant leadership. 
        We identify community projects to support and partnering with like-minded entities to impact lives.
        </p>

        </div>

    </div>
  </>

  )
}

export default Main