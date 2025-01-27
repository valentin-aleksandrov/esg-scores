import classNames from 'classnames'

interface CompaniesDashboardProps {
  children: Array<string>
  activeCompany?: string
  onCompanyClick: (clickedCompany: string) => void
}
export const CompaniesDashboard = ({
  children,
  onCompanyClick,
  activeCompany,
}: CompaniesDashboardProps) => {
  return (
    <div>
      <h2>Companies</h2>
      <table className="company-dashboard-table">
        <tbody>
          {children.map((company) => {
            const handleCompanyRowClick = () => onCompanyClick(company)
            return (
              <tr
                className={classNames({ active: activeCompany === company })}
                key={company}
                onClick={handleCompanyRowClick}
              >
                <td>{company}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
