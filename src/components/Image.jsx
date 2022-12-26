import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import ClearSkyDay from '../assets/icons/01d.png'
import ClearSkyNight from '../assets/icons/01n.png'
import FewCloudsDay from '../assets/icons/02d.png'
import FewCloudsNight from '../assets/icons/02n.png'
import ScatteredCloudsDay from '../assets/icons/03d.png'
import ScatteredCloudsNight from '../assets/icons/03d.png'
import BrokenCloudsDay from '../assets/icons/04d.png'
import BrokenCloudsNight from '../assets/icons/04d.png'
import ShowerRainDay from '../assets/icons/09d.png'
import ShowerRainNight from '../assets/icons/09d.png'
import RainDay from '../assets/icons/10d.png'
import RainNight from '../assets/icons/10n.png'
import ThunderstormDay from '../assets/icons/11d.png'
import ThunderstormNight from '../assets/icons/11d.png'
import SnowDay from '../assets/icons/13d.png'
import SnowNight from '../assets/icons/13d.png'
import MistDay from '../assets/icons/50d.png'
import MistNight from '../assets/icons/50d.png'


function Image() {

    const { data } = useContext(GlobalContext)
    const icons = [
        {
            id: '01d',
            image: ClearSkyDay
        }, {
            id: '01n',
            image: ClearSkyNight
        }, {
            id: '02d',
            image: FewCloudsDay
        }, {
            id: '02n',
            image: FewCloudsNight
        }, {
            id: '03d',
            image: ScatteredCloudsDay
        }, {
            id: '03n',
            image: ScatteredCloudsNight
        }, {
            id: '04d',
            image: BrokenCloudsDay
        }, {
            id: '04n',
            image: BrokenCloudsNight
        }, {
            id: '09d',
            image: ShowerRainDay
        }, {
            id: '09n',
            image: ShowerRainNight
        }, {
            id: '10d',
            image: RainDay
        }, {
            id: '10n',
            image: RainNight
        }, {
            id: '11d',
            image: ThunderstormDay
        }, {
            id: '11n',
            image: ThunderstormNight
        }, {
            id: '13d',
            image: SnowDay
        }, {
            id: '13n',
            image: SnowNight
        }, {
            id: '50d',
            image: MistDay
        }, {
            id: '50n',
            image: MistNight
        }
    ]
  
    return (
        <>
            { icons.map( elem => {
                    if (elem.id === data.current.weather.ic) {
                        return <img key={elem.id} className='weatherIcon' src={elem.image} alt='weather icon'/>
                    }
            }) }
        </>
    )
}

export default Image