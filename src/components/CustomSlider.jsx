import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useState, useEffect } from 'react'

const pollution = [
  {
    value: 0,
    label: 'Good'
  },
  {
    value: 40,
    label: 'Moderate'
  },
  {
    value: 100,
    label: 'Unhealthy'
  },
  {
    value: 180,
    label: 'Very Unhealthy'
  },
  {
    value: 300,
    label: 'Hazardous'
  },
]

function CustomSlider({ aqi }) {

  const [ dangerColor, setDangerColor ] = useState('')

  useEffect(() => {
    if (aqi < 40) {
      setDangerColor('#00c853')
    } else if (aqi < 100) {
      setDangerColor('#ffd600')
    } else if (aqi < 180) {
      setDangerColor(`#ff6d00`)
    } else if (aqi < 300) {
      setDangerColor('#616161')
    } else {
      setDangerColor(`#ff1744`)
    }
  }, [aqi])

  return (
    <Box sx={{ width: '95%', minWidth: 700, margin: '30px' }}>
      <Slider
        sx={{ '.Mui-disabled, .MuiSlider-track': { color: dangerColor }}}
        value={aqi}
        step={50}
        max={500}
        marks={pollution}
        valueLabelDisplay="on"
        disabled={true}
      />
    </Box>
  )
}

export default CustomSlider