import React, { useState, useEffect } from 'react'
import NProgress from 'nprogress'
import axios from 'axios'

import { Map } from './../index'
import api from './../../src/services/api'

import { WrapperMain, Wrapper, SearchIp } from './styles'

import { VscChevronRight } from 'react-icons/vsc'

const Dashboard = () => {
  const [ip, setIp] = useState('127.0.0.1')
  const [country, setCountry] = useState('Angola')
  const [region, setRegion] = useState('Luanda')
  const [city, setCity] = useState('Luanda')
  const [lat, setLat] = useState(-8.83833)
  const [lng, setLng] = useState(13.2344)
  const [isp, setIsp] = useState('Unitel')
  const [proxy, setProxy] = useState('false')

  const [ipAdress, setIpAdress] = useState()

  const url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.NEXT_PUBLIC_API_IPIFY_KEY}`

  useEffect(async () => {
    NProgress.start()
    const data = await api
      .get(``)
      .then(response => response.data)
      .catch(error => alert(error))

    if (data) {
      setIp(data.ip)
      setCountry(data.location.country)
      setRegion(data.location.region)
      setCity(data.location.city)
      setLat(data.location.lat)
      setLng(data.location.lng)
      setIsp(data.isp)
      setProxy(data.proxy.proxy)
    }
    NProgress.done()
  }, [])

  const handleSearchIp = async () => {
    NProgress.start()
    const data = await axios
      .get(`${url}&ipAddress=${ipAdress}`)
      .then(response => response.data)
      .catch(error => alert(error))

    if (data) {
      setIp(data.ip)
      setCountry(data.location.country)
      setRegion(data.location.region)
      setCity(data.location.city)
      setLat(data.location.lat)
      setLng(data.location.lng)
      setIsp(data.isp)
      setProxy(data.proxy.proxy)
    }
    NProgress.done()
  }

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
                  País: <span>{country}</span>
                </h2>
                <h2>
                  Província: <span>{region}</span>
                </h2>
                <h2>
                  Cidade: <span>{city}</span>
                </h2>
                <h2 className="irrelevante">
                  Latitude: <span>{lat}</span>
                </h2>
                <h2 className="irrelevante">
                  Longitude: <span>{lng}</span>
                </h2>
                <h2 className="irrelevante">
                  Fornecedor de internet: <span>{isp}</span>
                </h2>
                <h2 className="irrelevante">
                  Proxy: <span>{proxy}</span>
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

        <SearchIp>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            className="searchInput"
            placeholder="Pesquisar por um endereço IP"
            onChange={e => {
              setIpAdress(e.target.value)
            }}
          />
          <button
            onClick={() => handleSearchIp()}
            type="submit"
            className="searchBtn"
          >
            <VscChevronRight />
          </button>
        </SearchIp>
      </WrapperMain>
    </>
  )
}

export default Dashboard
