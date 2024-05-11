import { useState } from "react";

function WorkInfo({onChange}) {
  const [workInfo, setWorkInfo] = useState({
    company: "",
    yearStart: "",
    yearEnd: "",
    position: "",
    location: "",
    jobDesc: "",
  })
  const [tempInfo, setTempInfo] = useState({
    company: "",
    yearStart: "",
    yearEnd: "",
    position: "",
    location: "",
    jobDesc: "",
  })

  const[editable, setEditable] = useState(false);

  //Lets you type in the textboxes
  const handleChange = (e) => {
    const {name, value} = e.target;
    setTempInfo((prevInfo) => ({...prevInfo, [name]: value}))
  }
  //Makes the text boxes editable and pulls in the current values for workInfo
  const handleEdit = () => {
    setEditable(true);
    setTempInfo({...workInfo});
  }
  //Overwrites workInfo with temp values and removes editability for text boxes
  const handleSubmit = () => {
    setWorkInfo(tempInfo);
    onChange(tempInfo);
    setEditable(false);
  }
  //Sets text box values back to last submitted (i.e. current workInfo)
  const handleCancel = () => {
    setTempInfo({...workInfo});
    setEditable(false);
  }

  return(
    <div>
      <h2>Work Experience</h2>
      <div>
        <label htmlFor="company">Company Name:</label>
        <input type="text" id="company" name="company" value={tempInfo.company} onChange={handleChange} disabled={!editable}/>
      </div>
      <div>
        <label htmlFor="position">Position:</label>
        <input type="text" id="position" name="position" value={tempInfo.position} onChange={handleChange} disabled={!editable}/>
      </div><div>
        <label htmlFor="yearStart">Year Started:</label>
        <input type="text" id="yearStart" name="yearStart" value={tempInfo.yearStart} onChange={handleChange} disabled={!editable}/>
      </div>
      <div>
        <label htmlFor="yearEnd">Year Ended:</label>
        <input type="text" id="yearEnd" name="yearEnd" value={tempInfo.yearEnd} onChange={handleChange} disabled={!editable}/>
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={tempInfo.location} onChange={handleChange} disabled={!editable}/>
      </div>
      <div>
        <label htmlFor="jobDesc">Description:</label>
        <textarea id="jobDesc" name="jobDesc" rows="4" cols="30" value={tempInfo.jobDesc} onChange={handleChange} disabled={!editable}></textarea>
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

export default WorkInfo;
//:)