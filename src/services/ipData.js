import React, { useState, useEffect } from 'react'
import NProgress from 'nprogress'

import api from './api'

const ipData = () => {
  const [ip, setIp] = useState('127.0.0.1')
  const [city, setCity] = useState('Luanda')
  const [country, setCountry] = useState('Angola')
  const [region, setRegion] = useState('Luanda')
  const [lat, setLat] = useState(-8.83833)
  const [lng, setLng] = useState(13.2344)
  const [asn, setAsn] = useState('Unitel')
  const [timezone, setTimezone] = useState('UTC+1')
  const [emoji_flag, setEmojiFlag] = useState()

  const [ipAdress, setIpAdress] = useState()

  useEffect(async () => {
    NProgress.start()
    const data = await api
      .get(`?api-key=${process.env.NEXT_PUBLIC_API_IPDATA_KEY}`)
      .then(response => response.data)
      .catch(error => alert(error))

    if (data) {
      setIp(data.ip)
      setCity(data.city)
      setRegion(data.region)
      setCountry(data.country_name)
      setLat(data.latitude)
      setLng(data.longitude)
      setEmojiFlag(data.emoji_flag)
      setAsn(data.asn.name)
      setTimezone(data.time_zone.offset)
    }
    NProgress.done()
  }, [])

  const handleSearchIp = async e => {
    NProgress.start()
    e.preventDefault()
    const data = await api
      .get(`${ipAdress}?api-key=${process.env.NEXT_PUBLIC_API_IPDATA_KEY}`)
      .then(response => response.data)
      .catch(error => alert(error))

    if (data) {
      setIp(data.ip)
      setCity(data.city)
      setRegion(data.region)
      setCountry(data.country_name)
      setLat(data.latitude)
      setLng(data.longitude)
      setEmojiFlag(data.emoji_flag)
      setAsn(data.asn.name)
      setTimezone(data.time_zone.offset)
    }
    NProgress.done()
  }

  return {
    ip,
    country,
    region,
    city,
    lat,
    lng,
    asn,
    timezone,
    emoji_flag,
    setIpAdress,
    handleSearchIp
  }
}

export default ipData
