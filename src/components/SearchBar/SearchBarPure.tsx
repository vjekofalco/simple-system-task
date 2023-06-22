import React, { SyntheticEvent } from 'react'

type Props = {
  handleSubmit: (e: SyntheticEvent) => void
}

export const SearchBarPure = ({ handleSubmit }: Props) => (
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
)
