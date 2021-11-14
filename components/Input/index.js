import React from 'react'

import { Wrapper } from './styles'

import { VscChevronRight } from 'react-icons/vsc'

const Input = ({ setIpAdress, handleSearchIp }) => {
  return (
    <>
      <Wrapper>
        <form onSubmit={handleSearchIp}>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            className="searchInput"
            placeholder="Pesquisar por um endereço IP"
            onChange={e => setIpAdress(e.target.value)}
          />
          <button type="submit" className="searchBtn">
            <VscChevronRight />
          </button>
        </form>
      </Wrapper>
    </>
  )
}

export default Input
