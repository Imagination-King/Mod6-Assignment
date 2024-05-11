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

  return (
    <div id="container">
      <div className="editBox">
        <PersonalInfo onChange={handlePersonalInfoUpdate} />
      </div>
      <div className="editBox">
        <Education onChange={handleEducationUpdate} />
      </div>
      <div className="editBox">
        <WorkInfo onChange={handleWorkInfoUpdate} />
      </div>

      <div>
        <h1>{personalInfo.fullName}</h1>
        <h2>{personalInfo.email}</h2>
        <h3>{personalInfo.phone}</h3>
        <p>{personalInfo.bio}</p>
      </div>
      <div>
        <h3>{educationInfo.schoolName}</h3>
        <p>{educationInfo.yearStart}</p>
        <p>{educationInfo.yearEnd}</p>
        <p>{educationInfo.course}</p>
        <p>{educationInfo.location}</p>
      </div>
      <div>
        <h3>{workInfo.company}</h3>
        <p>{workInfo.position}</p>
        <p>{workInfo.yearStart}</p>
        <p>{workInfo.yearEnd}</p>
        <p>{workInfo.location}</p>
        <p>{workInfo.jobDesc}</p>
      </div>
    </div>
  );
}

export default App;
