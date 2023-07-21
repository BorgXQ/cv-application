import { React, useState } from 'react'
import PersonalInfo from './PersonalInfo'
import './css/main.css'

function App() {
  const [name, setName] = useState('')
  const [info, setInfo] = useState('')

  return (
    <>
      <div className="a4">
        <h1 className="full-name">Jonathan Widarsa</h1>
        <p className="personal-info">
            Singapore | +65 8505 6150 | jonathan.widarsa@gmail.com
        </p>
        <div className="heading">EDUCATION</div>
        <hr></hr>
        <div claclassNamess="title-place">
          <div className="title">Nanyang Technological University</div>
          <div className="place">Singapore</div>
        </div>
        <div className="role-date">
          <div className="role">Biological Sciences</div>
          <div className="date">June 2020 - Present</div>
        </div>
        <ul>
          <li><div className="description">NTU Modern Jazz Hip-Hop member</div></li>
        </ul>

        <div className="heading">WORK EXPERIENCE</div>
        <hr></hr>
        <div className="title-place">
          <div className="title">Illumina, Inc.</div>
          <div className="place">Singapore</div>
        </div>
        <div className="role-date">
          <div className="role">Research Intern</div>
          <div className="date">July 2022 - December 2022</div>
        </div>
        <ul>
          <li><div className="description">Chaired an entire mini-project under senior scientist supervision, studied it and mentored new full-time scientists on my project design within the first half of the program.</div></li>
          <li><div className="description">Redesigned two major workflows, greatly reducing reagent wastage and increasing time efficiency twofold, which was implemented as project standard in under three months.</div></li>
          <li><div className="description">Analyzed dozens of research journals and developed formulations that significantly improved the activity and stability of the chemical component of interest.</div></li>
        </ul>

        <div className="title-place">
          <div className="title">Self-Employed</div>
          <div className="place">Singapore</div>
        </div>
        <div className="role-date">
          <div className="role">H2 Mathematics Tutor</div>
          <div className="date">October 2021 - October 2022</div>
        </div>
        <ul>
          <li><div className="description">Networked effectively with multiple experienced tutors, boosting oneself’s student count up twofold.</div></li>
          <li><div className="description">Curated a method of pedagogy through students of varying backgrounds, cultivating deeper bonds which sparked their own interest in the subject.</div></li>
          <li><div className="description">Organized lessons using Google Docs and Sheets, maintaining a balanced and consistent schedule between teaching and other responsibilities.</div></li>
        </ul>

        <div className="heading">LEADERSHIP EXPERIENCE</div>
        <hr></hr>
        <div className="title-place">
          <div className="title">Research Project, School of Biological Sciences</div>
          <div className="place">Singapore</div>
        </div>
        <div className="role-date">
          <div className="role">Research Director</div>
          <div className="date">January 2022 - April 2022</div>
        </div>
        <ul>
          <li><div className="description">Reinforced ideas and addressed gaps in previous studies on the effect of lo-fi music on memory-related tasks.</div></li>
          <li><div className="description">Presented findings to an audience of research students and professors, spurring debates that launched novel links between music and behavioral neurology.</div></li>
          <li><div className="description">Collaborated with a relevant scientist to mentor the research direction, fortifying the credibility of the research findings.</div></li>
        </ul>

        <div className="heading">SKILLS</div>
        <hr></hr>
        <ul>
          <li className="skill"><div className="description">Proficient in English and Indonesian, conversant in Japanese.</div></li>
          <li className="skill"><div className="description">Western Blotting | Cell Culture | Gel Electrophoresis | High-Performance Liquid Chromatography | Next-Generation Sequencing | Microplate Reading | Lyophilization | Microsoft Office</div></li>
        </ul>
      </div>

      <div className="name-pers-info">
        <label for="insert" className="insert">
          Name:
          <input type="text" className="input-name" placeholder="Jane Doe"/>
        </label>
        <br></br>
        <label for="insert" className="insert">
          Personal Information:
          <input type="text" className="input-pers-info" placeholder="Singapore | +65 1234 5678 | jane.doe@gmail.com"/>
        </label>
      </div>

      <div className="section">
        <div className="sub-section">
          <label for="" className="insert">
            Company/Title:
            <input type="text" className="input-title" placeholder="ABC Pte. Ltd"/>
          </label>
          <label for="" className="insert">
            Location:
            <input type="text" className="input-location" placeholder="Singapore"/>
          </label>
        </div>
        <div className="sub-section">
          <label for="" className="insert">
            Role:
            <input type="text" className="input-role" placeholder="Senior Software Engineer"/>
          </label>
          <label for="" className="insert">
            Date:
            <input type="text" className="input-date" placeholder="February 20XX - Present"/>
          </label>
        </div>
        <label for="" className="insert">
          Description:
          <textarea className="input-desc"placeholder="- Negotiated with relevant sponsorships, saving XX% of expected budget costs."></textarea>
        </label>
      </div>

      <div className="btn-container">
        <button className="to-edu">Education</button>
        <button className="to-work">Work Experience</button>
        <button className="to-leader">Leadership Experience</button>
      </div>

      <label for="" className="insert skill-section">
        Skills:
        <textarea className="input-skill" placeholder="- Javascript | HTML | CSS | React | Node.js | Express | MongoDB"></textarea>
      </label>
    </>
  )
}

export default App
