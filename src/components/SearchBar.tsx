import React, { SyntheticEvent } from 'react'

type InputTypes = {
  userName: { value: string }
}

type Props = {
  onSubmit?: (arg: string) => void
}

export const SearchBar = ({ onSubmit }: Props) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & InputTypes
    const userName = target.userName.value

    onSubmit?.(userName)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}
