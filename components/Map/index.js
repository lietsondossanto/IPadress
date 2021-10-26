import React, { useEffect, useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

import { Wrapper } from './styles'

const MapaWrapper = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
    />
  )
}

const MapWrapped = withScriptjs(withGoogleMap(MapaWrapper))

const Map = () => {
  return (
    <Wrapper>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAGhziIAG-rIzlTWlORrwZaYLLFYF2jW_Y`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </Wrapper>
  )
}

export default Map
