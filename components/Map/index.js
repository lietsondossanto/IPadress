import React, { useEffect, useState } from 'react'
import { Map } from 'pigeon-maps'

import { Wrapper } from './styles'

const Maps = ({lat, lng}) => {
  const [center, setCenter] = useState([lat, lng])
  const [zoom, setZoom] = useState(11)

  useEffect(function (){
    setCenter([lat, lng])
  }, [lng, lat])

  return (
    <Wrapper>
      <Map
        center={center}
        zoom={zoom}
        onBoundsChanged={({ center, zoom }) => {
          setCenter(center)
          setZoom(zoom)
        }}
      />
    </Wrapper>
  )
}

export default Maps
