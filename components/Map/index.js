import React, { useState } from 'react'
import { Map } from 'pigeon-maps'

import { Wrapper } from './styles'

const Maps = ({lat, lng}) => {
  const [center, setCenter] = useState([-8.83833, 13.2344])
  const [zoom, setZoom] = useState(10)
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
