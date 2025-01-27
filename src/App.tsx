import { useState, useEffect, useCallback, useMemo } from 'react'
import { SearchBar } from './SearchBar'
import { CompaniesDashboard } from './CompaniesDashboard'
import { AppTitle } from './AppTitle'
import { CompanyDetails } from './CompanyDetails'
import { Company } from './types'

function App() {
  const [companyToBeViewed, setCompanyToBeViewed] = useState<
    Company | undefined
  >()
  const [companies, setCompanies] = useState<Array<Company>>([])
  const [companiesSearchTerm, setCompaniesSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/companies')
      .then((res) => res.json())
      .then((receivedCompanies: Array<Company>) => {
        // This is used to simulate network latency
        const artificialDelay = 3000
        setTimeout(() => setCompanies(receivedCompanies), artificialDelay)
      })
  }, [])

  const handleSearchBarChange = useCallback(
    (searchTerm: string) => setCompaniesSearchTerm(searchTerm),
    [setCompaniesSearchTerm],
  )

  const handleCompanyClick = useCallback(
    (clickedCompany: string) => {
      const foundCompany = companies.find(
        ({ company }) => company === clickedCompany,
      )
      if (foundCompany) {
        setCompanyToBeViewed(foundCompany)
      }
    },
    [companies],
  )

  const dashboardCompanies = useMemo(() => {
    return companies
      .map(({ company }) => company)
      .filter((company) =>
        company
          .toLocaleLowerCase()
          .includes(companiesSearchTerm.trim().toLocaleLowerCase()),
      )
  }, [companies, companiesSearchTerm])

  return (
    <div className="app">
      <AppTitle />
      <div className="companies-container">
        <SearchBar
          disabled={dashboardCompanies.length === 0}
          onChange={handleSearchBarChange}
        />
        <CompaniesDashboard
          activeCompany={companyToBeViewed?.company}
          onCompanyClick={handleCompanyClick}
        >
          {dashboardCompanies}
        </CompaniesDashboard>
        {companyToBeViewed && <CompanyDetails {...companyToBeViewed} />}
      </div>
    </div>
  )
}

export default App
