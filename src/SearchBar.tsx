import { useCallback } from 'react'

interface SearchBarProps {
  onChange: (searchTerm: string) => void
}

export const SearchBar = ({ onChange }: SearchBarProps) => {
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value)
  }
  return (
    <div>
      <h2>Search</h2>
      <input onChange={useCallback(changeHandler, [onChange])} />
    </div>
  )
}

SearchBar.displayName = 'SearchBar'
