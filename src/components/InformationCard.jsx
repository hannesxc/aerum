import { useContext } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Map from './Map'
import Image from './Image.jsx'
import CustomSlider from './CustomSlider'
import { GlobalContext } from '../contexts/GlobalContext'

function InformationCard() {

  const { data, setOwnLoc } = useContext(GlobalContext)
  const units = {
    "p2": "Particulate Matter (PM2.5)",
    "p1": "Particulate Matter (PM10)",
    "o3": "Ozone (O3)",
    "n2": "Nitrogen Dioxide (NO2)", 
    "s2": "Sulfur Dioxide (SO2)", 
    "co": "Carbon Monoxide (CO)" 
  }

  const checkUnits = (unit) => {
    for (let key in units) {
      if (key === unit) {
        return units[key]
      }
    }
  }

  console.log(data)

  return (
    <Card className='itemCard flex'>
      { Object.keys(data).length ? 
        <>
          <div className='map'>
            <Map />
          </div>
          <div className='content'>
            <CardContent>
              <div className='heading'>
                <h2>{data.city}, {data.state}, {data.country}</h2>
                <h2>{data.current.weather.tp}&#8451;</h2>
              </div>
              <p>
                Air Quality Index (AQI): <CustomSlider props={ data.current.pollution.aqius } />
              </p>
              <div className='subhead'>
                <p>Humidity: {data.current.weather.hu}%</p>
                <p>Wind:&ensp;
                  {data.current.weather.ws} m/s
                  {data.current.weather.wd < 90 ? ' N' : data.current.weather.wd < 180 ? ' E' : data.current.weather.wd < 270 ? ' S' : ' W'}
                </p>
              </div>
              <div className='subhead'>
                <p>Polluting Agent: {checkUnits(data.current.pollution.mainus)}</p>
                <Image />
              </div>
            </CardContent>
            <CardActions>
              <Button size="medium" onClick={() => setOwnLoc(true)}>Use My Location</Button>
              <Button size="medium" href='https://iqair.com/'>More Details</Button>
            </CardActions>
          </div>
        </> : 
        <>
          <CardActions>
            <Button size="medium" onClick={() => setOwnLoc(true)}>Use My Location</Button>
          </CardActions> 
        </> }
    </Card>
  )
}

export default InformationCard