import { useState } from 'react'
import Main from './pages/Main'
import { AvailableCountriesProvider } from './store/availableCountries'

function App() {
  return (
    <AvailableCountriesProvider>
      <Main />
    </AvailableCountriesProvider>
  )
}

export default App
