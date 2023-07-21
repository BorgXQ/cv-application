import { React, useState } from 'react'
import PersonalInfo from './PersonalInfo'
import './css/main.css'

function App() {
  const [name, setName] = useState('')
  const [info, setInfo] = useState('')

  return (
    <>
      <div className="a4">
        <h1 class="full-name">Jonathan Widarsa</h1>
        <p class="personal-info">
            Singapore | +65 8505 6150 | jonathan.widarsa@gmail.com
        </p>
        <div class="heading">EDUCATION</div>
        <hr></hr>
        <div class="title-place">
          <div class="title">Nanyang Technological University</div>
          <div class="place">Singapore</div>
        </div>
        <div class="role-date">
          <div class="role">Biological Sciences</div>
          <div class="date">June 2020 - Present</div>
        </div>
        <ul>
          <li><div class="description">NTU Modern Jazz Hip-Hop member</div></li>
        </ul>

        <div class="heading">WORK EXPERIENCE</div>
        <hr></hr>
        <div class="title-place">
          <div class="title">Illumina, Inc.</div>
          <div class="place">Singapore</div>
        </div>
        <div class="role-date">
          <div class="role">Research Intern</div>
          <div class="date">July 2022 - December 2022</div>
        </div>
        <ul>
          <li><div class="description">Chaired an entire mini-project under senior scientist supervision, studied it and mentored new full-time scientists on my project design within the first half of the program.</div></li>
          <li><div class="description">Redesigned two major workflows, greatly reducing reagent wastage and increasing time efficiency twofold, which was implemented as project standard in under three months.</div></li>
          <li><div class="description">Analyzed dozens of research journals and developed formulations that significantly improved the activity and stability of the chemical component of interest.</div></li>
        </ul>

        <div class="title-place">
          <div class="title">Self-Employed</div>
          <div class="place">Singapore</div>
        </div>
        <div class="role-date">
          <div class="role">H2 Mathematics Tutor</div>
          <div class="date">October 2021 - October 2022</div>
        </div>
        <ul>
          <li><div class="description">Networked effectively with multiple experienced tutors, boosting oneself’s student count up twofold.</div></li>
          <li><div class="description">Curated a method of pedagogy through students of varying backgrounds, cultivating deeper bonds which sparked their own interest in the subject.</div></li>
          <li><div class="description">Organized lessons using Google Docs and Sheets, maintaining a balanced and consistent schedule between teaching and other responsibilities.</div></li>
        </ul>

        <div class="heading">LEADERSHIP EXPERIENCE</div>
        <hr></hr>
        <div class="title-place">
          <div class="title">Research Project, School of Biological Sciences</div>
          <div class="place">Singapore</div>
        </div>
        <div class="role-date">
          <div class="role">Research Director</div>
          <div class="date">January 2022 - April 2022</div>
        </div>
        <ul>
          <li><div class="description">Reinforced ideas and addressed gaps in previous studies on the effect of lo-fi music on memory-related tasks.</div></li>
          <li><div class="description">Presented findings to an audience of research students and professors, spurring debates that launched novel links between music and behavioral neurology.</div></li>
          <li><div class="description">Collaborated with a relevant scientist to mentor the research direction, fortifying the credibility of the research findings.</div></li>
        </ul>

        <div class="heading">SKILLS</div>
        <hr></hr>
        <ul>
          <li class="skill"><div class="description">Proficient in English and Indonesian, conversant in Japanese.</div></li>
          <li class="skill"><div class="description">Western Blotting | Cell Culture | Gel Electrophoresis | High-Performance Liquid Chromatography | Next-Generation Sequencing | Microplate Reading | Lyophilization | Microsoft Office</div></li>
        </ul>
      </div>

      <div class="name-pers-info">
        <label for="insert" class="insert">
          Name:
          <input type="text" class="input-name" placeholder="Jane Doe"/>
        </label>
        <br></br>
        <label for="insert" class="insert">
          Personal Information:
          <input type="text" class="input-pers-info" placeholder="Singapore | +65 1234 5678 | jane.doe@gmail.com"/>
        </label>
      </div>

      <div class="section">
        <div class="sub-section">
          <label for="" class="insert">
            Company/Title:
            <input type="text" class="input-title" placeholder="ABC Pte. Ltd"/>
          </label>
          <label for="" class="insert">
            Location:
            <input type="text" class="input-location" placeholder="Singapore"/>
          </label>
        </div>
        <div class="sub-section">
          <label for="" class="insert">
            Role:
            <input type="text" class="input-role" placeholder="Senior Software Engineer"/>
          </label>
          <label for="" class="insert">
            Date:
            <input type="text" class="input-date" placeholder="February 20XX - Present"/>
          </label>
        </div>
        <label for="" class="insert">
          Description:
          <textarea class="input-desc"placeholder="- Negotiated with relevant sponsorships, saving XX% of expected budget costs."></textarea>
        </label>
      </div>

      <div class="btn-container">
        <button class="to-edu">Education</button>
        <button class="to-work">Work Experience</button>
        <button class="to-leader">Leadership Experience</button>
      </div>

      <label for="" class="insert skill-section">
        Skills:
        <textarea class="input-skill" placeholder="- Javascript | HTML | CSS | React | Node.js | Express | MongoDB"></textarea>
      </label>
    </>
  )
}

export default App
