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

function CustomSlider(props) {

  const [ dangerColor, setDangerColor ] = useState('')

  useEffect(() => {
    if (props.props < 40) {
      setDangerColor('#00c853')
    } else if (props.props < 100) {
      setDangerColor('#ffd600')
    } else if (props.props < 180) {
      setDangerColor(`#ff6d00`)
    } else if (props.props < 300) {
      setDangerColor('#616161')
    } else {
      setDangerColor(`#ff1744`)
    }
  }, [])

  return (
    <Box sx={{ width: 700, margin: '30px' }}>
      <Slider
        sx={{ '.Mui-disabled, .MuiSlider-track': { color: dangerColor } }}
        defaultValue={props.props}
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