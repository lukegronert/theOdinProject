import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import uniqid from 'uniqid';
import './App.css';

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
    
    // GENERAL INFO METHODS
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

  //EDUCATION INFO METHODS
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

  onDeleteEducation = (id) => {
    this.setState({
      educationList: this.state.educationList.filter((entry) => {
        return entry.id !== id
      })
    })
  }

  //EXPERIENCE INFO METHODS
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

  onDeleteExperience = (id) => {
    this.setState({
      experienceList: this.state.experienceList.filter((experience) => {
        return experience.id !== id
      })
    })
  }


  render() {
    const {generalInfo, educationList, experienceList } = this.state;
    return (
      <div>
      <h1 className='text-center'>CV</h1>
        <div className='grid grid-cols-5 shadow-lg border-2 rounded border-gray-400 border-solid p-2 w-11/12 divide-y container mx-auto'>
          <div className='col-start-1 col-end-3 border-r-2 border-black border-solid'>
          <h2>General</h2>
          <form onSubmit={this.onSubmitGeneral}>
              <div>
                <div>
                  <label>Name: </label>
                  <input type="text" name="fullName"
                    value={this.state.generalForm.fullName}
                    onChange={this.handleGeneralChange}></input>
                </div>
                <div>
                  <label>Email: </label>
                  <input type="text" name='email'
                    value={this.state.generalForm.email}
                    onChange={this.handleGeneralChange}></input>
                </div>
                <div>
                  <label>Phone Number: </label>
                  <input type="text" name='phone'
                    value={this.state.generalForm.phone}
                    onChange={this.handleGeneralChange}></input>
                </div>
                <div className='content-center'>
                  <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' 
                  type='submit'>Submit</button>
                </div>
              </div>
          </form>

          <h2>Education</h2>
          <form onSubmit={this.onSubmitEducation}>
          <div>
            <label>School Name: </label>
            <input type="text" name="school"
              value={this.state.education.school}
              onChange={this.handleEducationChange}></input>
          </div>
          <div>
            <label>Degree/Certificate: </label>
            <input type="text" name="degree"
              value={this.state.education.degree}
              onChange={this.handleEducationChange}></input>
          </div>
          <div>
            <label>Dates Attended: </label>
            <input type="text" name="date"
              value={this.state.education.date}
              onChange={this.handleEducationChange}></input>
          </div>
            <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
            type='submit'>Add Education</button>
          </form>

          <h2>Experience</h2>
          <form onSubmit={this.onSubmitExperience}>
          <div>
            <label>Company: </label>
            <input type="text" name="company"
              value={this.state.experience.company}
              onChange={this.handleExperienceChange}></input>
          </div>
          <div>
            <label>Position: </label>
            <input type="text" name="position"
              value={this.state.experience.position}
              onChange={this.handleExperienceChange}></input>
          </div>
          <div>
            <label>Description: </label>
            <input type="text" name="description"
              value={this.state.experience.description}
              onChange={this.handleExperienceChange}></input>
          </div>
          <div>
            <label>Start Date: </label>
            <input type="text" name="startDate"
              value={this.state.experience.startDate}
              onChange={this.handleExperienceChange}></input>
          </div>
          <div>
            <label>End Date: </label>
            <input type="text" name="endDate"
              value={this.state.experience.endDate}
              onChange={this.handleExperienceChange}></input>
          </div>
            <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
            type='submit'>Add Experience</button>
          </form>
        </div>
        <div className="col-start-3 col-end-6 border-none pl-2">
          <General info={generalInfo} onEdit={this.onEditGeneral} />
          <Education info={educationList} onEdit={this.onEditEducation} onDelete={this.onDeleteEducation} />
          <Experience info={experienceList} onEdit={this.onEditExperience} onDelete={this.onDeleteExperience} />
        </div>
          </div>
      </div>
    )
  }
}

