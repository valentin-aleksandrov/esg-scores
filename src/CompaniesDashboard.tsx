interface CompaniesDashboardProps {
  children: Array<string>
}
export const CompaniesDashboard = ({ children }: CompaniesDashboardProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        {children.map((company) => {
          return (
            <tr key={company}>
              <td>{company}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
