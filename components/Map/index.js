import React, { useEffect, useState } from 'react'
import { Map, Marker } from 'pigeon-maps'

import { Wrapper } from './styles'

const Maps = ({ lat, lng }) => {
  const [center, setCenter] = useState([lat, lng])
  const [zoom, setZoom] = useState(13)
  const [hue, setHue] = useState(0)

  const color = `hsl(${hue % 360}deg 39% 70%)`

  useEffect(() => {
    setCenter([lat, lng])
  }, [lng, lat])

  return (
    <Wrapper>
      <Map
        center={center}
        defaultCenter={center}
        zoom={zoom}
        onBoundsChanged={({ center, zoom }) => {
          setCenter(center)
          setZoom(zoom)
        }}
      >
        <Marker
          anchor={center}
          color={color}
          onClick={() => setHue(hue + 20)}
        />
      </Map>
    </Wrapper>
  )
}

export default Maps
