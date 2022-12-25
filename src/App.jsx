import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import InformationCard from './components/InformationCard'
import Footer from './components/Footer'
import TextField from '@mui/material/TextField'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import { GlobalContext } from './contexts/GlobalContext'

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
    fetch(`http://api.airvisual.com/v2/countries?key=${apiKey}`, requestOptions).then(res => res.json()).then(res => {
      setCountries(res.data)
    }).catch(err => console.log(err))
  }, [])

  const fetchStates = (country) => {
    setCountry(country)
    fetch(`http://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`, requestOptions).then(res => res.json()).then(res => {
      setStates(res.data)
    }).catch(err => console.log(err))
  }

  const fetchCities = (statee) => {
    setStatee(statee)
    fetch(`http://api.airvisual.com/v2/cities?state=${statee}&country=${country}&key=${apiKey}`).then(res => res.json()).then(res => {
      setCities(res.data)
    }).catch(err => console.log(err))
  }

  const onSearch = () => {
    if (ownLoc) {
      fetch(`http://api.airvisual.com/v2/nearest_city?key=${apiKey}`, requestOptions).then(res => res.json()).then(res => setData(res.data)).catch(err => console.log(err))
    } else if (country && statee && city) {
      console.log("Done!")
      fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${statee}&country=${country}&key=${apiKey}`, requestOptions).then(res => res.json()).then(res => setData(res.data)).catch(err => console.log(err))
    } else {
      alert("Please fill the remaining fields!")
    }
  }

  if (ownLoc) {
    onSearch()
    setOwnLoc(false)
  }

  return (
    <GlobalContext.Provider value={{ data, ownLoc, onSearch, setOwnLoc }}>
      <div className='main'>
        <Header />
        <div className='inputBox'>
          <Autocomplete className='selectBox' disableClearable={true} options={countries} autoHighlight getOptionLabel={(option) => option.country} renderOption={(props, option) => (
            <Box component="li" {...props}>
              {option.country}
            </Box>
            )} renderInput={(params) => (
              <TextField {...params} label="Country" />
            )} onChange={(event, value) => fetchStates(value.country)}
          />
          <Autocomplete className='selectBox' disableClearable={true} options={states} autoHighlight getOptionLabel={(option) => option.state} renderOption={(props, option) => (
            <Box component="li" {...props}>
              {option.state}
            </Box>
            )} renderInput={(params) => (
              <TextField {...params} label="State" />
            )} onChange={(event, value) => fetchCities(value.state)}
          />
          <Autocomplete className='selectBox' disableClearable={true} options={cities} autoHighlight getOptionLabel={(option) => option.city} renderOption={(props, option) => (
            <Box component="li" {...props}>
              {option.city}
            </Box>
            )} renderInput={(params) => (
              <TextField {...params} label="City" />
            )} onChange={(event, value) => setCity(value.city)}
          />
          <TravelExploreIcon className='icon' sx={{ fontSize: 40 }} onClick={onSearch} />
        </div>
        <InformationCard />
        <Footer />
      </div>
    </GlobalContext.Provider>
  )
}

export default App
