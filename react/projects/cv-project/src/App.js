import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
        generalForm: {
          fullName: '',
          email: '',
          phone: '',
        },
        generalInfo: {
          fullName: '',
          email: '',
          phone: '',
        },
        education: {
          school: '',
          degree: '',
          date: '',
        },
        educationList: [],
        experience: {
          company: '',
          position: '',
          tasks: '',
          startDate: '',
          endDate: '',
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
    console.log(this.state)
  }


  onSubmitGeneral = (e) => {
    e.preventDefault();
    this.setState({
        generalInfo: {
          ...this.state.generalForm
        },
        generalForm: {
          fullName: '',
          email: '',
          phone: '',
        }
    })
  }

  render() {
    const {generalInfo, generalForm } = this.state;
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
            <h1>Education</h1>
        </form>
        <General info={generalInfo} />
      </div>
    )
  }
}

