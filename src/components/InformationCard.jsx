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
              <div>
                <Image />
                <br />
                Humidity: {data.current.weather.hu}
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