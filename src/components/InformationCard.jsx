import { useContext } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Map from './Map'
import { GlobalContext } from '../contexts/GlobalContext'

function InformationCard() {

  const { data, ownLoc, onSearch, setOwnLoc } = useContext(GlobalContext)
  console.log(ownLoc)

  return (
    <Card sx={{ maxWidth: 345 }}>
      { Object.keys(data).length ? 
        <>
          <Map />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.city}, {data.state}, {data.country}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Current: {data.current.weather.tp}
              <br />
              Humidity: {data.current.weather.hu}
            </Typography>
          </CardContent>
        </> :
          <Typography variant='body2' color="text.secondary">
            Please enter a location
          </Typography> }
        <CardActions>
          <Button size="small" onClick={() => setOwnLoc(true)}>Use My Location</Button>
          <Button size="small">More Details</Button>
        </CardActions>
    </Card>
  )
}

export default InformationCard