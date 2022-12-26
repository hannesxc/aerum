import GoogleMapReact from 'google-map-react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const Pointer = () => <div className='pointer'></div>

function Map(){

  const { data } = useContext(GlobalContext)
  const mapsAPI = import.meta.env.VITE_MAPS_API_KEY
  const coords = {
    center: {
      lat: data.location.coordinates[1],
      lng: data.location.coordinates[0]
    },
    zoom: 11
  }

  return (
    <GoogleMapReact bootstrapURLKeys={{ key: mapsAPI }} defaultCenter={{ lat: 0, lng: 0 }} center={coords.center} defaultZoom={coords.zoom}>
        <Pointer lat={data.location.coordinates[1]} lng={data.location.coordinates[0]} />
    </GoogleMapReact>
  )
}

export default Map