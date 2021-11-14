import React from 'react'

import { Map } from './../index'

import { WrapperMain, Wrapper } from './styles'

import world from './../../src/assets/img/world1.svg'

const Dashboard = ({ ip, country, region, city, lat, lng, asn, timezone, emoji_flag }) => {
  return (
    <>
      <WrapperMain>
        <Wrapper>
          <section className="left-side">
            <div className="top">
              <p>Qual é o seu endereço IP? </p>
              <h1 className="ip">{ip}</h1>

              <div className="moreInformation">
                <h2 className="irrelevante">
                  IPv4: <span>{ip}</span>
                </h2>
                <h2>
                  País: <span>{country} {emoji_flag}</span>
                </h2>
                <h2>
                  Província: <span>{region}</span>
                </h2>
                <h2>
                  Cidade: <span>{city}</span>
                </h2>
                <h2>
                  timezone: <span>{timezone}</span>
                </h2>
                <h2 className="irrelevante">
                  Latitude: <span>{lat}</span>
                </h2>
                <h2 className="irrelevante">
                  Longitude: <span>{lng}</span>
                </h2>
                <h2 className="irrelevante">
                  Fornecedor de internet: <span>{asn}</span>
                </h2>
              </div>
            </div>
          </section>

          <section className="right-side">
            <div className="map">
              <Map lat={lat} lng={lng} />
            </div>
          </section>
        </Wrapper>
      </WrapperMain>
    </>
  )
}

export default Dashboard
