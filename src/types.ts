export interface ESG_Score {
  date: string
  environmental: number
  social: number
  governance: number
}
export interface Company {
  company: string
  esg_scores: Array<ESG_Score>
}
