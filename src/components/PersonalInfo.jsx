import { useState } from "react";

function PersonalInfo({onChange}) {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    bio: "",
  });
  //I felt it kind of dumb to automatically update the resume as you're typing, so I've implemented tempInfo so the resume is only updated when Submit is pressed
  const [tempInfo, setTempInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    bio: "",
  })
  
  const[editable, setEditable] = useState(false);
  
  //Lets you type in the textboxes
  const handleChange = (e) => {
    const {name, value} = e.target;
    setTempInfo((prevInfo) => ({...prevInfo, [name]: value}))
  }
  //Makes the text boxes editable and pulls in the current values for personalInfo
  const handleEdit = () => {
    setEditable(true);
    setTempInfo({...personalInfo});
  }
  //Overwrites personalInfo with temp values and removes editability for text boxes
  const handleSubmit = () => {
    setPersonalInfo(tempInfo);
    onChange(tempInfo);
    setEditable(false);
  }
  //Sets text box values back to last submitted (i.e. current personalInfo)
  const handleCancel = () => {
    setTempInfo({...personalInfo});
    setEditable(false);
  }
  
  return(
    <div>
      <h2>Personal Information</h2>
      <div className="form-item">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={tempInfo.fullName} onChange={handleChange} disabled={!editable}/>
      </div>
      <div className="form-item">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={tempInfo.email} onChange={handleChange} disabled={!editable}/>
      </div>
      <div className="form-item">
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" value={tempInfo.phone} onChange={handleChange} disabled={!editable}/>
      </div>
      <div className="form-item">
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio" rows="4" cols="30" value={tempInfo.bio} onChange={handleChange} disabled={!editable}></textarea>
      </div>
      {editable ? (
        <>
          <button className="btn" id="btnSubmit" onClick={handleSubmit}>Save</button>
          <button className="btn" id="btnCancel" onClick={handleCancel}>Cancel</button>
        </>
      ): (
        <button className="btn" id="btnEdit" onClick={handleEdit}>Edit</button>
      )}
    </div>
  )
}

export default PersonalInfo;