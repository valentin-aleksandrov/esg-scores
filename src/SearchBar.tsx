import { useCallback } from 'react'

interface SearchBarProps {
  onChange: (searchTerm: string) => void
}
export const SearchBar = ({ onChange }: SearchBarProps) => {
  const changeHandler:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = (e) => {
    onChange(e.target.value)
  }
  return <input onChange={useCallback(changeHandler, [onChange])} />
}

SearchBar.displayName = 'SearchBar'
