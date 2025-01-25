import { useState, useEffect } from 'react'
import { SearchBar } from './SearchBar'
import { CompaniesDashboard } from './CompaniesDashboard'

interface ESG_Score {
  date: string
  environmental: number
  social: number
  governance: number
}
export interface Company {
  company: string
  esg_score: Array<ESG_Score>
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
      <CompaniesDashboard>
        {companies
          .map(({ company }) => company)
          .filter((company) =>
            company
              .toLocaleLowerCase()
              .includes(searchedCompanies.trim().toLocaleLowerCase()),
          )}
      </CompaniesDashboard>
    </div>
  )
}

export default App
