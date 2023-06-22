import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { SearchBarPure } from './SearchBarPure'

const meta: Meta<typeof SearchBarPure> = {
  component: SearchBarPure,
}

export default meta

type Story = StoryObj<typeof SearchBarPure>

export const Primary: Story = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render: () => <SearchBarPure handleSubmit={() => {}} />,
}
