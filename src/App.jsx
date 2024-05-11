import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import './styles/style.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: ""
  })

  const handlePersonalInfoUpdate = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
  }

  return (
    <div id="container">
      <div className='editBox'>
      <PersonalInfo onChange={handlePersonalInfoUpdate}/>
      </div>

      <div>
        <h1>{personalInfo.fullName}</h1>
        <h2>{personalInfo.email}</h2>
        <h3>{personalInfo.phone}</h3>
      </div>
    </div>
  )
}

export default App
