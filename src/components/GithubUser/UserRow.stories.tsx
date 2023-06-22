import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { UserRow } from './UserRow'
import { useCallback, useState } from 'react'

const meta: Meta<typeof UserRow> = {
  component: UserRow,
}

export default meta

type Story = StoryObj<typeof UserRow>

export const Primary: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = useCallback(() => {
      setIsOpen(!isOpen)
    }, [isOpen])

    return (
      <UserRow userName="John Doe" isOpen={isOpen} handleClick={handleClick} />
    )
  },
}
