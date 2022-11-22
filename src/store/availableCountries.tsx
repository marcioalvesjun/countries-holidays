import React, { createContext, useContext, useEffect, useState } from 'react'

export type AvailableCountriesProps = {
  countryCode: string
  name: string
}

type AvailableCountriesContextProps = {
  availableCountries: AvailableCountriesProps[]
}

const AvailableCountriesContext = createContext<AvailableCountriesContextProps>(
  {} as AvailableCountriesContextProps
)

export function AvailableCountriesProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [availableCountries, setAvailableCountries] = useState<
    AvailableCountriesProps[]
  >([])
  const [selectedCountry, setSelectedCountry] = useState<string>('')

  useEffect(() => {
    fetch('https://date.nager.at/api/v3/AvailableCountries')
      .then(res => res.json())
      .then(data => setAvailableCountries(data))
  }, [])

  const selectCountry = (country: string) => {
    setSelectedCountry(country)
  }

  return (
    <AvailableCountriesContext.Provider value={{ availableCountries }}>
      {children}
    </AvailableCountriesContext.Provider>
  )
}

export function useAvailableCountries() {
  const context = useContext(AvailableCountriesContext)

  return context
}
