import { useState } from "react";

function Education({onChange}) {
  const [schoolInfo, setSchoolInfo] = useState({
    schoolName: "",
    yearStart: "",
    yearEnd: "",
    course: "",
    location: ""
  })
  const [tempInfo, setTempInfo] = useState({
    schoolName: "",
    yearStart: "",
    yearEnd: "",
    course: "",
    location: ""
  })

  const[editable, setEditable] = useState(false);

  //Lets you type in the textboxes
  const handleChange = (e) => {
    const {name, value} = e.target;
    setTempInfo((prevInfo) => ({...prevInfo, [name]: value}))
  }
  //Makes the text boxes editable and pulls in the current values for schoolInfo
  const handleEdit = () => {
    setEditable(true);
    setTempInfo({...schoolInfo});
  }
  //Overwrites schoolInfo with temp values and removes editability for text boxes
  const handleSubmit = () => {
    setSchoolInfo(tempInfo);
    onChange(tempInfo);
    setEditable(false);
  }
  //Sets text box values back to last submitted (i.e. current schoolInfo)
  const handleCancel = () => {
    setTempInfo({...schoolInfo});
    setEditable(false);
  }

  return(
    <div>
      <h2>Education</h2>
      <div>
        <label htmlFor="schoolName">School Name:</label>
        <input type="text" id="schoolName" name="schoolName" value={tempInfo.schoolName} onChange={handleChange} disabled={!editable}/>
      </div>
      <div>
        <label htmlFor="yearStart">Year Started:</label>
        <input type="text" id="yearStart" name="yearStart" value={tempInfo.yearStart} onChange={handleChange} disabled={!editable}/>
      </div>
      <div>
        <label htmlFor="yearEnd">Year Ended:</label>
        <input type="text" id="yearEnd" name="yearEnd" value={tempInfo.yearEnd} onChange={handleChange} disabled={!editable}/>
      </div>
      <div>
        <label htmlFor="course">Course:</label>
        <input type="text" id="course" name="course" value={tempInfo.course} onChange={handleChange} disabled={!editable}/>
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={tempInfo.location} onChange={handleChange} disabled={!editable}/>
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

export default Education