import { useState, useEffect, useCallback, useMemo } from 'react'
import { SearchBar } from './SearchBar'
import { CompaniesDashboard } from './CompaniesDashboard'
import { AppTitle } from './AppTitle'
import { CompanyDetails } from './CompanyDetails'

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
  const [companyToBeViewed, setCompanyToBeViewed] = useState<
    Company | undefined
  >()
  const [companies, setCompanies] = useState<Array<Company>>([])
  const [companiesSearchTerm, setCompaniesSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/companies')
      .then((res) => res.json())
      .then((receivedCompanies: [Company]) => {
        setCompanies(receivedCompanies)
      })
  }, [companies])

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
        <SearchBar onChange={handleSearchBarChange} />
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
