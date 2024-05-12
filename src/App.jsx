import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import WorkInfo from "./components/WorkInfo";
import "./styles/style.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    bio: "",
  });
  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    yearStart: "",
    yearEnd: "",
    course: "",
    location: "",
  });
  const [workInfo, setWorkInfo] = useState({
    company: "",
    yearStart: "",
    yearEnd: "",
    position: "",
    jobDesc: "",
  });

  const handlePersonalInfoUpdate = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
  };
  const handleEducationUpdate = (updatedInfo) => {
    setEducationInfo(updatedInfo);
  };
  const handleWorkInfoUpdate = (updatedInfo) => {
    setWorkInfo(updatedInfo);
  };
  //console.log(WorkInfo);
  return (
    <div id="container">
      <div id="editPane">
        <div className="editBox">
          <PersonalInfo onChange={handlePersonalInfoUpdate} />
        </div>
        <div className="editBox">
          <Education onChange={handleEducationUpdate} />
        </div>
        <div className="editBox">
          <WorkInfo onChange={handleWorkInfoUpdate} />
        </div>
      </div>

      <div id="resume">
        <section className="personalInfo">
          <h1>{personalInfo.fullName}</h1>
          <h2>{personalInfo.email}</h2>
          <h3>{personalInfo.phone}</h3>
          <p>{personalInfo.bio}</p>
        </section>
        <section className="educationInfo">
          <h2>Education</h2>
          <h3>{educationInfo.schoolName}</h3>
          <p>{educationInfo.course}</p>
          <p>{educationInfo.yearStart} - {educationInfo.yearEnd}</p>
          <p>{educationInfo.location}</p>
        </section>
        <section className="workInfo">
          <h2>Work Experience</h2>
          <h3>{workInfo.company}</h3>
          <p> {workInfo.position}</p>
          <p>{workInfo.yearStart} - {workInfo.yearEnd}</p>
          <p>{workInfo.location}</p>
          <p>{workInfo.jobDesc}</p>
        </section>
      </div>
    </div>
  );
}

export default App;
