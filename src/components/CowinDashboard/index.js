// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    vaccinationData: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getFormatedData = data => ({
    vaccineDate: data.vaccine_date,
    dose1: data.dose_1,
    dose2: data.dose_2,
    age: data.age,
    count: data.count,
    gender: data.gender,
  })

  getVaccinationData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = `https://apis.ccbp.in/covid-vaccination-data`
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      const updateData = {
        last7DaysVaccination: fetchedData.last7DaysVaccination.map(eachItem =>
          this.getFormatedData(eachItem),
        ),
        vaccinationByAge: fetchedData.vaccinationByAge.map(eachItem =>
          this.getFormatedData(eachItem),
        ),
        vaccinationByGender: fetchedData.vaccinationByGender.map(eachItem =>
          this.getFormatedData(eachItem),
        ),
      }
      this.setState({
        vaccinationData: updateData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVaccinationStats = () => {
    const {vaccinationData} = this.state

    return (
      <>
        <VaccinationCoverage data={vaccinationData.last7DaysVaccination} />
        <VaccinationByGender data={vaccinationData.vaccinationByGender} />
        <VaccinationByAge data={vaccinationData.vaccinationByAge} />
      </>
    )
  }

  renderFailureView = () => (
    <div className="failure-view">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="failure-text">Something went wrong</h1>
    </div>
  )

  renderLoadingView = () => (
    <div className="loading-view" data-testid="loader">
      <Loader color="#ffffff" height={80} type="ThreeDots" width={80} />
    </div>
  )

  renderViewsBasedOnAPIStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVaccinationStats()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-cont">
        <div className="logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <p className="para">Co-WIN</p>
        </div>
        <h1 className="main-heading">CoWIN vaccination in India</h1>
        {this.renderViewsBasedOnAPIStatus()}
      </div>
    )
  }
}

export default CowinDashboard
