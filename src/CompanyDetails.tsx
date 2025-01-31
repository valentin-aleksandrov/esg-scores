import { useMemo } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { Company, ESG_Score } from './types'

const sortESGResultsByDatesAsc = (resultsA: ESG_Score, resultsB: ESG_Score) => {
  return Number(new Date(resultsA.date)) - Number(new Date(resultsB.date))
}

export const CompanyDetails = ({ company, esg_scores }: Company) => {
  const data = useMemo(
    () => esg_scores.sort(sortESGResultsByDatesAsc),
    [esg_scores],
  )
  return (
    <div className="company-details">
      <h2>{company}</h2>
      <LineChart width={700} height={300} data={data}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="environmental"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="governance" stroke="#82ca9d" />
        <Line type="monotone" dataKey="social" stroke="#ff0000" />
      </LineChart>
    </div>
  )
}

CompanyDetails.displayName = 'CompanyDetails'
