import { useContext } from 'react'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { MenuItem } from '@mui/material'
import { GlobalContext } from '../contexts/GlobalContext'

function Input() {

    const { countries, country, states, statee, cities, city } = useContext(GlobalContext)
    const primaryColor = '#f9ffd6'

    return (
        <>
            <FormControl fullWidth sx={{ margin: '10px' }}>
              <InputLabel variant='standard' sx={{ color: primaryColor }}>Country</InputLabel>
              <Select sx={{ 'svg': { color: 'white' }, '&:before': { borderColor: primaryColor }, '&:after': { borderColor: primaryColor }}} variant='standard' value={country} label="Country" onChange={ e => fetchStates(e.target.value)}>
                {countries.map( (el, idx) => {
                  return <MenuItem key={idx} value={el.country}>{el.country}</MenuItem>
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ margin: '10px' }}>
              <InputLabel variant='standard' sx={{ color: primaryColor }}>State</InputLabel>
              <Select sx={{ 'svg': { color: primaryColor }, '&:before': { borderColor: primaryColor }, '&:after': { borderColor: primaryColor }}} variant='standard' value={statee} label="State" onChange={ e => fetchCities(e.target.value)}>
                {states.map( (el, idx) => {
                  return <MenuItem key={idx} value={el.state}>{el.state}</MenuItem>
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ margin: '10px' }}>
              <InputLabel variant='standard' sx={{ color: primaryColor }}>City</InputLabel>
              <Select sx={{ 'svg': { color: primaryColor }, '&:before': { borderColor: primaryColor }, '&:after': { borderColor: primaryColor }}} variant='standard' value={city} label="City" onChange={ e => setCity(e.target.value)}>
                {cities.map( (el, idx) => {
                  return <MenuItem key={idx} value={el.city}>{el.city}</MenuItem>
                })}
              </Select>
            </FormControl>
        </>
    )
}

export default Input