import { useState, useEffect } from 'react'
import './App.css'
import Aerum from './assets/aerum.png'
import InformationCard from './components/InformationCard'
import Footer from './components/Footer'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import { GlobalContext } from './contexts/GlobalContext'
import Input from './components/Input'

function App() {

  const apiKey = import.meta.env.VITE_IQAIR_API_KEY
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }
  const [ ownLoc, setOwnLoc ] = useState(false)
  const [ data, setData ] = useState([])
  const [ country, setCountry ] = useState('')
  const [ statee, setStatee ] = useState('')
  const [ city, setCity ] = useState('')
  const [ countries, setCountries ] = useState([])
  const [ states, setStates ] = useState([])
  const [ cities, setCities ] = useState([])

  useEffect(() => {
    fetch(`https://api.airvisual.com/v2/countries?key=${apiKey}`, requestOptions).then(res => res.json()).then(res => {
      if (res.status === 'success') {
        setCountries(res.data)
      } else {
        alert(`An error occured, please try again. Reason: ${res.data.message}`)
      }
    }).catch(err => {})
  }, [])

  const fetchStates = (country) => {
    setCountry(country)
    fetch(`https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`, requestOptions).then(res => res.json()).then(res => {
      if (res.status === 'success') {
        setStates(res.data)
      } else {
        alert(`An error occured, please try again. Reason: ${res.data.message}`)
      }
    }).catch(err => {})
  }

  const fetchCities = (statee) => {
    setStatee(statee)
    fetch(`https://api.airvisual.com/v2/cities?state=${statee}&country=${country}&key=${apiKey}`).then(res => res.json()).then(res => {
      if (res.status === 'success') {
        setCities(res.data)
      } else {
        alert(`An error occured, please try again. Reason: ${res.data.message}`)
      }
    }).catch(err => {})
  }

  const clearInputs = () => {
    setCountry('')
    setStatee('')
    setStates([])
    setCity('')
    setCities([])
  }

  const onSearch = () => {
    if (ownLoc) {
      fetch(`https://api.airvisual.com/v2/nearest_city?key=${apiKey}`, requestOptions).then(res => res.json()).then(res => setData(res.data)).catch(err => console.log(err))
    } else if (country && statee && city) {
      fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${statee}&country=${country}&key=${apiKey}`, requestOptions).then(res => res.json()).then(res => setData(res.data)).catch(err => console.log(err))
      clearInputs()
    } else {
      alert("Please fill the remaining fields!")
    }
  }

  if (ownLoc) {
    onSearch()
    setOwnLoc(false)
  }

  return (
    <GlobalContext.Provider value={{ data, country, countries, cities, city, states, statee, setOwnLoc }}>
      <div className='main'>
        <div className='header flex'>
          <a href='/aerum'><img src={Aerum} alt='header image' /></a>
          <div className='inputBox'>
            <Input />
            <TravelExploreIcon className='icon' sx={{ fontSize: 40 }} onClick={onSearch} />
          </div>
        </div>
        <div className='card flex'>
          <InformationCard />
        </div>
        <Footer />
      </div>
    </GlobalContext.Provider>
  )
}

export default App
