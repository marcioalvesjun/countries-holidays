import { useContext, useEffect } from 'react'
import Card from '../../components/Card'
import Select from '../../components/Select'
import { useAvailableCountries } from '../../store/availableCountries'

function Main() {
  const { availableCountries } = useAvailableCountries()

  return (
    <>
      <Select availableCountries={availableCountries} />
      <ul>
        <li>
          <Card />
        </li>
      </ul>
    </>
  )
}

export default Main
