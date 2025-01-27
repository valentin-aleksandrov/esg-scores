import { useCallback, useState } from 'react'

interface SearchBarProps {
  onChange: (searchTerm: string) => void
  disabled: boolean
}

export const SearchBar = ({ onChange, disabled }: SearchBarProps) => {
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
      <input
        disabled={disabled}
        value={value}
        onChange={useCallback(changeHandler, [onChange])}
      />
      {value && (
        <button className="clear-btn" onClick={clearInput}>
          Clear
        </button>
      )}
    </div>
  )
}

SearchBar.displayName = 'SearchBar'
