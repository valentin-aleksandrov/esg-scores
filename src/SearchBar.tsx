import { useCallback, useState } from 'react'

interface SearchBarProps {
  onChange: (searchTerm: string) => void
}

export const SearchBar = ({ onChange }: SearchBarProps) => {
  const [value, setValue] = useState('')
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    onChange(newValue)
  }

  const clearInput = () => {
    setValue('')
    onChange('')
  }

  return (
    <div className="search-bar">
      <h2>Search</h2>
      <input value={value} onChange={useCallback(changeHandler, [onChange])} />
      {value && (
        <button className="clear-btn" onClick={clearInput}>
          Clear
        </button>
      )}
    </div>
  )
}

SearchBar.displayName = 'SearchBar'
