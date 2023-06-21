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
    <div className="text-center">
      <form className="space-y-m" onSubmit={handleSubmit}>
        <input
          className="border border-grey w-full p-s bg-greyDark"
          type="text"
          name="userName"
          placeholder="Enter username"
        />
        <input
          className="w-full border p-s font-bold text-white bg-primary cursor-pointer"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  )
}
