import { useState, useEffect } from 'react'
import { SearchBar } from './SearchBar'

interface ESG_Score {
  date: string
  environmental: number
  social: number
  governance: number
}
interface Company {
  company: string
  esg_score: [ESG_Score]
}

function App() {
  const [companies, setCompanies] = useState<Array<Company>>([])
  const [searchedCompanies, setSearchedCompanies] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/companies')
      .then((res) => res.json())
      .then((receivedCompanies: [Company]) => {
        setCompanies(receivedCompanies)
      })
  }, [companies])

  return (
    <div className="app">
      <SearchBar onChange={(searchTerm) => setSearchedCompanies(searchTerm)} />
      {searchedCompanies}
    </div>
  )
}

export default App
