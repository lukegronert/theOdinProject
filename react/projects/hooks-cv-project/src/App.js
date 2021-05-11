import { useState, useEffect } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import uniqid from 'uniqid';

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
    
    //Show edit general button
    const editGeneralBtn = document.querySelector('.editGeneral');
    editGeneralBtn.classList.toggle('noDisplay');
}

const editGeneral = () => {
    const generalForm = document.querySelector('.generalForm');
    generalForm.style.display = 'inline';
    setGeneral({
        userName: '',
        email: '',
        phone: '',
    })
}

const [education, setEducation] = useState([]);

const addEducation = (e) => {
    e.preventDefault();
    const universityInput = document.querySelector("input[name='university']");
    const degreeInput = document.querySelector("input[name='degree']");
    const educationDatesInput = document.querySelector("input[name='educationDates']");
    setEducation(education.concat({
        id: uniqid(),
        university: universityInput.value,
        degree: degreeInput.value,
        dates: educationDatesInput.value,
    }));
    universityInput.value = '';
    degreeInput.value = '';
    educationDatesInput.value = '';
}

const editEducation = (entryId) => {
    let universityInput = document.querySelector("input[name='university']")
    let degreeInput = document.querySelector("input[name='degree']")
    let educationDatesInput = document.querySelector("input[name='educationDates']")
    const selectedEntry = education.filter((entry) => {
        return entry.id === entryId;
    })[0];
    console.log(selectedEntry)
    universityInput.value = selectedEntry.university;
    degreeInput.value = selectedEntry.degree;
    educationDatesInput.value = selectedEntry.dates;

    setEducation(education.filter((entry) => {
        return entry.id !== entryId;
    }))
}

const deleteEducation = (entryid) => {
    setEducation(education.filter((entry) => entry.id !== entryid))
}

const [experience, setExperience] = useState([]);

const addExperience = (e) => {
    e.preventDefault();
    const companyInput = document.querySelector("input[name='company']");
    const positionInput = document.querySelector("input[name='position']");
    const descriptionInput = document.querySelector("textarea[name='description']");
    const experienceDatesInput = document.querySelector("input[name='experienceDates']");

    setExperience(experience.concat({
        id: uniqid(),
        company: companyInput.value,
        position: positionInput.value,
        description: descriptionInput.value,
        dates: experienceDatesInput.value,
    }));

    companyInput.value = '';
    positionInput.value = '';
    descriptionInput.value = '';
    experienceDatesInput.value = '';
    console.log(experience);
} 

const editExperience = (entryId) => {
    let companyInput = document.querySelector("input[name='company']")
    let positionInput = document.querySelector("input[name='position']")
    let descriptionInput = document.querySelector("textarea[name='description']")
    let experienceDatesInput = document.querySelector("input[name='experienceDates']")
    const selectedEntry = experience.filter((entry) => {
        return entry.id === entryId;
    })[0];
    console.log(selectedEntry)
    companyInput.value = selectedEntry.company;
    positionInput.value = selectedEntry.position;
    descriptionInput.value = selectedEntry.description;
    experienceDatesInput.value = selectedEntry.dates;

    setExperience(experience.filter((entry) => {
        return entry.id !== entryId;
    }))
}

const deleteExperience = (entryid) => {
    setExperience(experience.filter((entry) => entry.id !== entryid))
}

  return (
    <div className="App">
      <form className='generalForm'>
          <input type='text' name='userName' placeholder='Name' />
          <input type='text' name='email' placeholder='Email Address' />
          <input type='text' name='phone' placeholder='Phone Number' />
          <input type='submit' onClick={submitGeneral} />
      </form>
      <form>
          <input type='text' name='university' placeholder='University' />
          <input type='text' name='degree' placeholder='Degree Achieved' />
          <input type='text' name='educationDates' placeholder='Dates Attended' />
          <input type='submit' onClick={addEducation} />
      </form>
      <form>
          <input type='text' name='company' placeholder='Company' />
          <input type='text' name='position' placeholder='Position/Job Title' />
          <textarea type='text' name='description' placeholder='Description of Duties' />
          <input type='text' name='experienceDates' placeholder='Dates Employed' />
          <input type='submit' onClick={addExperience} />
      </form>
      <General info={general} />
      <button className='editGeneral noDisplay' onClick={editGeneral}>Edit</button>
      <Education info={education} onEdit={editEducation} onDelete={deleteEducation} />
      <Experience info={experience} onEdit={editExperience} onDelete={deleteExperience} />
    </div>
  );
}

export default App;
