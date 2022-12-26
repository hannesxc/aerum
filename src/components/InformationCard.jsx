import { useEffect, useContext } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Map from './Map'
import Image from './Image.jsx'
import { GlobalContext } from '../contexts/GlobalContext'

function InformationCard() {

  const { data, setOwnLoc } = useContext(GlobalContext)
  console.log(data)

  return (
    <Card className='itemCard'>
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
              <div>
                <Image />
                <br />
                Humidity: {data.current.weather.hu}
              </div>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => setOwnLoc(true)}>Use My Location</Button>
              <Button size="small">More Details</Button>
            </CardActions>
          </div>
        </> : 
        <>
          <h2>Please enter a location.</h2>
          <CardActions>
            <Button size="small" onClick={() => setOwnLoc(true)}>Use My Location</Button>
          </CardActions> 
        </> }
    </Card>
  )
}

export default InformationCard