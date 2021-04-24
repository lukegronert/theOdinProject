import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import uniqid from 'uniqid';

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
        generalForm: {
          fullName: '',
          email: '',
          phone: '',
          id: 1,
        },
        generalInfo: [],
        education: {
          school: '',
          degree: '',
          date: '',
          id: uniqid(),
        },
        educationList: [],
        experience: {
          company: '',
          position: '',
          description: '',
          startDate: '',
          endDate: '',
          id: uniqid(),
        },
        experienceList: [],
      }
    }
    
    handleGeneralChange = (e) => {
      this.setState({
        generalForm: {
        ...this.state.generalForm,
        [e.target.name]: e.target.value,
      }
    })
  }

  
  onSubmitGeneral = (e) => {
    e.preventDefault();
    this.setState({
      generalInfo: this.state.generalInfo.concat(this.state.generalForm),
      generalForm: {
          fullName: '',
          email: '',
          phone: '',
          id: 1,
        }
      })
  }
  
  onEditGeneral = () => {
    this.setState({
      generalForm: {
        ...this.state.generalInfo[0]
      },
      generalInfo: this.state.generalInfo.filter((general) => {
        return general.id !== 1;
      })
    })
    console.log(this.state.generalInfo)
  }

  handleEducationChange = (e) => {
    this.setState({
      education: {
        ...this.state.education,
        [e.target.name]: e.target.value,
      }
    })
  }
  
  
  onSubmitEducation = (e) => {
    e.preventDefault();
    this.setState({
        educationList: this.state.educationList.concat(this.state.education),
        education: {
          school: '',
          degree: '',
          date: '',
          id: uniqid(),
        }
    })
  }

  onEditEducation = (id) => {
    this.setState({
      education: {
        ...this.state.educationList.filter((education) => {
          return education.id === id
        })[0]
      },
      educationList: this.state.educationList.filter((entry) => {
        return entry.id !== id
      })
    })
  }

  handleExperienceChange = (e) => {
    this.setState({
      experience: {
        ...this.state.experience,
        [e.target.name]: e.target.value,
      }
    })
  }


  onSubmitExperience = (e) => {
    e.preventDefault();
    this.setState({
        experienceList: this.state.experienceList.concat(this.state.experience),
        experience: {
          company: '',
          position: '',
          description: '',
          startDate: '',
          endDate: '',
          id: uniqid(),
        }
    })
  }

  onEditExperience = (id) => {
    this.setState({
      experience: {
        ...this.state.experienceList.filter((experience) => {
          return experience.id === id
        })[0]
      },
      experienceList: this.state.experienceList.filter((experience) => {
        return experience.id !== id
      })
    })
  }


  render() {
    const {generalInfo, educationList, experienceList } = this.state;
    return (
      <div>
        <h1>CV</h1>
        <form onSubmit={this.onSubmitGeneral}>
            <label>Name: </label>
            <input type="text" name="fullName"
              value={this.state.generalForm.fullName}
              onChange={this.handleGeneralChange}></input>
            <label>Email: </label>
            <input type="text" name='email'
              value={this.state.generalForm.email}
              onChange={this.handleGeneralChange}></input>
            <label>Phone Number: </label>
            <input type="text" name='phone'
              value={this.state.generalForm.phone}
              onChange={this.handleGeneralChange}></input>
            <button type='submit'>Submit</button>
        </form>

        <form onSubmit={this.onSubmitEducation}>
          <label>School Name: </label>
          <input type="text" name="school"
            value={this.state.education.school}
            onChange={this.handleEducationChange}></input>
          <label>Degree/Certificate: </label>
          <input type="text" name="degree"
            value={this.state.education.degree}
            onChange={this.handleEducationChange}></input>
          <label>Dates Attended: </label>
          <input type="text" name="date"
            value={this.state.education.date}
            onChange={this.handleEducationChange}></input>
          <button type='submit'>Add Education</button>
        </form>

        <form onSubmit={this.onSubmitExperience}>
          <label>Company: </label>
          <input type="text" name="company"
            value={this.state.experience.company}
            onChange={this.handleExperienceChange}></input>
          <label>Position: </label>
          <input type="text" name="position"
            value={this.state.experience.position}
            onChange={this.handleExperienceChange}></input>
          <label>Description: </label>
          <input type="text" name="description"
            value={this.state.experience.description}
            onChange={this.handleExperienceChange}></input>
          <label>Start Date: </label>
          <input type="text" name="startDate"
            value={this.state.experience.startDate}
            onChange={this.handleExperienceChange}></input>
          <label>End Date: </label>
          <input type="text" name="endDate"
            value={this.state.experience.endDate}
            onChange={this.handleExperienceChange}></input>
          <button type='submit'>Add Experience</button>
        </form>

        <General info={generalInfo} onEdit={this.onEditGeneral} />
        <Education info={educationList} onEdit={this.onEditEducation} />
        <Experience info={experienceList} onEdit={this.onEditExperience} />
      </div>
    )
  }
}

