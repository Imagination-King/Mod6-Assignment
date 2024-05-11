import { useState } from "react";

function PersonalInfo() {
const [personalInfo, setPersonalInfo] = useState({
  fullName: "",
  email: "",
  phone: "",
});
  
  const[editable, setEditable] = useState(false);
  const[submittedInfo, setSubmittedInfo] = useState({});

  const handleFullNameChange = (e) => {
    setPersonalInfo(prevInfo => (
      {...prevInfo, fullName: e.target.value}
    ))
  }
  const handleEmailChange = (e) => {
    setPersonalInfo(prevInfo => (
      {...prevInfo, email: e.target.value}
    ))
  }
  const handlePhoneChange = (e) => {
    setPersonalInfo(prevInfo => (
      {...prevInfo, phone: e.target.value}
    ))
  }

  const handleEdit = () => {
    setEditable(true);
  }
  const handleSubmit = () => {
    setSubmittedInfo(personalInfo);
    setEditable(false);
  }
  const handleReset = () => {
    setPersonalInfo(submittedInfo);
  }
  
  return(
    <div>
      <h2>Personal Information</h2>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={personalInfo.fullName} onChange={handleFullNameChange} disabled={!editable}/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={personalInfo.email} onChange={handleEmailChange} disabled={!editable}/>
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" value={personalInfo.phone} onChange={handlePhoneChange} disabled={!editable}/>
      </div>
      {editable ? (
        <>
          <button onClick={handleSubmit}>Save Changes</button>
          <button onClick={handleReset}>Revert Changes</button>
        </>
      ): (
        
        <button onClick={handleEdit}>Edit</button>
        
      )}
      <h1>{personalInfo.fullName}</h1>
      <h2>{personalInfo.email}</h2>
      <h3>{personalInfo.phone}</h3>
    </div>
  )
}

export default PersonalInfo;