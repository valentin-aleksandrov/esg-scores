import { useMemo } from 'react'
import { Company, ESG_Score } from './App'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const sortESGResultsByDatesAsc = (resultsA: ESG_Score, resultsB: ESG_Score) => {
  return Number(new Date(resultsA.date)) - Number(new Date(resultsB.date))
}

export const CompanyDetails = ({ company, esg_scores }: Company) => {
  const data = useMemo(
    () => esg_scores.sort(sortESGResultsByDatesAsc),
    [esg_scores],
  )
  return (
    <div>
      <h2>{company}</h2>
      <LineChart width={700} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
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
        <Line type="monotone" dataKey="social" stroke="red" />
      </LineChart>
    </div>
  )
}

CompanyDetails.displayName = 'CompanyDetails'
