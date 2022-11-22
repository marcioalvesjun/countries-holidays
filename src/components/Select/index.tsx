import { useState } from 'react'
import { AvailableCountriesProps } from '../../store/availableCountries'

type SelectProps = {
  availableCountries: AvailableCountriesProps[]
}

function Select({ availableCountries }: SelectProps) {
  const [country, setCountry] = useState('')

  const handleChangeCountry = event => {
    console.log(event.target.value)

    setCountry(event.target.value)
  }

  return (
    <select id="countries" onChange={handleChangeCountry}>
      {availableCountries.map(availableCountry => (
        <option
          key={availableCountry.countryCode}
          value={availableCountry.countryCode}
        >
          {availableCountry.name} - {availableCountry.countryCode}
        </option>
      ))}
    </select>
  )
}

export default Select
