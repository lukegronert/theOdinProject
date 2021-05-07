import { useState, useEffect } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const [general, setGeneral] = useState({
    userName: '',
    email: '',
    phone: '',
});

const submitGeneral = (e) => {
    e.preventDefault();
    const generalForm = document.querySelector('form');
    const userName = document.querySelector("input[name='userName'");
    const email = document.querySelector("input[name='email'");
    const phone = document.querySelector("input[name='phone'");
    setGeneral({
        userName: userName.value,
        email: email.value,
        phone: phone.value,
    });
    generalForm.style.display = 'none'
}

const [education, seteducation] = useState([]);

const addEducation = (e) => {
    e.preventDefault();
    const universityInput = document.querySelector("input[name='university']");
    const degreeInput = document.querySelector("input[name='degree']");
    const datesInput = document.querySelector("input[name='dates']");
    seteducation(education.concat({
        university: universityInput.value,
        degree: degreeInput.value,
        dates: datesInput.value,
    }));
    console.log(education);
}

const [experience, setExperience] = useState([]);

const addExperience = (e) => {
    e.preventDefault();
    const companyInput = document.querySelector("input[name='company']");
    const positionInput = document.querySelector("input[name='position']");
    const descriptionInput = document.querySelector("textarea[name='description']");
    const datesInput = document.querySelector("input[name='dates']");

    setExperience(experience.concat({
        company: companyInput.value,
        position: positionInput.value,
        description: descriptionInput.value,
        dates: datesInput.value,
    }));
    console.log(experience);
} 

  return (
    <div className="App">
      <form>
          <input type='text' name='userName' placeholder='Name' />
          <input type='text' name='email' placeholder='Email Address' />
          <input type='text' name='phone' placeholder='Phone Number' />
          <input type='submit' onClick={submitGeneral} />
      </form>
      <form>
          <input type='text' name='university' placeholder='University' />
          <input type='text' name='degree' placeholder='Degree Achieved' />
          <input type='text' name='dates' placeholder='Dates Attended' />
          <input type='submit' onClick={addEducation} />
      </form>
      <form>
          <input type='text' name='company' placeholder='Company' />
          <input type='text' name='position' placeholder='Position/Job Title' />
          <textarea type='text' name='description' placeholder='Description of Duties' />
          <input type='text' name='dates' placeholder='Dates Employed' />
          <input type='submit' onClick={addExperience} />
      </form>
      <General info={general} />
      <Education info={education} />
      <Experience info={experience} />
    </div>
  );
}

export default App;
