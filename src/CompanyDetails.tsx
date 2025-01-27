import { Company } from './App'

export const CompanyDetails = ({ company }: Company) => {
  return (
    <div>
      <h2>{company}</h2>
    </div>
  )
}

CompanyDetails.displayName = 'CompanyDetails'
