import React from 'react'
import Link from 'next/link'

import { Menu, Wrapper, Table } from './../styles/page/alldata'

import { Input } from './../../components/index'

import { AiOutlineArrowLeft } from 'react-icons/ai'

function alldata() {
  return (
    <>

      <Menu>
        <nav>
          <Link href="/">
            <a target="_self"><AiOutlineArrowLeft/></a>
          </Link>

          <h1>IPadress</h1>
        </nav>
      </Menu>

      <Wrapper>
        <header>
          <h2>Qual é o seu endreço IP?</h2>
          <h1>127.0.0.1</h1>
        </header>

        <Input />

        <Table>
          <table>
            <thead>
              <div>
                <h2>Geolocation Data</h2>
              </div>
            </thead>

            <tbody>
              <tr>
                <th>
                  <span>IP</span>
                  <p>127.0.0.1</p>
                </th>
                <th>
                  <span>ASN</span>
                  <p>AS37119</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>EUROPEAN UNION COUNTRY</span>
                  <p>false</p>
                </th>
                <th>
                  <span>ORGANIZATION</span>
                  <p>UNITEL SA</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>CITY</span>
                  <p>Luanda</p>
                </th>
                <th className="link">
                  <span>DOMAIN</span>
                  <Link href="https://unitel.co.ao">
                    <a target="_blank">unitel.co.ao</a>
                  </Link>
                </th>
              </tr>

              <tr>
                <th>
                  <span>REGION NAME</span>
                  <p>Luanda Province</p>
                </th>
                <th>
                  <span>ROUTE</span>
                  <p>105.172.224.0/19</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>REGION CODE</span>
                  <p>LUA</p>
                </th>
                <th>
                  <span>USAGE TYPE</span>
                  <p>isp</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>COUNTRY NAME</span>
                  <p>Angola</p>
                </th>
                <th>
                  <span>POSTAL CODE</span>
                  <p>N/A</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>POSTAL CODE</span>
                  <p>AO</p>
                </th>
                <th>
                  <span>CALLING CODE</span>
                  <p>+244</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>CONTINENT NAME</span>
                  <p>Africa</p>
                </th>
                <th>
                  <span>FLAG</span>
                  <p>🇦🇴</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>CONTINENT CODE</span>
                  <p>AF</p>
                </th>
                <th>
                  <span>EMOJI FLAG</span>
                  <p>🇦🇴</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>LATITUDE</span>
                  <p>127.0.0.1</p>
                </th>
                <th>
                  <span>EMOJI FLAG UNICODE</span>
                  <p>U+1F1E6 U+1F1F4</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>LONGITUDE</span>
                  <p>13.2353</p>
                </th>
              </tr>
            </tbody>
          </table>



          <table>
            <thead>
              <div>
                <h2>Threat Data</h2>
              </div>
            </thead>

            <tbody>
              <tr>
                <th>
                  <span>TOR</span>
                  <p>false</p>
                </th>
                <th>
                  <span>KNOWN ATTACKER</span>
                  <p>false</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>PROXY</span>
                  <p>false</p>
                </th>
                <th>
                  <span>KNOWN SPAMMER</span>
                  <p>false</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>ANONYMOUS (EITHER TOR OR PROXY)</span>
                  <p>false</p>
                </th>
                <th>
                  <span>THREAT (EITHER ATTACKER OR SPAMMER)</span>
                  <p>false</p>
                </th>
              </tr>
            </tbody>
          </table>


          <table>
            <thead>
              <div>
                <h2>Carrier Data</h2>
              </div>
            </thead>

            <tbody>
              <tr>
                <th>
                  <span>NAME</span>
                  <p>UNITEL</p>
                </th>
                <th>
                  <span>MOBILE CARRIER CODE</span>
                  <p>631</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>MOBILE</span>
                  <p>true</p>
                </th>
                <th>
                  <span>MOBILE NETWORK CODE</span>
                  <p>02</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>ANONYMOUS (EITHER TOR OR PROXY)</span>
                  <p>false</p>
                </th>
                <th>
                  <span>THREAT (EITHER ATTACKER OR SPAMMER)</span>
                  <p>false</p>
                </th>
              </tr>
            </tbody>
          </table>


          <table>
            <thead>
              <div>
                <h2>Timezone Data</h2>
              </div>
            </thead>

            <tbody>
              <tr>
                <th>
                  <span>NAME</span>
                  <p>Africa/Luanda</p>
                </th>
                <th>
                  <span>DAYLIGHT SAVINGS TIME (DST)</span>
                  <p>false</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>ABBREVIATION</span>
                  <p>WAT</p>
                </th>
                <th>
                  <span>LOCAL CURRENT TIME</span>
                  <p>2021-11-13T12:13:50.644228+01:00</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>OFFSET</span>
                  <p>+0100</p>
                </th>
              </tr>
            </tbody>
          </table>


          <table>
            <thead>
              <div>
                <h2>Currency Data</h2>
              </div>
            </thead>

            <tbody>
              <tr>
                <th>
                  <span>NAME</span>
                  <p>Angolan kwanza</p>
                </th>
                <th>
                  <span>NATIVE SYMBOL</span>
                  <p>kz</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>CODE</span>
                  <p>AOA</p>
                </th>
                <th>
                  <span>PLURAL</span>
                  <p>Angolan kwanza</p>
                </th>
              </tr>

              <tr>
                <th>
                  <span>SYMBOL</span>
                  <p>Kz</p>
                </th>
              </tr>
            </tbody>
          </table>
        </Table>
      </Wrapper>
    </>
  )
}

export default alldata
